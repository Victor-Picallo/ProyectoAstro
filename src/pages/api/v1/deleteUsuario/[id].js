//Crea un endpoint que pasandole un usuario lo borre de la BD (simulado)
// Mediante param <-- http://localhost:4321/ap/v1/deleteUsuario/23

// src/routes/ap/v1/deleteUsuario/[id]/+server.js

// Simulación de BD en memoria
let usuarios = [
    { id: "1", nombre: "Juan" },
    { id: "2", nombre: "Ana" },
    { id: "23", nombre: "Ernesto" }
];

export async function DELETE({ params }) {
    const { id } = params;

    if (!id) {
        return new Response(
            JSON.stringify({ error: 'Faltan campos obligatorios' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    const idx = usuarios.findIndex(u => u.id === id);
    if (idx === -1) {
        return new Response(
            JSON.stringify({ error: 'Usuario no encontrado' }),
            { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
    }

    usuarios.splice(idx, 1);

    return new Response(
        JSON.stringify({ message: `Usuario con id ${id} borrado correctamente` }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
}
