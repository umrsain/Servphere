'use server'

import { auth } from '@/auth';
import { User } from "../../../models/userModel";
import { connectDB } from "../../utils/connect";

export async function AddNiches(niches) {
    const session = await auth();
    const email = session.user?.email;

    niches = JSON.parse(niches)
    console.log(niches)
    console.log(email)

    // CONNECT DB
    await connectDB();

    await User.updateOne({email: email},{    
        $set : {
            niches: niches
        } 
    });

}