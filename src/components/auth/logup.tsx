import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserIcon from '../../assets/UserIcon'
import { CreateUser } from '../../supabase/auth/createUser'
import { ButtonModal } from '../Buttons/ButtonModal'
import { Footer } from './footer'
import { Inputs } from './Inputs'
import { AuthCommonProps, User } from './types'
import { TextInput } from 'flowbite-react'

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
          <div className="mb-6">
            <TextInput
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              type="text"
              id="name"
              name="name"
              placeholder="Tú nombre"
              addon={<UserIcon />}
            />
          </div>
          <Inputs values={values} setValues={setValues} />
          <Footer onClick={() => onChange('login')} isLogin={false} />
        </form>
      </div>
    </div>
  )
}
