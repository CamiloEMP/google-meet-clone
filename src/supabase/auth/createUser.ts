import { v4 } from 'uuid'
import { supabase } from '..'

interface CreateUserProps {
  email: string
  password: string
  name: string
}
export async function CreateUser({ email, password, name }: CreateUserProps) {
  try {
    const user = await supabase.auth.signUp({
      email,
      password
    })

    await supabase.from('profiles').insert({
      id: user.user?.id,
      name,
      username: v4(),
      avatar: ''
    })

    return true
  } catch (error) {
    return error
  }
}
