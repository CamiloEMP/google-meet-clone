import React, { createContext } from 'react'
import { useUser } from '../hooks/useUser'
import { AppContextI } from '../types/app.types'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AppContext = createContext<AppContextI>(null!)
AppContext.displayName = 'AppContext'

export function AppProvider({
  children
}: React.PropsWithChildren<unknown>): JSX.Element {
  const user = useUser()
  return (
    <AppContext.Provider value={{ styleTheme: 'light', ...user }}>
      {children}
    </AppContext.Provider>
  )
}
