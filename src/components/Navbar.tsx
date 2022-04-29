import React from 'react'
import { Link } from 'react-router-dom'
import MeetIcon from '../assets/MeetIcon'
import { useSession } from '../hooks/useSession'
import { Navbar as NavbarContainer, Button } from 'flowbite-react'

export const NavBar = () => {
  const { isAuth, user } = useSession()
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
        {isAuth && (
          <Link to="/dashboard">
            <Button className="select-none" color="light">
              {user?.email}
            </Button>
          </Link>
        )}
      </div>
    </NavbarContainer>
  )
}
