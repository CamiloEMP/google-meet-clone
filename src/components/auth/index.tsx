import React from 'react'
import { useAppContext } from '../../hooks/useAppContext'
import { LoginCard } from './login'
import { LogupCard } from './logup'

export function AuthSign(): JSX.Element {
  const { userAuthDialogDisplay, toggleAuthDialog, userAuthDialogShow } =
    useAppContext()

  return (
    <>
      {userAuthDialogShow === true ? (
        <section
          role="dialog"
          className="absolute inset-0 z-10 h-full w-full bg-black/25 flex justify-center items-center overflow-y-auto overflow-x-hidden"
        >
          {userAuthDialogDisplay === 'login' ? (
            <LoginCard onClose={() => toggleAuthDialog(false)} />
          ) : (
            <LogupCard onClose={() => toggleAuthDialog(false)} />
          )}
        </section>
      ) : null}
    </>
  )
}
