export interface VideoContextI {
  isConnecting: boolean
  connect: connectFunction
}

export type useRoomI = Pick<VideoContextI, 'isConnecting' | 'connect'>

// Actions
export type connectFunction = (token: string) => void
