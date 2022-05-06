import { useEffect, useState } from "react"
import { LocalAudioTrack } from "twilio-video"


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

export function ParticipantAudio({ audio }: {audio: LocalAudioTrack}): JSX.Element {
  const [vMax, setVMax] = useState(0)
  const [vMin, setVMin] = useState(0)

  useEffect(() => {
    analizeAudio(audio, v => {
      setVMax(v >= 2 ? v : 3)
      setVMin(v >= 2 ? (v <= 5 ? v : 5) : 3)
    })
  }, [audio || ''])

  return (
    <div
        role="volume-state"
        className="w-7 h-7 self-end bg-blue-500 rounded-full flex gap-1 justify-center items-center py-1.5"
      >
        <div
          className="w-1 bg-white rounded-lg"
          style={{ height: vMin + '5%' }}
        />
        <div
          className="w-1 bg-white rounded-lg"
          style={{ height: vMax + '5%' }}
        />
        <div
          className="w-1 bg-white rounded-lg"
          style={{ height: vMin + '5%' }}
        />
      </div>
  )
}
