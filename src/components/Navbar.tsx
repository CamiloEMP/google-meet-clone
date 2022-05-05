import React from 'react'
import { Link } from 'react-router-dom'
import MeetIcon from '../assets/MeetIcon'
import { useSession } from '../hooks/useSession'
import {
  SunIcon,
  MoonIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/outline'
import { Navbar as NavbarContainer, Button } from 'flowbite-react'
import { useUser } from '../hooks/useUser'
import { useAppContext } from '../hooks/useAppContext'

function MenuRightNoAuth(): JSX.Element {
  const { toggleAuthDialog } = useAppContext()
  return (
    <>
      {/*
      <Button
        icon={QuestionMarkCircleIcon}
        color="light"
        className="!px-0"
        pill
      />
      */}
      <Button onClick={() => toggleAuthDialog(true, 'logup')} color="light">
        Registrate
      </Button>
      <Button onClick={() => toggleAuthDialog(true, 'login')}>
        Iniciar Sesion
      </Button>
    </>
  )
}

export const NavBar = () => {
  const { isAuth } = useUser()
  return (
    <NavbarContainer rounded={false}>
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link
          to="/"
          className="flex items-center"
          aria-label="Google Meet Inicio"
        >
          <span role="img" className="mr-3 h-6 sm:h-9 select-none">
            <MeetIcon />
          </span>
        </Link>
        <div className="flex items-center gap-2">
          {isAuth ? null : <MenuRightNoAuth />}
        </div>
      </div>
    </NavbarContainer>
  )
}
