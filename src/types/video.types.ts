import { LocalAudioTrack, LocalVideoTrack } from 'twilio-video'

export type VideoContextI = useRoomI & useMediaTrackI

export interface useRoomI {
  isConnecting: boolean
  connect: connectFunction
}

export interface useMediaTrackI {
  mediaVideoInput: MediaDeviceInfo[]
  mediaAudioInput: MediaDeviceInfo[]
  updateDevices: () => void
  setCurrentMedia: (devices: setCurrentMediaP) => void
  mediaCurrentVideo: LocalVideoTrack | undefined
  mediaCurrentAudio: LocalAudioTrack | undefined
}

// Actions
export type connectFunction = (token: string) => void
export interface setCurrentMediaP {
  deviceVideo?: MediaDeviceInfo
  deviceAudio?: MediaDeviceInfo
}
