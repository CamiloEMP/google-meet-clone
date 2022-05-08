# AuthProvider
Controla la sesion y datos del usuario

## Hock
`useAuthContext()`

### Propiedades
`isAuth<boolean>`:
  - `true`: Existe una sesion activa

`userAuthDialogShow<boolean>`
  - `true`: muestra un cuadro que se superpone a el contenido con un formulario de autenticacion

`userAuthDialogDisplay<'login' | 'logup'>`
  - selecciona el formulario de autenticacion

`toggleAuthDialog<(show: boolean, display?: 'login' | 'logup') => void>`
  - `show` activa/desactiva `userAuthDialogShow<boolean>`
  - `display` selecciona `userAuthDialogDisplay<'login' | 'logup'>`
