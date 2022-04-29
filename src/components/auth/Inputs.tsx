import React from 'react'
import { LockClosed } from '../../assets/icons/lockClosed.icon'
import { MailIcon } from '../../assets/icons/mail.icon'

interface Props {
  values: {
    email: string
    password: string
  }
  setValues: (values: { email: string; password: string }) => void
}

export const Inputs = ({ values, setValues }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MailIcon />
        </div>
        <input
          value={values.email}
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="ejemplo@gmail.com"
        />
      </div>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <LockClosed />
        </div>
        <input
          value={values.password}
          onChange={handleChange}
          type="password"
          id="password"
          name="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="********"
        />
      </div>
    </>
  )
}
