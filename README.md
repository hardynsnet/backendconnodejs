# Backend con NodeJS
Pequeño Back-End realizado con NodeJS y Express, que maneja verbos como (GET, POST, PUT, DELETE)

Pasos: 

1. Importamos dependencias a usar
<img width="484" height="191" alt="image" src="https://github.com/user-attachments/assets/8daacc63-c05c-429a-ba41-447703f0c436" />
<br>

- Declaramos puerto e instancia que escuchará las solicitudes que vamos a realizar
<img width="489" height="65" alt="image" src="https://github.com/user-attachments/assets/7788c5d7-42df-4da0-ae92-0149355c49d1" />
<br>
<img width="440" height="84" alt="image" src="https://github.com/user-attachments/assets/298d7f8a-dd33-47dc-ba7c-4e4f17da0bd7" />
<br>

2. Definimos petición de prueba <br>
<img width="348" height="60" alt="image" src="https://github.com/user-attachments/assets/bafdeeb1-3d99-423c-9fff-2397c4e1d414" />

3. Como no tenemos un SGBD lo que haremos será manejar datos planamente (array de usuarios)
<img width="193" height="212" alt="image" src="https://github.com/user-attachments/assets/8bc83a5a-ebdb-4aea-bcc3-ea42a6f2c4ce" />
<br>

## GET: Obtener usuarios
- Dentro especificamos que la respuesta del servidor será devuelta en formato JSON <br>
<img width="363" height="79" alt="image" src="https://github.com/user-attachments/assets/8982cecc-0d25-4a93-bc9e-5dcffb6567b5" />

## GET: Obtener usuarios por ID
- Capturamos el parametro que ciene desde la URL donde hacemos la petición (request.params.id), almacenamos en variable parseada, comparamos y recorremos con el método '.find()' si el 'userId' que se capturó como parámetro es igual al user del array que estamos recorriendo es decir el objeto. Finalmente devolvemos la respuesta en formato JSON <br>
<img width="477" height="137" alt="image" src="https://github.com/user-attachments/assets/430b569f-f145-474b-99e6-e6507eb95aba" />

## POST: Crear un nuevo usuario
- Declaramos un nuevo objeto ('newUser') el cuál almacenará las variables que vengan de la solicitud hecha (del body) y simulando un efecto autoincrement tomamos el arreglo de usuarios y usando .length + 1 decimos que aumente una unidad al id del usuario anterior. Finalmente, añadimos este nuevo usuario al array ya definido con el método '.push()' <br>
<img width="368" height="154" alt="image" src="https://github.com/user-attachments/assets/b4affd1a-f7ef-4d06-b522-5afe01f94bb7" />

## PUT: Editar un usuario
- Capturamos el parámetro 'id' de la solicitud ('request.params.id'), posteriormente usando el método '.findIndex()' nos devolverá el primer elemento encontrado y especificado en los parámetros de la solicitud (es decir del ID que puse en la URL si es 1, 2, 3, etc...), procedemos a editar a traves de un nuevo objeto los datos anteriores almacenados en la solicitud, luego agregamos una validación, en donde si el índice de usuario no existe devuelva un código de estado 404 (Not Found) y un mensaje personalizado, finalmente devuelve el array con los datos modificados.<br>
<img width="487" height="307" alt="image" src="https://github.com/user-attachments/assets/41ea9f89-471b-4890-bdbd-896beaa542fb" />

## DELETE: Eliminar un usuario
- Capturamos el parámetro 'id' de la solicitud y almacenamos su valor en una variable, recorremos y comparamos si el valor ingresado en la solicitud es el de la petición, luego validamos y devolvemos un código de estado 404 (Not Found) usando el metodo '.splice()' nos encargamos de "borrar" ese usuario del arreglo. <br>
<img width="489" height="248" alt="image" src="https://github.com/user-attachments/assets/cf3b9587-994f-4353-9757-a8a021322e0e" />
<br>

## Peticiones de prueba
Se encuentran en el archivo 'request.http' <br>
<img width="352" height="516" alt="image" src="https://github.com/user-attachments/assets/18c48290-67d2-4ff7-b03e-ecc26090c033" />

By: <b>@hardynsnet</b>


