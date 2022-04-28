import React from 'react'
import { useSession } from '../hooks/useSession'
import { supabase } from '../supabase'

export const LoginPage = () => {
  const { isAuth, user } = useSession()

  async function createUser() {
    const user = await supabase.auth.signUp({
      email: 'mal@abc.c',
      password: 'root123457'
    })
    console.log(user)
  }

  async function loginUser() {
    const user = await supabase.auth.signIn({
      email: 'mal@abc.c',
      password: 'root123457'
    })
    console.log(user)
  }

  return (
    <div>
      <div>{JSON.stringify(isAuth)}</div>
      <div>{JSON.stringify(user)}</div>
      <button onClick={createUser}>ss</button>
    </div>
  )
}
