import { Button } from 'flowbite-react'
import React from 'react'
import { useAppContext } from '../../hooks/useAppContext'

interface Props {
  isLogin: true | false
}

export const Footer = ({ isLogin }: Props): JSX.Element => {
  const { toggleAuthDialog } = useAppContext()
  const text = isLogin ? 'Iniciar Sesión' : 'Registrate'
  return (
    <footer className="flex flex-col gap-2">
      <Button type="submit" className="border-0 mx-auto">
        {text}
      </Button>
      <span className="block text-center dark:text-white">
        {isLogin ? 'Si no tienes una cuenta' : 'Si tienes una cuenta'}
      </span>
      <button
        type="button"
        className="text-blue-500 underline"
        onClick={() => {
          toggleAuthDialog(true, isLogin ? 'logup' : 'login')
        }}
      >
        {isLogin ? 'Registrate' : 'Iniciar Sesión'}
      </button>
    </footer>
  )
}
