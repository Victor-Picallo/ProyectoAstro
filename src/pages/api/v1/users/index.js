export async function GET() {
    //SELECT * FROM USERS
    const users = [
        {name: 'Manolo', edad:'30'},
        {name: 'Luis', edad:'29'},
        {name: 'Ana', edad:'20'},
    ]
    return new Response(
        JSON.stringify(users),
        {
            status: 200
        }
    );
}