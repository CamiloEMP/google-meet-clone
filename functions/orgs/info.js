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
  const response = new Twilio.Response()
  let res = []

  if (!event.request.headers.authorization)
    return callback(null, setUnauthorized(response))

  const token = String(event.request.headers.authorization).split(' ')[1]
  const { user } = await client.auth.api.getUser(token)
  if (!user) return callback(null, setUnauthorized(response))

  const query = await client.from('member').select('org').eq('userid', user.id)
  if (query.error) return callback(null, setUnauthorized(response))

  const orgQuery = await await Promise.all(
    query.data.map(async x => {
      const org = await client
        .from('organizations')
        .select('name')
        .eq('uid', x.org)

      if (org.error) return null

      return {
        id: x.org,
        name: org.data[0].name
      }
    })
  )

  res = orgQuery.filter(x => x !== null)
  callback(null, JSON.stringify(res))
}

const setUnauthorized = response => {
  response
    .setBody('Unauthorized')
    .setStatusCode(203)
    .appendHeader('WWW-Authenticate', 'Basic realm="Authentication Required"')

  return response
}
