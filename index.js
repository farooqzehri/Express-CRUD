import todoRoute from './src/routes/todo.routes.js'
import connectDB from './src/db/index.js'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

// muje kall nAHI AAJJ ISSUE TEEK KERNA HAI 

const app = express()
const port = 3000

app.use(express.json());
app.use(cors())

dotenv.config();
app.get('/' , (req , res) => {
    res.send('Hello World')
})
app.use('/api/v1' , todoRoute )



connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}
        `);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });