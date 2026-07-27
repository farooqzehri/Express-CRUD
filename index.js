import todoRoute from './src/routes/todo.routes.js'
import connectDB from './src/db/index.js'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from "path";
import { fileURLToPath } from "url";

// muje kall nAHI AAJJ ISSUE TEEK KERNA HAI 

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 3000

app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname, "frontend")));

dotenv.config();
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});
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