
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true,
        unique: true
    },
    phone: {
        type: String,
        required : true,
    },
    password: {
        type: String,
        required: true,
        select : false
    },
    googleId : {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    username : {
        type: String
    }

    
},
{
    timestamps: true
})

export const User = mongoose.models?.User || mongoose.model("User",userSchema)

