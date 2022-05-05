export type AuthContextI = useAuthI

// useAuth
export interface useAuthI {
  isAuth: boolean
  toggleAuthDialog: (show: boolean, display?: 'login' | 'logup') => void
  userAuthDialogShow: boolean
  userAuthDialogDisplay: 'login' | 'logup'
}
