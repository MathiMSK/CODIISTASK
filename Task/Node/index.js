import express from 'express'
import Bodyparser  from 'body-parser';
import mongoose from 'mongoose';
import user from "./routes/userRoute.js"
import admin from "./routes/adminRoute.js"
import uploadRoute from "./routes/videofile.js"
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
const app= express()

app.use(cors())
app.use(Bodyparser.json())
app.use(Bodyparser.text())
app.use(express.json())
app.use(Bodyparser.urlencoded({extended:true}))


app.use("/api/codis",user)
app.use("/api/codis",admin)
app.use("/api/codis",uploadRoute)

mongoose.connect('mongodb://localhost/codis')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));


const port=process.env.PORT||4000
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})