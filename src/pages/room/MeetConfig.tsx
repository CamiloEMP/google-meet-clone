import { useRef, useEffect } from 'react'
import { NavBar } from '../../components/Navbar'
import { useVideoContext } from '../../hooks/useVideoContext'
import { Button } from 'flowbite-react'
import { VideoParticipant } from '../../components/room/participant'
import { CameraIcon, MicrophoneIcon, CogIcon } from '@heroicons/react/outline'

export function MeetConfig() {
  const { mediaCurrentAudio, mediaCurrentVideo } = useVideoContext()
  const localVideo = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (localVideo.current && mediaCurrentVideo) {
      localVideo.current.innerHTML = ''
      localVideo.current.append(mediaCurrentVideo.attach())
    }
  }, [mediaCurrentVideo])

  return (
    <div className="h-full flex flex-col">
      <NavBar />
      <div className="flex-1 container mx-auto">
        <main className="flex gap-2 overflow-x-auto h-full">
          <div className="w-2/4 flex  items-center justify-center h-full">
            <div className="ralative w-full h-auto bg-black rounded-lg">
              {mediaCurrentAudio && mediaCurrentVideo && (
                <VideoParticipant
                  audio={mediaCurrentAudio}
                  video={mediaCurrentVideo}
                >
                  <div className="flex justify-center gap-4">
                    <Button
                      pill
                      color={mediaCurrentVideo.isEnabled ? 'dark' : 'red'}
                      icon={CameraIcon}
                    />
                    <Button
                      pill
                      color={mediaCurrentAudio.isEnabled ? 'dark' : 'red'}
                      icon={MicrophoneIcon}
                    />
                    <Button pill color="dark" icon={CogIcon} />
                  </div>
                </VideoParticipant>
              )}
            </div>
          </div>
          <div className="w-2/4">action</div>
        </main>
      </div>
    </div>
  )
}
