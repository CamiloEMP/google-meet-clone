import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { LoginCard } from './login'
import { LogupCard } from './logup'

export function AuthSign(): JSX.Element {
  const { userAuthDialogDisplay, userAuthDialogShow } = useAuthContext()

  return (
    <>
      {userAuthDialogShow === true ? (
        <section
          role="dialog"
          className="absolute inset-0 z-10 h-full w-full bg-black/25 flex justify-center items-center overflow-y-auto overflow-x-hidden"
        >
          {userAuthDialogDisplay === 'login' ? <LoginCard /> : <LogupCard />}
        </section>
      ) : null}
    </>
  )
}
