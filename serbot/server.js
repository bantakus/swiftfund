import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routerPost from './Routes/posts.js';
import routerUser from './Routes/user.js';

const app = express();
dotenv.config()
const PORT = process.env.PORT||8000

// Middlewares
app.use(express.json({limit:"50mb"}))
app.use(cors())

// Routes
app.use('/api/posts',routerPost)
app.use('/api/users',routerUser)

// connect to mogodb
const URI = process.env.URI
mongoose.set('strictQuery', false);
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>app.listen(PORT,()=>console.log("Server is listening at http://localhost:"+PORT)))
.then(()=>console.log("connected to MongoDB succesfully!"))
.catch(err => console.log(err.message))

