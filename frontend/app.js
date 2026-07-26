
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
                <button>Edit</button>
                <button>Delete</button>
                
                </li>`
            })

        })
}
getAllTodo()

const addTodo = (event) => {



    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    console.log(title , description);
    
    fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            description
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

}

const editTodo = () => {
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value

    
}


// all ok error fixed on vercel