
const API = 'https://express-crud-swart.vercel.app/api/v1/todo';

const getAllTodo = () => {
    fetch(API)
    .then(res => res.json())
    .then(res => {
        console.log(res.todos);
        
    })
}
getAllTodo()


// all ok error fixed on vercel