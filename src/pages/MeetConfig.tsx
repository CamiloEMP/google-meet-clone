import React, { useRef, useEffect, useState } from 'react'
import Twilio from 'twilio-video'
import CamIcon from '../assets/CameraIcon'
import ConIcon from '../assets/ConfigIcon'
import MicroIcon from '../assets/MicrophoneIcon'
import { ButtonMeet } from '../components/Buttons/ButtonMeet'
import { Button } from '../components/Buttons/ButtonPrimary'
import { NavBar } from '../components/Navbar'
import { useVideoContext } from '../hooks/useVideoContext'

export function MeetConfig() {
  const { mediaCurrentAudio, mediaCurrentVideo } = useVideoContext()
  const [isActive, setIsActive] = useState({
    cam: false,
    mic: false
  })
  const localVideo = useRef<HTMLDivElement>(null)
  const localAudio = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (localVideo.current && mediaCurrentVideo)
      localVideo.current.append(mediaCurrentVideo.attach())
  }, [mediaCurrentVideo])

  useEffect(() => {
    if (localAudio.current && mediaCurrentAudio) {
      localAudio.current.append(mediaCurrentAudio.attach())
      console.log(mediaCurrentAudio)
    }
  }, [mediaCurrentAudio])

  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center mt-16 justify-center px-4 gap-4">
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-center dark:text-white">
            Te uniras como Fernando Ticona
          </h2>
          <div className="flex items-center justify-center gap-1">
            <span className="md:text-lg text-gray-600 dark:text-gray-400">
              fernando@gmail.com
            </span>
            <button className="md:text-lg text-blue-500">
              (Cambiar cuenta)
            </button>
          </div>
        </section>
        <div
          className="max-w-lg h-72 lg:h-80 border rounded-md"
          ref={localVideo}
        />
        <div className="hidden" ref={localAudio} />
        <section className="flex items-center gap-4">
          <ButtonMeet icon={<CamIcon />} />
          <ButtonMeet icon={<MicroIcon />} />
          <ButtonMeet icon={<ConIcon />} />
          <Button otherClass="lg:text-md" type="button" text="Unirse" />
        </section>
      </main>
    </>
  )
}
