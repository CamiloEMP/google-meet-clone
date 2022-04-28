import React from 'react'
import { Link } from 'react-router-dom'
import MeetIcon from '../assets/MeetIcon'

export const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center md:relative gap-6">
      <div className="md:absolute md:top-5 md:left-5">
        <MeetIcon />
      </div>
      <img
        src="https://www.gstatic.com/meet/user_edu_brady_bunch_light_81fa864771e5c1dd6c75abe020c61345.svg"
        alt="image home"
        className="w-80 h-80 md:w-96 md:h-96 "
      />
      <section className="max-w-xs md:max-w-lg flex flex-col gap-4 md:gap-6 mx-auto items-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-center">
          Reunete con tu equipo, familiares y tus amigos
        </h1>
        <Link
          to="/dashboard"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-md text-base md:text-lg px-8 py-2 md:px-20 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Inicia Sesión
        </Link>
        <Link to="/" className="text-black font-semibold text-base md:text-lg">
          Registrate
        </Link>
      </section>
    </section>
  )
}
