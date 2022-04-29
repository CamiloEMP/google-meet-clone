import React from 'react'
import { Link } from 'react-router-dom'
import MeetIcon from '../assets/MeetIcon'
import { useSession } from '../hooks/useSession'

export const NavBar = () => {
  const { isAuth, user } = useSession()
  console.log({ user, isAuth })
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
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
          <button className="select-none">
            <img
              className="w-10 h-10 rounded-full"
              src="https://randomuser.me/api/portraits/women/8.jpg"
              alt="Rounded avatar"
            />
          </button>
        )}
      </div>
    </nav>
  )
}
