import React from 'react'
import CamIcon from '../assets/CameraIcon'
import ConIcon from '../assets/ConfigIcon'
import MicroIcon from '../assets/MicrophoneIcon'
import { ButtonMeet } from '../components/Buttons/ButtonMeet'
import { Button } from '../components/Buttons/ButtonPrimary'
import { NavBar } from '../components/Navbar'

export function MeetConfig() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center mt-16 justify-center px-4 gap-4">
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
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
        <section className="max-w-lg h-72 lg:h-80 border rounded-md">
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis, pariatur, maiores quidem fugit rerum tempora voluptatum
            enim debitis vitae labore accusamus ullam. Iste ut voluptas
            perspiciatis iure, quidem aut dolores!
          </p>
        </section>
        <section className="flex items-center gap-4">
          <ButtonMeet icon={<CamIcon />} />
          <ButtonMeet icon={<MicroIcon />} />
          <ButtonMeet icon={<ConIcon />} />
          <Button otherClass="lg:text-lg" type="button" text="Unirse" />
        </section>
      </main>
    </>
  )
}
