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
      <Button type="submit" className="mx-auto">
        {text}
      </Button>
      <span className="block text-center">
        {isLogin ? 'Si no tienes una cuenta' : 'Si tienes una cuenta'}
      </span>
      <button className="text-blue-500" onClick={onClick}>
        {isLogin ? 'Registrate' : 'Iniciar Sesión'}
      </button>
    </footer>
  )
}
