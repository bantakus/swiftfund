import express from "express"
import {getAllUsers,register,login,getUser,updateProfile,deleteUser} from "../Controllers/user.js"
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/",getAllUsers);
router.get("/:id",protect,getUser);
router.post("/register",register)
router.post("/login",login)
router.put('/user/update/:id',updateProfile);
router.delete("/user/delete/:id",deleteUser);

export default router;