export type AppContextI = useStyleI

export interface useStyleI {
  styleTheme: string
  setStyleTheme: (theme: 'light' | 'dark') => void
}
