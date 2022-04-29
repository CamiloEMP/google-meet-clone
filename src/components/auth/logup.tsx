import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserIcon } from '../../assets/icons/user.icon'
import { CreateUser } from '../../supabase/auth/createUser'
import { ButtonModal } from '../Buttons/ButtonModal'
import { Footer } from './footer'
import { Inputs } from './Inputs'
import { AuthCommonProps, User } from './types'

export function LogupCard({ onClose, onChange }: AuthCommonProps): JSX.Element {
  const navigate = useNavigate()
  const [isLogged, setIsLogged] = useState(false)
  const [name, setName] = useState<string>('')
  const [values, setValues] = useState<User>({
    email: '',
    password: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newValues = { ...values, name }
    const bool = await CreateUser(newValues)
    if (bool) {
      setIsLogged(true)
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
        <header className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Registrate
          </h3>
          <ButtonModal onClose={onClose} />
        </header>
        <form className="p-6 flex flex-col" onSubmit={handleSubmit}>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <UserIcon />
            </div>
            <input
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tú nombre"
            />
          </div>
          <Inputs values={values} setValues={setValues} />
          <Footer onClick={() => onChange('login')} isLogin={false} />
        </form>
      </div>
    </div>
  )
}
