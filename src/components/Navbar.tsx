import React from 'react'
import { Link } from 'react-router-dom'
import MeetIcon from '../assets/MeetIcon'
import {
  SunIcon,
  MoonIcon,
  QuestionMarkCircleIcon,
  LogoutIcon
} from '@heroicons/react/outline'
import { Navbar as NavbarContainer, Button, Dropdown } from 'flowbite-react'
import { useAuthContext } from '../hooks/useAuthContext'
import { AvatarIcon } from '../assets/avatar'
import { useAppContext } from '../hooks/useAppContext'

function MenuRightAuth(): JSX.Element {
  const { styleTheme, setStyleTheme } = useAppContext()
  return (
    <>
      <Button
        color="light"
        pill
        onClick={() => {
          setStyleTheme(styleTheme === 'light' ? 'dark' : 'light')
        }}
      >
        {styleTheme === 'light' ? (
          <>
            <SunIcon className="w-5 h-5 mr-2 inline-flex items-center" />
            Claro
          </>
        ) : null}
        {styleTheme === 'dark' ? (
          <>
            <MoonIcon className="w-5 h-5 mr-2 inline-flex items-center" />
            Oscuro
          </>
        ) : null}
        {styleTheme === 'auto' ? (
          <>
            <span className="w-5 h-5 inline-flex justify-center items-center font-bold mr-2">
              A
            </span>
            <span>Auto</span>
          </>
        ) : null}
      </Button>
      <Dropdown label={<AvatarIcon />} pill inline arrowIcon={false}>
        <Dropdown.Item>
          <div className="text-red-500">
            <LogoutIcon className="w-5 h-5 inline-block mr-2 place-content-center" />
            Cerrar Sesion
          </div>
        </Dropdown.Item>
      </Dropdown>
    </>
  )
}

function MenuRightNoAuth(): JSX.Element {
  const { toggleAuthDialog } = useAuthContext()
  return (
    <>
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
  const { isAuth } = useAuthContext()
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
          <Button
            icon={QuestionMarkCircleIcon}
            color="light"
            className="!px-0"
            pill
          />
          {isAuth ? <MenuRightAuth /> : <MenuRightNoAuth />}
        </div>
      </div>
    </NavbarContainer>
  )
}
