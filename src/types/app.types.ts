export interface AppContextI extends useUserI {
  styleTheme: 'light' | 'dark' | 'auto'
}

// useUser
export interface useUserI {
  isAuth: boolean
  toggleAuthDialog: (show: boolean, display?: 'login' | 'logup') => void
  userAuthDialogShow: boolean
  userAuthDialogDisplay: 'login' | 'logup'
}
