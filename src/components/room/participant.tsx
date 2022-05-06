import { useEffect, useRef } from 'react'
import { LocalAudioTrack, LocalVideoTrack } from 'twilio-video'
import { ParticipantAudio } from './assets/audio'

interface VideoParticipantProps {
  video: LocalVideoTrack | undefined
  audio: LocalAudioTrack | undefined
}

export function VideoParticipant({ audio, video }: VideoParticipantProps) {
  const localVideo = useRef<HTMLDivElement>(null)
  if (!audio) return null
  if (!video) return null

  useEffect(() => {
    if (localVideo.current && video) {
      localVideo.current.innerHTML = ''
      localVideo.current.append(video.attach())
    }
  }, [video, localVideo])

  return (
    <div className="ralative w-full h-auto bg-black rounded-lg shadow">
      <div className="relative [padding-top:56.25%]">
        <div ref={localVideo} className="absolute inset-0 z-0 video-rounded" />
        <div className="absolute z-10 inset-0 flex flex-col justify-between items-center p-3">
          <ParticipantAudio audio={audio} />
        </div>
      </div>
    </div>
  )
}
