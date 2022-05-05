import { useEffect, useState } from 'react'
import {
  createLocalAudioTrack,
  createLocalVideoTrack,
  LocalAudioTrack,
  LocalVideoTrack
} from 'twilio-video'
import { setCurrentMediaP, useMediaTrackI } from '../types/video.types'

async function getAllMediaTrack() {
  const media = await navigator.mediaDevices.enumerateDevices()
  console.log(media.filter(x => x.kind === 'audiooutput'))
  return {
    video: media.filter(x => x.kind === 'videoinput'),
    audio: media.filter(x => x.kind === 'audioinput')
  }
}

/**
 * @description gestiona las entradas multimedia (video/audio) del navegador
 */
export function useMediaTrack(): useMediaTrackI {
  const [mediaCurrentVideo, setMediaCurrentVideo] = useState<LocalVideoTrack>()
  const [mediaCurrentAudio, setMediaCurrentAudio] = useState<LocalAudioTrack>()
  // Devices
  const [mediaVideoInput, setMediaVideoInput] = useState<MediaDeviceInfo[]>([])
  const [mediaAudioInput, setMediaAudioInput] = useState<MediaDeviceInfo[]>([])

  async function updateDevices() {
    const { video, audio } = await getAllMediaTrack()
    setMediaVideoInput(video)
    setMediaAudioInput(audio)
    return {
      video,
      audio
    }
  }

  // Selecciona los Dispositivos
  function setCurrentMedia({ deviceAudio, deviceVideo }: setCurrentMediaP) {
    if (typeof deviceVideo !== 'undefined') {
      createLocalVideoTrack(deviceVideo).catch(e => console.error(e))
    }
    if (typeof deviceAudio !== 'undefined') {
      createLocalAudioTrack(deviceAudio).catch(e => console.error(e))
    }
  }

  useEffect(() => {
    updateDevices().then(s => {
      if (!mediaCurrentVideo) {
        setCurrentMedia({ deviceVideo: s.video[0], deviceAudio: s.audio[0] })
      }
    })
  }, [])

  return {
    mediaVideoInput,
    mediaAudioInput,
    updateDevices,
    setCurrentMedia,
    mediaCurrentVideo,
    mediaCurrentAudio
  }
}
