import React, { createContext } from 'react'
import { useRoom } from '../hooks/useRoom'
import { VideoContextI } from '../types/video.types'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const VideoContext = createContext<VideoContextI>(null!)

/**
 * @description Crea la configuracion inicial y da acceso a el estado global de las videollamadas
 */
export function VideoProvider({
  children
}: React.PropsWithChildren<unknown>): JSX.Element {
  const { isConnecting, connect } = useRoom()
  return (
    <VideoContext.Provider value={{ isConnecting, connect }}>
      {children}
    </VideoContext.Provider>
  )
}
