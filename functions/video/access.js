/* eslint-disable n/no-callback-literal */
/* eslint-disable @typescript-eslint/no-var-requires */
// import { Context, ServerlessCallback } from '@twilio-labs/serverless-runtime-types/types'
const { createClient } = require('@supabase/supabase-js')
const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
)

/**
 *
 * @param {Context} context
 * @param {*} event
 * @param {ServerlessCallback} callback
 */
exports.handler = async function (context, event, callback) {
  const res = new Twilio.Response()

  // user verify
  if (!event.request.headers.authorization)
    return callback(null, setUnauthorized(res))

  const token = String(event.request.headers.authorization).split(' ')[1]
  const { user } = await client.auth.api.getUser(token)
  if (!user) return callback(null, setUnauthorized(res))

  // Crear un acceso a la videollamada
  // 1. verificar si existe la sala
  const room = await client
    .from('videoroom')
    .select('userowner, roomactive, roomname, description, name, id')
    .eq('shortid', event.id)

  if (room.error || (room.data.length === 0 && room.data.length <= 1))
    callback(null, setNotFound(res))

  // 2. verificar si el usuario tiene acceso a la sala
  const access = await client
    .from('videoroomaccess')
    .select('id, userenable')
    .eq('userenable', user.id)

  if (access.error || access.data === 0 || room.data[0].userowner !== user.id)
    callback(null, setUnauthorized(res))

  // 3. crear un token de acceso
  const { ACCOUNT_SID, API_KEY_SID, API_KEY_SECRET } = context
  const accessToken = new Twilio.jwt.AccessToken(
    ACCOUNT_SID,
    API_KEY_SID,
    API_KEY_SECRET
  )

  // 3.1 Asignar una identidad dentro de la reunion
  accessToken.identity = user.email

  // 3.2 Crear token
  const videoGrant = new Twilio.jwt.AccessToken.VideoGrant({
    room: room.data[0].name
  })
  accessToken.addGrant(videoGrant)

  // 4. retornar valores
  callback(null, {
    token: accessToken.toJwt()
  })
}

const setNotFound = response => {
  response
    .setBody('Not Found')
    .setStatusCode(404)
    .appendHeader('WWW-Authenticate', 'Basic realm="Authentication Required"')

  return response
}

const setUnauthorized = response => {
  response
    .setBody('Unauthorized')
    .setStatusCode(403)
    .appendHeader('WWW-Authenticate', 'Basic realm="Authentication Required"')

  return response
}
