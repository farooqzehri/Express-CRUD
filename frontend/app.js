fetch('https://express-crud-swart.vercel.app/todo')
.then(res => res.json())
.then(res => {
    console.log(res);
    
})