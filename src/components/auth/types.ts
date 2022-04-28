export type AuthActions = 'login' | 'logup'

export interface AuthCommonProps {
  onClose: () => void
  onChange: (action: AuthActions) => void
}
