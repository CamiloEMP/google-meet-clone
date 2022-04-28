import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MeetIcon from '../assets/MeetIcon'
import { LoginCard } from '../components/auth/login'
import { LogupCard } from '../components/auth/logup'
import { AuthActions } from '../components/auth/types'

function Navbar(): JSX.Element {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a
          href="https://flowbite.com"
          className="flex items-center"
          aria-label="Google Meet Inicio"
        >
          <span role="img" className="mr-3 h-6 sm:h-9 select-none">
            <MeetIcon />
          </span>
        </a>
        <button className="select-none">
          <img
            className="w-10 h-10 rounded-full"
            src="https://randomuser.me/api/portraits/women/8.jpg"
            alt="Rounded avatar"
          />
        </button>
      </div>
    </nav>
  )
}

export const Home = () => {
  const [over, setOver] = useState(false)
  const [action, setAction] = useState<AuthActions>('login')

  return (
    <>
      <div className="flex flex-col w-full h-full">
        <Navbar />
        <main className="flex-1 container mx-auto flex h-full w-full items-center flex-col-reverse md:flex-row gap-4 md:gap-0">
          <div className="w-full md:w-2/4 px-4 md:px-0 flex-1 md:flex-auto">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-center md:text-left">
              Reunete con tu equipo, familiares y tus amigos
            </h1>
            <div className="flex gap-2 w-fit items-center mx-auto md:mx-0">
              <button
                onClick={() => {
                  setOver(true)
                  setAction('login')
                }}
                className="select-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Inicia Sesión
              </button>
              <span>o</span>
              <button
                onClick={() => {
                  setOver(true)
                  setAction('logup')
                }}
                className="select-none text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Registrate
              </button>
            </div>
          </div>
          <div className="w-full md:w-2/4 px-4 md:px-0">
            <img
              src="https://www.gstatic.com/meet/user_edu_brady_bunch_light_81fa864771e5c1dd6c75abe020c61345.svg"
              alt="image home"
              className="w-80 h-80 md:w-96 md:h-96 mx-auto"
            />
          </div>
        </main>
      </div>
      {over && (
        <div
          role="dialog"
          className="absolute inset-0 z-10 h-full w-full bg-black/25 flex justify-center items-center overflow-y-auto overflow-x-hidden"
        >
          {action === 'login' ? (
            <LoginCard
              onClose={() => setOver(false)}
              onChange={a => setAction(a)}
            />
          ) : (
            <LogupCard
              onClose={() => setOver(false)}
              onChange={a => setAction(a)}
            />
          )}
        </div>
      )}
    </>
  )
}
