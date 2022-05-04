import { supabase } from '..'
import { UserData } from '../types'

export async function LoginUser({ email, password }: Omit<UserData, 'name'>) {
  console.log(email, password)
  return supabase.auth.signIn({ email, password })
}
