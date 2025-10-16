export async function POST( {request} ) {
    const body = await request.json()
    const {name , text} = body

    if(!name || !text) {
        return new Response (
            JSON.stringify({ error: 'Fatan campos obligatorios' }),
            {
                status: 400
            }
        )
    }

    //Guardar en una BD el name y el text
    return new Response (
        JSON.stringify({
            message: 'Informacion guardada correctamente'
        }),
        {
            headers: { 'Content-Type': 'application/json' },
            status: 201
        }
    )
}