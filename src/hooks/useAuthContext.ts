import { useContext } from 'react'
import { AuthContext } from '../provider/auth'

export function useAuthContext() {
  return useContext(AuthContext)
}
