const API = 'https://express-crud-swart.vercel.app/api/v1/todo';
const render = document.querySelector('.render')



const getAllTodo = () => {

    fetch(API)
        .then(res => res.json())
        .then(res => {
            const allItems = res.todos
            console.log(allItems);
            render.innerHTML = ''
            allItems.map((item, index) => {
                render.innerHTML += `<li>
                <h1>${item.title}</h1>
                <h2>${item.description}</h2>
                <button onclick="editTodo('${item._id}')">Edit</button>
                <button onclick="deleteTodo('${item._id}')">Delete</button>
                
                </li>`
            })

        })
}
getAllTodo()

const addTodo = (event) => {



    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    console.log(title, description);

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
title.value = ''
description.value = ''
    getAllTodo()

}


const editTodo = (id) => {

    const updatedTitle = prompt("enter the update title")
    const updatedDescription = prompt('enter the updated description')

    fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: updatedTitle,
            description: updatedDescription
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);

        })
        .catch(err => {
            console.log(err);

        })
    getAllTodo()

}


const deleteTodo = (id) => {
    fetch(`${API}/${id}`, {
        method: "DELETE",
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);

        })
        .catch(err => {
            console.log(err);

        })
        return getAllTodo()


}


// all ok error fixed on vercel