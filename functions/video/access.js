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
  const room = client
    .from('videoroom')
    .select('userowner')
    .select('roomactive')
    .select('roomname')
    .select('description')
    .select('name')
    .eq('shortid', event.room)
  console.log(room)

  // 2. verificar si el usuario tiene acceso a la sala
  // 3. crear un token de acceso
  // 4. retornar valores
  callback(null, {
    token: 'token'
  })
}

const setUnauthorized = response => {
  response
    .setBody('Unauthorized')
    .setStatusCode(403)
    .appendHeader('WWW-Authenticate', 'Basic realm="Authentication Required"')

  return response
}
