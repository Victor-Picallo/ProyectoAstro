//Crea un endpoint que pasandole un usuario lo borre de la BD (simulado)
// Mediante param <-- http://localhost:4321/ap/v1/deleteUsuario/23

// src/routes/ap/v1/deleteUsuario/[id]/+server.js

// Simulación de BD en memoria
/*
DELETE  /users/4  -> BORRA USUARIO
GET     /users    -> VER TODOS LOS USUARIOS
GET     /users/4  -> VER UN USUARIO
POST    /users    -> CREA UN USUARIO
PUT     /users/4  -> ACTUALIZA UN USUARIO
PATCH   /users/4  -> MODIFICA UNA COSA CONCRETA
*/

export async function DELETE({ params }) {
    const id = Number(params.id)
    // Delete from users where id = <ID>
    return new Response(
        JSON.stringify({ message: `Usuario con id ${id} borrado correctamente` }),
        {
            status: 200
        }
    )
}

export async function GET({ params }) {
    const id = Number(params.id)
    const user = {
        name: 'Manolo',
        age: 30,
        address: 'Calle Falsa 123'
    }

    return new Response(
        JSON.stringify(user),
        {
            status: 200
        }
    )
}