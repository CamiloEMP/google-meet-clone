import { VideoProvider } from '../../provider/video'
import { Room } from './room'

export function VideoConference(): JSX.Element {
  return (
    <VideoProvider>
      <Room />
    </VideoProvider>
  )
}
