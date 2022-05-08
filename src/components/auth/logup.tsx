import {
  XIcon,
  MailIcon,
  LockClosedIcon,
  UserIcon
} from '@heroicons/react/outline'
import { useAuthContext } from '../../hooks/useAuthContext'
import { Button } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { validate } from './validator'
import { CreateUser } from '../../supabase/auth/createUser'

interface LogupForm {
  name: string
  email: string
  password: string
}

export function LogupCard(): JSX.Element {
  const { toggleAuthDialog } = useAuthContext()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LogupForm>()

  const onSubmit = ({ email, password, name }: LogupForm) => {
    if (Object.keys(errors).length === 0) {
      CreateUser({ email, password, name })
        .then(() => {
          toggleAuthDialog(false)
          navigate('/')
        })
        .catch(() => alert('Correo Electronico invalidos'))
    }
  }

  return (
    <div className="relative p-4 w-full max-w-lg h-auto shadow-sm overflow-auto">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-800 p-6">
        <div role="title-card" className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Registrate
          </h3>
          <Button
            color="light"
            pill
            icon={XIcon}
            onClick={() => {
              toggleAuthDialog(false)
            }}
          />
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Nombre
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <UserIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="mi nombre"
                required
                {...register('name', validate.name)}
              />
            </div>
            {errors.name && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {errors.name.type === 'required'
                  ? 'El campo es Requerido'
                  : null}
                {errors.name.type === 'minLength'
                  ? `Minimo ${validate.name.minLength} caracteres`
                  : null}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Correo Electronico
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <MailIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="mi@email.com"
                required
                {...register('email', validate.email)}
              />
            </div>
            {errors.email && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {errors.email.type === 'required'
                  ? 'El campo es Requerido'
                  : null}
                {errors.email.type === 'pattern'
                  ? `El Correo Electronico no es valido`
                  : null}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Contraseña
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <LockClosedIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="contraseña"
                required
                {...register('password', validate.password)}
              />
            </div>
            {errors.password && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {errors.password.type === 'required'
                  ? 'El campo es Requerido'
                  : null}
                {errors.password.type === 'minLength'
                  ? `Minimo ${validate.password.minLength} caracteres`
                  : null}
              </p>
            )}
          </div>
          <Button type="submit" className="!w-full block">
            Resgitrate
          </Button>
          <p className="text-center text-sm text-gray-500">
            Si ya tienes una cuenta.{' '}
            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={() => {
                toggleAuthDialog(true, 'login')
              }}
            >
              Iniciar Sesion
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}
