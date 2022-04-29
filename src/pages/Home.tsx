import React, { useState } from 'react'
import { LoginCard } from '../components/auth/login'
import { LogupCard } from '../components/auth/logup'
import { AuthActions } from '../components/auth/types'
import { Button } from '../components/Buttons/ButtonPrimary'
import { NavBar } from '../components/Navbar'

export const Home = () => {
  const [over, setOver] = useState(false)
  const [action, setAction] = useState<AuthActions>('login')

  return (
    <div className="flex flex-col w-full h-full">
      <NavBar />
      <main className="flex flex-col w-full h-full">
        <section className="flex-1 container mx-auto flex h-full w-full items-center flex-col-reverse md:flex-row gap-4 md:gap-0">
          <div className="w-full md:w-2/4 px-4 md:px-0 flex-1 md:flex-auto">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-center md:text-left">
              Reunete con tu equipo, familiares y tus amigos
            </h1>
            <div className="flex gap-2 w-fit items-center mx-auto md:mx-0">
              <Button
                type="button"
                text="Inicia Sesión"
                action={() => {
                  setOver(true)
                  setAction('login')
                }}
                otherClass="select-none"
              />

              <span>o</span>
              <button
                onClick={() => {
                  setOver(true)
                  setAction('logup')
                }}
                className="select-none text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm md:text-base px-8 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
        </section>
      </main>
      {over && (
        <section
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
        </section>
      )}
    </div>
  )
}
