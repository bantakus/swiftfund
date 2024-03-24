import mongoose, { Schema } from "mongoose";


const postSchema = new mongoose.Schema({
    title:String,
    collectionId:String,
    content:String,
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    tags:[String],
    media:{},
    likeCount:[String],
    comments:[String],
    createdAt:{
        type:Date,
        default: new Date()
    }
},{
    timestamps:true
})


const PostModel = mongoose.model('Post',postSchema)

export default PostModel;
