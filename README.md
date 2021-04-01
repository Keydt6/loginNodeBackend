# API REST EXAMPLE_LOGIN

## Project setup
```
npm install
npm run build

```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```
## Usage

1. rutas

    - login 
        ```
        method: post
        url: '/login'  
        body { rut: '', password }
        ```

    - logout
        ```
        method: delete
        url: '/logout'
        headers: { Authorization: 'Bearer token' }
        ```

    - listado de usuarios
        ```
        method: get
        url: '/users'
        headers: { Authorization: 'Bearer token' }
        ```

    - obtener un usuario
        ```
        method: get
        url: '/users/:id'
        headers: { Authorization: 'Bearer token' }
        ```

    - crear usuario
        ```
        method: post
        url: '/users'
        body: { name: string(255), email: string(255), password: string(255), status: string(255) }
        headers: { Authorization: 'Bearer token' }
        ```

    - eliminar usuario
        ```
        method: delete
        url: '/users/:id' # id del usuario 
        headers: { Authorization: 'Bearer token' }
        ```

    - modificar un usuario
        ```
        method: put
        url: '/users/:id'
        body: { name: string(255), email: string(255), password: string(255), status: string(255) }
        headers: { Authorization: 'Bearer token' }
        ```

2. Data
    - administrador 
        ```
        RUT: 12.123.456-K
        CONTRASEÑA: 123456  
        ```
    - agricultores 
        ```
        RUT: 12.123.111-K
        CONTRASEÑA: 123456
        RUT: 12.123.222-K
        CONTRASEÑA: 123456
        ```