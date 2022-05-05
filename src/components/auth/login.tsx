import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginUser } from '../../supabase/auth/loginUser'

import { ButtonModal } from '../Buttons/ButtonModal'
import { Footer } from './footer'
import { Inputs } from './Inputs'
import { AuthCommonProps } from './types'

export function LoginCard({ onClose }: AuthCommonProps): JSX.Element {
  const navigate = useNavigate()
  const [isLogged, setIsLogged] = useState(false)
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { user, session } = await LoginUser(values)

    if (user !== null && session !== null) {
      setIsLogged(true)
    } else {
      alert('Usuario o contraseña incorrectos')
    }
  }

  useEffect(() => {
    if (isLogged) {
      navigate('/dashboard')
    }
  }, [isLogged])

  return (
    <div className="relative p-4 w-full max-w-2xl h-auto">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Iniciar Sesion
          </h3>
          <ButtonModal onClose={onClose} />
        </div>
        <form className="p-6 flex flex-col" onSubmit={handleSubmit}>
          <Inputs values={values} setValues={setValues} />
          <Footer isLogin={true} />
        </form>
      </div>
    </div>
  )
}
