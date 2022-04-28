/**
 *
 * @param {Context} context
 * @param {*} event
 * @param {ServerlessCallback} callback
 */
exports.handler = function (context, event, callback) {
  callback(null, JSON.stringify({ data: 'Hello world!' }))
}
