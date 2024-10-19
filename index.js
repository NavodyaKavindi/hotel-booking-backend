
import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './routes/userRoute.js'
import mongoose from 'mongoose'
import galleryItemRouter from './routes/galleryItemRoute.js'
import jwt from 'jsonwebtoken'

const app = express()

app.use(bodyParser.json())

const connectionString = "mongodb+srv://tester:1234@cluster0.01yue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use((req,res,next)=>{
   
    const token= req.header("Authorization")?.replace("Bearer ", "")

    if(token!= null){
        jwt.verify(token,"secret",(err,decoded)=>{
            if(decoded !=null){
                req.user=decoded
                next()
            }else{
                next()
            }

        })
    }else{
        next()
    }
}
)


mongoose.connect(connectionString).then(
    ()=>{
        console.log("Connected to the database")
    }
).catch(
    ()=>{
        console.log("Connection failed")
    }
)


app.use ("/api/users",userRouter)
app.use("/api/gallery",galleryItemRouter)
   

app.listen(5000,(req,res)=>{
    console.log("Server is running on port 5000")
});
