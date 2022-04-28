import React from 'react'
import MeetIcon from '../assets/MeetIcon'

export const Header = () => {
  return (
    <header className="p-5 flex justify-between items-center">
      <MeetIcon />
      <section className="flex items-center gap-8">
        <div>
          <span>DarMode</span>
        </div>
        <div className="relative w-10 h-10 md:w-14 md:h-14 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute w-12 h-12 md:w-16 md:h-16 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </section>
    </header>
  )
}
