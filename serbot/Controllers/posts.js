import mongoose from "mongoose";
import PostModel from "../models/posts.js"
import UserModel from "../models/user.js";

// get posts
export const getPosts = async (req,res) => {

    let allPosts;
    try{
        allPosts = await PostModel.find();
    }
    catch(err){
        console.log(err.message);
        return res.status(404).json({message:err.message});
    }
    return res.status(200).json(allPosts);
}

// make post
export const createPost = async (req,res) => {
    // post contains title,description,image,user etc
    const post = req.body;
    

    let existingUser;
    try{
        existingUser = await UserModel.findById(req.user._id)
    }
    catch(err){
       return console.log(err)
    }
 if(!existingUser){
    return res.status(404).json({message:"Cant Find User"})
 }
    const newPost = new PostModel(post);

        // session
    try{
      const session = await mongoose.startSession();
      session.startTransaction()
      await newPost.save({session})
      existingUser.posts.push(newPost);
      await existingUser.save({session});
      await session.commitTransaction();
    }
    catch(err){
        return res.status(409).json
    }
    return res.status(200).json({message:"ok"})
}

// update post
export const updatePost = async (req,res)=>{
    const updatables = req.body;
    const id = req.params.id;
    let post = await findById(id);
    let user = await findById(req.user.id);
    // Check validity of user
    if(!user){
        return res.status(401).json({message:"Not Authorized"});
    }
    // matching users to the their posts
    if(user._id !== post.user.toString()){
          return res.status(401).json({message:"Not Authorized"});
    }; 
    
    try{   
     post = await PostModel.findByIdAndUpdate(id,updatables);
    }
    catch(err){
    return console.log(err);
    }
    if(!post){
        return res.status(500).json({message:"Unable to Update The Blog"});
    }
    return res.status(200).json(post);
}

// get posts
export const getPost = async (req,res)=>{
    const id = req.params.id;
    let post;
    try{
        post = await PostModel.findById(id);
    }
    catch(err){
       return console.log(err);
    }
    if(!post){
        return res.status(500).json({message:'Unable to Get Post'});

    }
    return res.status(200).json({message:"ok",post});

}

// delete posts
export const delPost = async (req,res) =>{
    const id = req.params.id;
    let post = await findById(id);
    let user = await findById(req.user.id);
    // Check validity of user
    if(!user){
        return res.status(401).json({message:"Not Authorized"});
    }
    // matching users to the their posts
    if(user._id !== post.user.toString()){
          return res.status(401).json({message:"Not Authorized"});
    }; 
    
    try{
       post = await PostModel.findByIdAndRemove(id).populate('user');
       await post.user.posts.pull(post);
       await post.user.save();
    }
    catch(err){
       return console.log(err)
    }
    if(!post){
        return res.status(500).json({message:"Unable to delete"})
    }

    return res.status(200).json(post)

}

export const getUserPosts = async (req,res) => {
    let id = req.params.id;
    let userPosts = await findById(id);
    let user = await findById(req.user.id);
    
       // Check validity of user
       if(!user){
        return res.status(401).json({message:"Not Authorized"});
    }
    // matching users to the their posts
    if(user._id !== userPosts.user.toString()){
          return res.status(401).json({message:"Not Authorized"});
    }; 
    
    
    try{
        userPosts = await UserModel.findById(id).populate("posts");

    }
    catch(err){
        return console.log(err)
    }
    if(!userPosts){

        return res.status(404).json({message:"cant find user posts"})
    }
    return res.status(200).json({message:"ok",posts:userPosts.posts})
    
}