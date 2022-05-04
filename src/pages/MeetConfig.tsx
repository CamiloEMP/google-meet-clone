import React, { useRef, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Twilio from 'twilio-video'
import CamIcon from '../assets/CameraIcon'
import ConIcon from '../assets/ConfigIcon'
import MicroIcon from '../assets/MicrophoneIcon'
import { ButtonMeet } from '../components/Buttons/ButtonMeet'
import { Button } from '../components/Buttons/ButtonPrimary'
import { NavBar } from '../components/Navbar'
import { useCreateRoomQuery } from '../redux/api/video'

export function MeetConfig() {
  const [isActive, setIsActive] = useState({
    cam: false,
    mic: false
  })
  const localVideo = useRef<HTMLDivElement>(null)
  // const params = useParams()
  // const room = params.nameRoom || ''
  // const { data } = useCreateRoomQuery({ name: room })

  useEffect(() => {
    async function addLocalVideo() {
      if (localVideo.current) {
        const track = await Twilio.createLocalVideoTrack()
        console.log({ track })
        localVideo.current.appendChild(track.attach())
      }
    }
    addLocalVideo()
  }, [])

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
