
const API = 'https://express-crud-swart.vercel.app/api/v1/todo';
const render = document.querySelector('.render')
const title = document.querySelector('#title')
const description = document.querySelector('#description')

const getAllTodo = () => {
    fetch(API)
        .then(res => res.json())
        .then(res => {
            const allItems = res.todos
            console.log(allItems);
            allItems.map((item, index) => {
                render.innerHTML += `<li>
                <h1>${item.title}</h1>
                <h2>${item.description}</h2>
                
                </li>`
            })

        })
}
getAllTodo()

const addTodo = () => {
    fetch(API , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            description: description
        })
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);
        
    }).catch(err => {
        console.log(error);
        
    })
}


// all ok error fixed on vercel