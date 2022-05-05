import { useContext } from 'react'
import { AppContext } from '../provider/app'

export function useAppContext() {
  return useContext(AppContext)
}
