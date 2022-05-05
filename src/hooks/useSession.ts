import { User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

export function useSession() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const session = supabase.auth.session()
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
