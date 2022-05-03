import { User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

type UserProfiles = {
  [key: string]: any
}

export function useSession() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const session = supabase.auth.session()
    console.log(session)
    async function getUser() {
      const user: UserProfiles = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session?.user?.id)
      console.log(user)
    }
    getUser()
    setUser(session?.user ?? null)

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (e, session) => {
        const currentUser = session?.user
        setUser(currentUser ?? null)
      }
    )

    return () => {
      authListener?.unsubscribe()
    }
  }, [user])

  return {
    isAuth: !!user,
    user
  }
}
