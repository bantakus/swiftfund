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
app.use(express.json({limit:"50mb"}));
app.use(cors());
app.use(function(req, res, next) {
     // Website you wish to allow to connect
     res.setHeader('Access-Control-Allow-Origin', '*');

     // Request methods you wish to allow
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
     // Request headers you wish to allow
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
     // Set to true if you need the website to include cookies in the requests sent
     // to the API (e.g. in case you use sessions)
     res.setHeader('Access-Control-Allow-Credentials', true);
 
     // Pass to next layer of middleware
     next();
  });

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

