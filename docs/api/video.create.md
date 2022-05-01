# useCreateRoomQuery
Crea una sala de videoconferencias

# Path
`src/redux/api/video.ts`

# Como se usa
```js
const { data } = useCreateRoomQuery({ name: 'my custom room name' })

console.log(data)
```

```js
{
  "roomName": "my custom room name",
  "uid": "uNJmELulw" /* referencia a la sala de videoConferencia, in url: http://localhost:8080/uNJmELulw */
}
```
