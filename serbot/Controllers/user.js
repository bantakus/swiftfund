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
export const register = async (req,res) =>{
    let {username,firstname,lastname,email,password} = req.body;
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
    try{
        existingUser = await UserModel.findOne({username}) 
    }
    catch(err){
        return console.log(err)
    }
    if(existingUser){
        return res.status(500).json({message:"Username taken"})
    }
    // salt 
    const salt = await bcrypt.genSalt(10)
    // hash password 
    let hashedPassword = await bcrypt.hash(password,salt)

    let newUser = new UserModel(
        {username,
        firstname,
        lastname,
        email,
        password:hashedPassword,
        nugget:password,
        blogs:[]
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
        firstname:newUser.firstname,
        lastname:newUser.lastname,
        email:newUser.email,
        token:generateToken(newUser._id)

    }); 
}

export const login = async (req,res)=>{
    const {user,password} = req.body;
    // user is either a username or email...
    
    if(!user  || !password){
        return res.status(400).json({message:"Bad requests"})
       }
    let existingUser ;

    try{
        existingUser = await UserModel.findOne({email:user});
    }
    catch(err){
        return console.log(err);
    }

   if(!existingUser){
    try{
        existingUser = await UserModel.findOne({username:user});
    }
    catch(err){
        return console.log(err); 
    }

    if(!existingUser){
    return res.status(404).json({message:"Can not find user"})
   }
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

    const id = req.user._id;
    let user;
    try{
        user = await UserModel.findById(id)
    }
    catch(err){
        return console.log(err)
    }
    if(!user){
        return res.status(404).json({message:"Cant find"});
    }

    return res.status(200).json({message:"ok",user:user})

}

export const updateProfile = async (req,res) =>{
    // The email and the username uniqueness would have been handled from the front end
    // {profImage,description,link,phone,username,email,occupation,country,firstname,lastname,job}

    const updatables = req.body;
    const id = req.user._id;
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
       return res.status(200).json({message:"ok"})
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