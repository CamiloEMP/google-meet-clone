import React from 'react'
import { TextInput } from 'flowbite-react'
import EmailIcon from '../../assets/EmailIcon'
import PasswordIcon from '../../assets/PasswordIcon'

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
      <div className="mb-6">
        <TextInput
          value={values.email}
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          placeholder="ejemplo@gmail.com"
          addon={<EmailIcon />}
        />
      </div>
      <div className="mb-6">
        <TextInput
          value={values.password}
          onChange={handleChange}
          type="password"
          id="password"
          name="password"
          placeholder="********"
          addon={<PasswordIcon />}
        />
      </div>
    </>
  )
}
