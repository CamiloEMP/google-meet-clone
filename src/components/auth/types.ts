export type AuthActions = 'login' | 'logup'

export interface AuthCommonProps {
  onClose: () => void
  onChange: (action: AuthActions) => void
}

export interface User {
  email: string
  password: string
}
