import React from 'react'
import { Button } from '../Buttons/ButtonPrimary'

interface Props {
  onClick: () => void
  isLogin: true | false
}

export const Footer = ({ onClick, isLogin }: Props): JSX.Element => {
  const text = isLogin ? 'Iniciar Sesión' : 'Registrate'
  return (
    <footer className="flex flex-col gap-2">
      <Button text={text} type="submit" otherClass="min-w-fit w-2/4 mx-auto" />
      <span className="block text-center">
        {isLogin ? 'Si no tienes una cuenta' : 'Si tienes una cuenta'}
      </span>
      <button className="text-blue-500" onClick={onClick}>
        {isLogin ? 'Registrate' : 'Iniciar Sesión'}
      </button>
    </footer>
  )
}
