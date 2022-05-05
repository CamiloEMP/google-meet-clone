import React from 'react'
import { Button } from 'flowbite-react'
import { NavBar } from '../components/Navbar'
import { useAppContext } from '../hooks/useAppContext'

export const Home = () => {
  const { toggleAuthDialog } = useAppContext()

  return (
    <div className="flex flex-col w-full h-full">
      <NavBar />
      <main className="flex flex-col w-full h-full">
        <section className="flex-1 container mx-auto flex h-full w-full items-center flex-col-reverse md:flex-row gap-4 md:gap-0">
          <div className="w-full md:w-2/4 px-4 md:px-0 flex-1 md:flex-auto">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-center md:text-left dark:text-white">
              Reunete con tu equipo, familiares y tus amigos
            </h1>
            <div className="flex gap-2 w-fit items-center mx-auto md:mx-0">
              <Button
                type="button"
                onClick={() => {
                  toggleAuthDialog(true, 'login')
                }}
                className="select-none border-none"
              >
                Inicia Sesión
              </Button>

              <span className="dark:text-white">o</span>
              <Button
                type="button"
                onClick={() => {
                  toggleAuthDialog(true, 'logup')
                }}
                className="select-none"
                color="light"
              >
                Registrate
              </Button>
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
    </div>
  )
}
