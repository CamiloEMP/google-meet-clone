import React from 'react'
import { Link } from 'react-router-dom'
import MeetIcon from '../assets/MeetIcon'
import { useSession } from '../hooks/useSession'
import {
  Navbar as NavbarContainer,
  Button,
  DarkThemeToggle
} from 'flowbite-react'

export const NavBar = () => {
  const { isAuth, user } = useSession()
  console.log(user)
  return (
    <NavbarContainer rounded={false}>
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center" aria-label="Google Meet Inicio">
          <span role="img" className="mr-3 h-6 sm:h-9 select-none">
            <MeetIcon />
          </span>
        </div>
        <div className="flex items-center gap-5">
          {isAuth && (
            <Link to="/profile">
              <Button className="select-none" color="light">
                {user?.email}
              </Button>
            </Link>
          )}
          <DarkThemeToggle />
        </div>
      </div>
    </NavbarContainer>
  )
}
