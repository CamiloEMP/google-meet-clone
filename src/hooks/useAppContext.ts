import { useContext } from 'react'
import { AppContext } from '../provider/app.provider'

export function useAppContext() {
  return useContext(AppContext)
}
