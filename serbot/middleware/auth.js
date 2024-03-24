import jwt from 'jsonwebtoken'
import UserModel from '../models/user.js'

export const protect = async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        try{
            // Get token from header
             const token = req.headers.authorization.split(' ')[1];

            //  verify token
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
             req.user = await UserModel.findById(decoded.id).select('-password');
             next()
        }
        catch(err){
            res.status(401).json({message: err.message})
        }

       
    
}
else{
     if(!token){
            res.status(401).json({message:"No token found"})
        }
}

}