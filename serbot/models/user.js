import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {   
        username:{
            type:String,
            required:[true,'Please enter a username'],
            unique:true
        },
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
        DLI:{
            type:String,
            default:""
        },
        Medicare_Image:{
            type:String,
            default:""
        }

        
    },{
        timestamps:true
    }
)

const UserModel = mongoose.model("User",userSchema)

export default UserModel;