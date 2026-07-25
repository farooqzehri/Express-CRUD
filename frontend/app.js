
const API = 'https://express-crud-swart.vercel.app/api/v1/todo';
const render = document.querySelector('.render')

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


// all ok error fixed on vercel