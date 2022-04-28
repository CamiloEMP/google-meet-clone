import { supabase } from '..'
import { UserData } from '../types'

export async function LoginUser({ email, password }: Omit<UserData, 'name'>) {
  return supabase.auth.signIn({ email, password })
}
