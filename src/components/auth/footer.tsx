import { Button } from 'flowbite-react'
import React from 'react'

interface Props {
  onClick: () => void
  isLogin: true | false
}

export const Footer = ({ onClick, isLogin }: Props): JSX.Element => {
  const text = isLogin ? 'Iniciar Sesión' : 'Registrate'
  return (
    <footer className="flex flex-col gap-2">
      <Button type="submit" className="border-0 mx-auto">
        {text}
      </Button>
      <span className="block text-center dark:text-white">
        {isLogin ? 'Si no tienes una cuenta' : 'Si tienes una cuenta'}
      </span>
      <button className="text-blue-500 underline" onClick={onClick}>
        {isLogin ? 'Registrate' : 'Iniciar Sesión'}
      </button>
    </footer>
  )
}
