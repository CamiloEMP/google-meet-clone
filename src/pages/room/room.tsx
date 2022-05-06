import { Navbar } from 'flowbite-react'
import { IsSupported } from '../../components/IsSupported'
import { VideoParticipant } from '../../components/room/participant'
import { useVideoContext } from '../../hooks/useVideoContext'

export function Room(): JSX.Element {
  const { mediaCurrentAudio, mediaCurrentVideo } = useVideoContext()

  return (
    <IsSupported>
      <Navbar />
      <div className="container mx-auto grid grid-cols-2">
        {mediaCurrentAudio && mediaCurrentVideo && (
          <VideoParticipant
            audio={mediaCurrentAudio}
            video={mediaCurrentVideo}
          />
        )}
      </div>
    </IsSupported>
  )
}
