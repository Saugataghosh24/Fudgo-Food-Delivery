import express from  'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import carRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


// app config
const app = express()
const port= process.env.PORT || 4000;

// middleware
app.use(express.json()) //whenever request will be get from frontend to backend that will be parsed using json
app.use(cors()) //we can access backend from frontend

//DB connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads')) //uploads folder is exposed on the '/image' end point
app.use("/api/user", userRouter)
app.use("/api/cart", carRouter)
app.use("/api/order", orderRouter)


app.get("/", (req,res)=>{
    res.send("Hello")
}) 

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

// mongodb+srv://SaugataGhosh:Saugata123@cluster0.3vjuh.mongodb.net/?