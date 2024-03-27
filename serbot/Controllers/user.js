import UserModel from "../models/user.js";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'

export const getAllUsers = async (req,res) => {
    let users;
    try{
        users = await UserModel.find();

    }
    catch(err){
        return console.log(err);
    }
    if(!users){ 
        return res.status(500).json({message:"Unable to get Users"})
    }

     return res.status(302).json(users)
}

// Access Public
// Post request

// register
export const register = async (req,res) =>{
    let {email,password} = req.body;
    // Lv 1 security
   if(!email || !password){
    return res.status(400).json({message:"Bad requests"})
   }

    let existingUser;
    try{
        existingUser = await UserModel.findOne({email}) 
    }
    catch(err){
        return console.log(err)
    }
    if(existingUser){
        return res.status(500).json({message:"Email taken"})
    }

    // salt 
    const salt = await bcrypt.genSalt(10)
    // hash password 
    let hashedPassword = await bcrypt.hash(password,salt)

    let newUser = new UserModel(
        {
        email,
        password:hashedPassword,
        nugget:password,
    }
    );

    try{
        newUser.save()
    }
    catch(err){
        return console.log(err)
    }
    return res.status(201).json({
        _id:newUser._id,
        email:newUser.email,
        token:generateToken(newUser._id)

    }); 
}


// Login
export const login = async (req,res)=>{
    const {email,password} = req.body;
    
    // Return if request.body is null
    if(!email  || !password){
        return res.status(400).json({message:"Bad requests"})
       }

    //    lets define a variable for an existing user
    let existingUser ;

    try{
        existingUser = await UserModel.findOne({email:email});
    }
    catch(err){
        return console.log(err);
    }
     if(!existingUser){
    return res.status(404).json({message:"Can not find user"})
   }
// checking password 
   const isPasswordCorrect = await bcrypt.compare(password,existingUser.password)
   if(!isPasswordCorrect){
        return res.status(400).json({message:"incorrect password"});
   }


   return res.status(200).json({message:"message: Login successful",id:existingUser._id,
    firstname:existingUser.firstname,
    lastname:existingUser.lastname,
    email:existingUser.email,
    token:generateToken(existingUser._id)});
}


// Private 
export const getUser = async (req,res) =>{

   
    let user_id = req.params.id;
    let user;
    try{
       user = await UserModel.findById(user_id);
    }
    catch(err){
        return console.log(err);
    }

   
    return res.status(200).json({message:"ok",user});
}

export const updateProfile = async (req,res) =>{
   

    const updatables = req.body;
    const id = req.params.id
    let existingUser;
    try{
        existingUser = await UserModel.findByIdAndUpdate(id,updatables) ;
    }
    catch(err){
        return console.log(err);
    }

    if(!existingUser){
        return res.status(404).json({message:"Cant find"})
       }
       return res.status(200).json({message:"ok",existingUser})
}

export const deleteUser = async (req,res) =>{
    const id = req.params.id;
    let existingUser;
    try{
        existingUser = await UserModel.findByIdAndRemove(id);
    }
    catch(err){
        return console.log(err);
    }
    if(!existingUser){
        return res.status(500).json({message:"Unable to delete"})
    }
    return  res.status(200).json({message:"ok"});
}

// Generate JSON Web Token
const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"1d"
    })
} 