fetch('https://express-crud-swart.vercel.app/api/v1/todo')
.then(res => res.json())
.then(res => {
    console.log(res.todos);
    
})

// all