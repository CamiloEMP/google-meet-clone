import React, { createContext } from 'react'
import { AppContextI } from '../../types/app.types'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AppContext = createContext<AppContextI>(null!)
AppContext.displayName = 'AppContext'

export function AppProvider({
  children
}: React.PropsWithChildren<unknown>): JSX.Element {
  return (
    <AppContext.Provider value={{ styleTheme: 'light' }}>
      {children}
    </AppContext.Provider>
  )
}
