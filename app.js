// Importar express
import express from "express"

// Crear una instancia de la aplicación
const app = express()

//Middleware (codigo ejecutado antes de las peticiones)
app.use(express.json())

//Lista de usuarios
const usuarios = [
        {
            "id":1,
            "nombre":"Ana"
        },
        {
            "id":2,
            "nombre":"Pepe"
        }
    ];

// Puerto
const PORT = 3001;

// Especificamos rutas con verbos (GET, POST, PUT, DELETE)
app.get("/", (request, response) => {
    response.send('Hola desde mi backend');
})

//Ruta 2
app.get("/usuarios", (request, response) => {
    response.json(usuarios)
})

//Ruta 3 
app.get("/usuarios/:id", (request, response) => {
    const userId = parseInt(request.params.id)
    const usuario = usuarios.find(user => user.id === userId)
    // console.log(typeof userId)
    // console.log(userId);
    console.log(usuario)
    //find 
    response.json(usuario)
})

//Ruta 4 
app.post("/usuarios", (request, response) => {
    const newUser = {
        id: usuarios.length + 1,
        ...request.body,
    }
   usuarios.push(newUser);
})

// Ruta 5 
app.put("/usuarios/:id", (request, response) => {
    const userId = parseInt(request.params.id)
    const userIndex = usuarios.findIndex(user => user.id === userId)
    usuarios[userIndex] = {
        ...usuarios[userIndex],
        ...request.body
    }

    if (userIndex === -1) {
        response.status(404).json({ error: "User not found"})
    }

    response.json(usuarios[userIndex])
})

app.delete("/usuarios/:id", (request, response) => {
    const userId = parseInt(request.params.id)
    const userIndex = usuarios.findIndex(user => user.id === userId)

    if (userIndex) {
    response.status(404).json({ error: "User not found"})
    }

    usuarios.splice(userIndex, 1)
    response.status(204)
})

// Ponemos a escuchar a nuestra aplicación
app.listen(PORT, () => {
    console.log('Escuchando en http://localhost:3001')
})