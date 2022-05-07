import { VideoProvider } from '../../provider/video'
import { MeetConfig } from './MeetConfig'
import { Room } from './room'

export function VideoConference(): JSX.Element {
  return <VideoProvider>{false ? <Room /> : <MeetConfig />}</VideoProvider>
}
