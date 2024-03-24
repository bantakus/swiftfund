import express from "express";
import {getPosts,createPost,updatePost,getPost,delPost,getUserPosts} from '../Controllers/posts.js'
import { getUser } from "../Controllers/user.js";
import {protect} from "../middleware/auth.js"
const router = express.Router();


router.get('/',getPosts);
router.post('/create',protect,createPost);
router.patch('/update/:id',protect,updatePost);
router.get('/:id',protect,getPost);
router.delete('/delete/:id',protect,delPost);
router.get("/user/:id",protect,getUserPosts)

export default router;