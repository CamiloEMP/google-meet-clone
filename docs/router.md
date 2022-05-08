# Enrutador
Devido a la diversidad de funcionalidad este proyecto
usa las diferentes rutas:

## /
`Index` presenta una pagina sensilla que muestra una
dos formas de autenticarse (`Iniciar Sesion` o
`Registro de usuario`).

Si el usuario tiene una sesion activa, observara una
entrada de texto para que pueda pegar un enlace o id
de una reunion y un boton que cree una nueva sala de
reunion.

## /:room
`Gestiona la videollamada` con distintos estados:
- `Verificacion`: Se consulta mediante api si la
reunion existe (no requiere sesion activa). Se
informara el estado a el usuario.
- `Verificacion de usuario`: Se verifica si el usuario
tiene una sesion activa y si este tiene permiso/acceso
previo a la reunion. Se informara el estado y el
usuario podra `Solicitar acceso`.
- `Preparacion de medios`: Se configura camara,
microfono y altavoz de salida segun el criterio del
usuario. Se mostraran los cambios en tiempo real al
usuario.
- `Solicitar acceso`: El usuario podra poner su nombre
y enviar una solicitud para ingresar a la reunion. La
solicitud sera recivida y aprobada por los encargados/
administradores de la reunion
- `Reunion`: El usuario podra visualizar e interactuar
a los integrantes de la reunion, con privilegios de
poder silenciar/apagar su microfono y camara.
- `Salida`: Se mostrara un mensaje para que se
reingrese a la reunion, si esta no finalizo o un
mensaje de salida **(Por definir)**

## /org
Muestra las organizaciones activas y permite al
usuario crear sus propias organizaciones **(Por definir)**

## /org/:org
Muestra los detalles y equipos de la organizacion **(Por definir)**

## /org/:org/team
**(Por definir)**

## /org/:org/task
Gestiona la lista de tareas **(Por definir)**

## /org/:org/metting
Muestra las notas de la reunion pasada **(Por definir)**

## /org/:org/settings
Ajustes de la organizacion y membresia **(Por definir)**

