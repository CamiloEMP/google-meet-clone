import { createContext } from 'react'
import { AuthContextI } from '../../types/auth.types'
import { useAuth } from './useAuth'
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AuthContext = createContext<AuthContextI>(null!)

export function AuthProvider({
  children
}: React.PropsWithChildren<unknown>): JSX.Element {
  const auth = useAuth()
  return (
    <AuthContext.Provider value={{ ...auth }}>{children}</AuthContext.Provider>
  )
}
