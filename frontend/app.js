const API = 'https://express-crud-swart.vercel.app/api/v1/todo';
const render = document.querySelector('.render')
const loading = document.querySelector('#loading')


const getAllTodo = () => {
    render.innerHTML = "<h1>⏳Loading....</h1>"

   const title = document.getElementById("title")
   const description = document.getElementById("description")

    title.value = '';
                description.value = '';

    fetch(API)
        .then(res => res.json())
        .then(res => {
             
            const allItems = res.todos
            console.log(allItems);
            render.innerHTML = ''
              if(allItems.length === 0 ){
                    render.innerHTML = "<h2>No Todo Found</h2>"
                    return;
                }
            allItems.map((item, index) => {
                render.innerHTML += `<li>
                <h1>${item.title}</h1>
                <h2>${item.description}</h2>
                <button onclick="editTodo('${item._id}')">Edit</button>
                <button onclick="deleteTodo('${item._id}')">Delete</button>
                
                </li>`
              

              
            })

        }).catch(() => {
            render.innerHTML = "<h1>Error Occured</h1>"
        })
}
getAllTodo()

const addTodo = (event) => {

   const title = document.getElementById("title").value;
   const description = document.getElementById("description").value;


    console.log(title, description);

    if(!title || !description){
        alert("please fill the All Inputs")
        return;
    }else{
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

 getAllTodo()
 

        })
        .catch(error => {
            console.log(error);
        });


    }

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
             getAllTodo()

        })
        .catch(err => {
            console.log(err);

        })
   

}


const deleteTodo = (id) => {
if(confirm("are You Sure")){
        fetch(`${API}/${id}`, {
        method: "DELETE",
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            getAllTodo()

        })
        .catch(err => {
            console.log(err);

        })
       
}

}


// all ok error fixed on vercel