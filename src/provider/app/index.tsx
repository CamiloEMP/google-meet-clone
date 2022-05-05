import React, { createContext, useEffect, useState } from 'react'
import { AppContextI, useStyleI } from '../../types/app.types'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AppContext = createContext<AppContextI>(null!)
AppContext.displayName = 'AppContext'

export function useStyle(): useStyleI {
  const [styleTheme, setTheme] = useState<'light' | 'dark' | 'auto'>('light')

  useEffect(() => {
    const lst = String(localStorage.getItem('color-theme'))
    if (lst === 'light' || lst === 'dark') {
      setStyleTheme(lst)
    }
  }, [])

  function setStyleTheme(theme: 'light' | 'dark' | 'auto') {
    if (theme === 'light') {
      document.body.classList.remove('dark')
    } else {
      document.body.classList.add('dark')
    }
    localStorage.setItem('color-theme', theme)
    setTheme(theme)
  }

  return {
    styleTheme,
    setStyleTheme
  }
}

export function AppProvider({
  children
}: React.PropsWithChildren<unknown>): JSX.Element {
  const style = useStyle()
  return (
    <AppContext.Provider value={{ ...style }}>{children}</AppContext.Provider>
  )
}
