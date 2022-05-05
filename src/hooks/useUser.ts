import { User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { supabase } from '../supabase'
import { useUserI } from '../types/app.types'

/**
 * @description Maneja la autentificacion del usuario
 */
export function useUser(): useUserI {
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

  // card Dialog
  const [userAuthDialogShow, setDialogShow] = useState(false)
  const [userAuthDialogDisplay, setDialogDisplay] = useState<'login' | 'logup'>(
    'login'
  )
  function toggleAuthDialog(show: boolean, display?: 'login' | 'logup'): void {
    setDialogShow(show)
    setDialogDisplay(display || userAuthDialogDisplay)
  }

  // Old
  return {
    isAuth: !!user,
    userAuthDialogShow,
    userAuthDialogDisplay,
    toggleAuthDialog
  }
}
