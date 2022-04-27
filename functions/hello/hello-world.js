/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Context,
  ServerlessCallback
} from '@twilio-labs/serverless-runtime-types/types'

/**
 *
 * @param {Context} context
 * @param {*} event
 * @param {ServerlessCallback} callback
 */
exports.handler = function (context, event, callback) {
  callback(null, JSON.stringify({ data: 'Hello world!' }))
}
