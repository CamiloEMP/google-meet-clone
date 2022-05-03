# videoCreateRoom
Crea una nueva sala de videoConferencias

## Path
`src/api/video/create.ts`

## Como se usa
```ts
videoCreateRoom({ name: 'my room | uuid' }): Promise<AxiosResponse>
```

## Respuesta
```js
{
  roomName: 'my room | uuid',
  uid: 'tOGZcWYRy'
}
```
