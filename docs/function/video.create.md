# Video.Create
Crea una sala de Twilio Video

# Path
`functions/video/create.js`

## Datos de Entrada
```js
{
  name: 'my custom room name',
}
```

## Respuesta
```json
{
  "roomName": "my custom room name",
  "uid": "uNJmELulw" /* referencia a la sala de videoConferencia, in url: http://localhost:8080/uNJmELulw */
}
```
