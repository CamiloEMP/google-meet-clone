import twilio from 'twilio'

exports.handler = function (context, event, callback) {
  const TWILIO_ACCOUNT_SID = context.TWILIO_ACCOUNT_SID
  const TWILIO_API_KEY_SID = context.TWILIO_API_KEY_SID
  const TWILIO_API_KEY_SECRET = context.TWILIO_API_KEY_SECRET
  const ACCESS_TOKEN_IDENTITY = Math.random().toString(36).substring(2, 15)

  const ROOM_NAME = 'myfirstvideoapp'
  const AccessToken = twilio.jwt.AccessToken
  const VideoGrant = AccessToken.VideoGrant

  const videoGrant = new VideoGrant({
    room: ROOM_NAME
  })

  const accessToken = new AccessToken(
    TWILIO_ACCOUNT_SID,
    TWILIO_API_KEY_SID,
    TWILIO_API_KEY_SECRET
  )

  accessToken.addGrant(videoGrant)
  accessToken.identity = ACCESS_TOKEN_IDENTITY
  callback(null, {
    token: accessToken.toJwt()
  })
}
