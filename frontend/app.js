
const api = 'https://express-crud-swart.vercel.app/api/v1/todo'
async function addTodo() {
    const title = document.querySelector('#title')
    const description = document.querySelector('#description')


fetch(api , {
    method: 'GET',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        title,
        description
    })
})

const data = await response.json()
console.log(data);

}

// all ok error fixed on vercel