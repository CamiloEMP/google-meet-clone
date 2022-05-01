# useGetOrganizationQuery
Obtiene todas las organizaciones/empresas que pertenece el usuario

# Path
`src/redux/api/org/index.ts`

# Como se usa
```js
const { data } = useGetOrganizationQuery('')

console.log(data)
```

```js
[
  ...,
  {
    id: 'idFormOrg',
    name: 'nameFromOrg'
  },
  ...
]
```
