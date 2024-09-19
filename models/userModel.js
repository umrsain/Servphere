
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
    },
    onBoardingCompleted: {
        type: Boolean
    },
    onBoardingStep: {
        type: Number
    },
    niches : {
        type: Array,
        default : []
    },
    feedback: {
        option: {
            type: String
        },
        comment: {
            type: String
        },
        default: {}
    },
    priceId : {
        type: String,
        default: ""
    },
    hasProSubscription : {
        type : Boolean,
        default : false
    },
    customerId: {
        type: String,
        validate(value) {
          return value.includes("cus_");
        },
      },
    
},
{
    timestamps: true
})

export const User = mongoose.models?.User || mongoose.model("User",userSchema)

