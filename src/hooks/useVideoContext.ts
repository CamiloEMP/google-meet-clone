import { useContext } from 'react'
import { VideoContext } from '../provider/video'

export function useVideoContext() {
  const context = useContext(VideoContext)
  if (!context) throw new Error('useVideoContext nesesita de VideoProvider')
  return context
}
