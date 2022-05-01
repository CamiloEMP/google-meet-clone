/* eslint-disable n/no-callback-literal */
/* eslint-disable @typescript-eslint/no-var-requires */
// import { Context, ServerlessCallback } from '@twilio-labs/serverless-runtime-types/types'
const { createClient } = require('@supabase/supabase-js')
const { v4 } = require('uuid')
const ShortUid = require('short-unique-id')
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

  // Crear Video

  // 1. verificar si la persona puede generar una nueva sala
  // 2. crear una sala en base de datos
  const uuid = new ShortUid()
  const shortid = uuid(9)
  const roomname = v4()
  await client.from('videoroom').insert({
    name: event.name,
    description: '',
    shortid,
    userowner: user.id,
    roomname,
    roomactive: true
  })

  // 3. retornar el shortid de la sala con los datos
  callback(null, {
    roomName: event.name,
    uid: shortid
  })
}

const setUnauthorized = response => {
  response
    .setBody('Unauthorized')
    .setStatusCode(403)
    .appendHeader('WWW-Authenticate', 'Basic realm="Authentication Required"')

  return response
}
