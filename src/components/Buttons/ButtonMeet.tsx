import React from 'react'

interface ButtonProps {
  icon: React.ReactNode
  onClick?: () => void
}

export const ButtonMeet = ({ icon, onClick }: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-zinc-700 p-2 transition-transform hover:scale-105 hover:bg-opacity-90"
    >
      {icon}
    </button>
  )
}
