import { useRef, useEffect, useState } from 'react'
import Twilio, { LocalAudioTrack } from 'twilio-video'
import CamIcon from '../../assets/CameraIcon'
import ConIcon from '../../assets/ConfigIcon'
import MicroIcon from '../../assets/MicrophoneIcon'
import { ButtonMeet } from '../../components/Buttons/ButtonMeet'
import { NavBar } from '../../components/Navbar'
import { useVideoContext } from '../../hooks/useVideoContext'
import { Button } from 'flowbite-react'

function rootMeanSquare(samples: Uint8Array) {
  const sumSq = samples.reduce((sumSq, sample) => sumSq + sample * sample, 0)
  return Math.sqrt(sumSq / samples.length)
}

async function analizeAudio(
  track: LocalAudioTrack,
  onLevelChanged: (a: number) => void
) {
  const audioContext = new AudioContext()
  await audioContext.resume()
  const analyser = audioContext.createAnalyser()
  analyser.fftSize = 1024
  analyser.smoothingTimeConstant = 0.5

  const stream = new MediaStream([track.mediaStreamTrack])
  const source = audioContext.createMediaStreamSource(stream)
  source.connect(analyser)

  const samples = new Uint8Array(analyser.frequencyBinCount)
  let level: number | null = null

  requestAnimationFrame(function checkLevel() {
    analyser.getByteFrequencyData(samples)
    const rms = rootMeanSquare(samples)
    const log2Rms = rms && Math.log2(rms)

    // Audio level ranges from 0 (silence) to 10 (loudest).
    const newLevel = Math.ceil((10 * log2Rms) / 8)
    if (level !== newLevel) {
      level = newLevel
      onLevelChanged(level)
    }

    // Continue calculating the level only if the audio track is live.
    if (track.mediaStreamTrack.readyState === 'live') {
      requestAnimationFrame(checkLevel)
    } else {
      requestAnimationFrame(() => onLevelChanged(0))
    }
  })
}

export function MeetConfig() {
  const { mediaCurrentAudio, mediaCurrentVideo } = useVideoContext()
  const localVideo = useRef<HTMLDivElement>(null)
  const [localAudioVolume, setVolume] = useState(0)

  useEffect(() => {
    if (localVideo.current && mediaCurrentVideo) {
      localVideo.current.innerHTML = ''
      localVideo.current.append(mediaCurrentVideo.attach())
    }
  }, [mediaCurrentVideo])

  useEffect(() => {
    console.log(mediaCurrentAudio)
    if (mediaCurrentAudio) {
      analizeAudio(mediaCurrentAudio, setVolume)
    }
  }, [mediaCurrentAudio])
  // [padding-top:56.25%]
  return (
    <div className="h-full flex flex-col">
      <NavBar />
      <div className="flex-1 container mx-auto">
        <main className="flex gap-2 overflow-x-auto h-full">
          <div className="w-2/4 flex  items-center justify-center h-full">
            <div className="ralative w-full h-auto bg-black rounded-lg">
              <div className="relative [padding-top:56.25%]">
                <div
                  ref={localVideo}
                  className="absolute inset-0 z-0 video-rounded"
                />
                <div className="absolute z-10 inset-0 flex flex-col justify-between items-center p-3">
                  <div className="self-end w-7 h-7 bg-blue-500 rounded-full select-none">
                    {localAudioVolume}
                  </div>
                  <div className="flex gap-4 items-center">
                    <Button pill color="dark">
                      1
                    </Button>
                    <Button pill color="dark">
                      2
                    </Button>
                    <Button pill color="dark">
                      3
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/4">action</div>
        </main>
      </div>
    </div>
  )
}
