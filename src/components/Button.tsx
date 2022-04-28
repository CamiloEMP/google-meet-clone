import React from 'react'

type Props = {
  children: React.ReactNode
}

export const Button = ({ children }: Props) => {
  return (
    <button className="font-normal rounded-md text-base md:text-lg px-8 py-2 bg-blue-600 text-white  hover:bg-opacity-90 ">
      {children}
    </button>
  )
}
