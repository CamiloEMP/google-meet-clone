import React from 'react'
import { Link } from 'react-router-dom'
import MeetIcon from '../assets/MeetIcon'
import {
  SunIcon,
  MoonIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/outline'
import { Navbar as NavbarContainer, Button, Dropdown } from 'flowbite-react'
import { useAuthContext } from '../hooks/useAuthContext'
import { AvatarIcon } from '../assets/avatar'

function MenuRightAuth(): JSX.Element {
  return (
    <>
      <Dropdown label={<AvatarIcon />} pill inline arrowIcon={false}>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </>
  )
}

function MenuRightNoAuth(): JSX.Element {
  const { toggleAuthDialog } = useAuthContext()
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
          {isAuth ? <MenuRightAuth /> : <MenuRightNoAuth />}
        </div>
      </div>
    </NavbarContainer>
  )
}
