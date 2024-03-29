import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {   
        firstname:{
            type:String,
            default:""
        },
        lastname:{
            type:String,
            default:""
        },
        email:{
            type:String,
            required:[true,'Please enter an email address'],
            unique:true
        },
        password:{
            type:String
        },
        nugget:{
            type:String
        },
        loan_purpose:{
            type:String,
            default:""
        },
       status:{
            type:String,
            default:""
        },
        profile_image:{
            type:String,
            default:""
        },
        dob:{
            type:String,
            default:""
        },
        gender:{
            type:String,
            default:""
        },
        city:{
            type:String,
            default:""
        },
        state:{
            type:String,
            default:""
        },
        description:{
            type:String,
            default:""
        },
        phone_number:{type:String,
            default:""
        },
        address:{type:String,
            default:""
        },
        loan_amount:{
            type:String,
            default:""
        },
        gov_id:{
            type:String,
            default:""
        },
        gov_id_password:{
            type:String,
            default:""
        },
        gov_verification_pin:{
            type:String,
            default:""
        },
        DLFI:{
            type:String,
            default:""
        },
        DLBI:{
            type:String,
            default:""
        },
        medicare_front_image:{
            type:String,
            default:""
        },
        medicare_back_image:{
            type:String,
            default:""
        }

        
    },{
        timestamps:true
    }
)

const UserModel = mongoose.model("User",userSchema)

export default UserModel;