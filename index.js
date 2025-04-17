import express  from 'express'
import  productRouter from "./routes/product.js"
import dotenv  from "dotenv"
import { connectDB } from './config/db.js'

dotenv.config()

const PORT= process.env.PORT || 3001
const  app = express()

//middleware
app.use(express.json())
app.use("/api/product",productRouter)


app.listen(PORT, ()=>{
    console.log(`The server  is  running  on Port ${PORT}`)
    connectDB()
})