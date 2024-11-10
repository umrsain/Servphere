'use server'

import { auth } from '@/auth';
import { User } from "../../../models/userModel";
import { connectDB } from "../../utils/connect";

export async function AddFeedback(formData) {
    const session = await auth();
    const email = session.user?.email;

    const selectedVal = formData.get("selectedVal")
    const comment = formData.get("comment")

       // CONNECT DB
       await connectDB();

       await User.updateOne({email: email},{    
           $set : {
               feedback: {
                 option : selectedVal,
                 comment: comment
               }
           } 
        })

}