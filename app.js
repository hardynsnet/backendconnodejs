// Importar express
import express from "express"

// Crear una instancia de la aplicación
const app = express()

//Middleware (codigo ejecutado antes de las peticiones)
// En este caso el encargado de facilitar el intercambio de inforación de objetos JSON en peticiones POST 
app.use(express.json())

//Lista de usuarios
const usuarios = [
    {
        "id": 1,
        "nombre": "Ana"
    },
    {
        "id": 2,
        "nombre": "Pepe"
    }
];

// Puerto
const PORT = 3001; // lo más practico es que esto vaya en un .env

// Especificamos rutas con verbos (GET, POST, PUT, DELETE) 
// Ruta de prueba
app.get("/", (request, response) => {
    response.send('Hola desde mi backend');
})

//Obtener el listado (array de usuarios)
app.get("/usuarios", (request, response) => {
    response.json(usuarios)
})

//Obtener un usuario por su ID
app.get("/usuarios/:id", (request, response) => {
    const userId = parseInt(request.params.id)
    const usuario = usuarios.find(user => user.id === userId)
    console.log(usuario)
    response.json(usuario)
})

//Creamos un nuevo usuario
app.post("/usuarios", (request, response) => {
    const newUser = {
        id: usuarios.length + 1,
        ...request.body,
    }
    usuarios.push(newUser);
})

// Editamos un usuario existente 
app.put("/usuarios/:id", (request, response) => {
    const userId = parseInt(request.params.id)
    const userIndex = usuarios.findIndex(user => user.id === userId)
    usuarios[userIndex] = {
        ...usuarios[userIndex],
        ...request.body
    }

    if (userIndex === -1) {
        response.status(404).json({ error: "User not found" })
    }

    response.json(usuarios[userIndex])
})

// Eliminamos un usuario por su ID
app.delete("/usuarios/:id", (request, response) => {
    const userId = parseInt(request.params.id)
    const userIndex = usuarios.findIndex(user => user.id === userId)

    if (userIndex) {
        response.status(404).json({ error: "User not found" })
    }

    usuarios.splice(userIndex, 1)
    response.status(204)
})

// Ponemos a escuchar a nuestra aplicación
app.listen(PORT, () => {
    console.log('Escuchando en http://localhost:3001')
})