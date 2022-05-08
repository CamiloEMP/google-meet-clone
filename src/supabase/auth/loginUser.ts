import { supabase } from '..'
import { UserData } from '../types'

export function LoginUser({ email, password }: Omit<UserData, 'name'>) {
  return new Promise((resolve, reject) => {
    supabase.auth.signIn({ email, password }).then(s => {
      if (s.error) {
        reject(s.error)
      }
      resolve(s.user)
    })
  })
}
