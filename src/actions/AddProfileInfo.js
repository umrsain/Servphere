'use server'

import { auth } from '@/auth';
import { User } from "../../models/userModel";
import { Store } from "../../models/storeModel";

import { connectDB } from "../utils/connect";
import { revalidatePath } from 'next/cache';

export async function AddProfileInfo(formData) {
    const session = await auth();
    const email = session.user?.email;

    // GET FORM DATE
    const profileImg = formData.get("profileImg");
    const username = formData.get("username");
    const bio = formData.get("bio");
    const location = formData.get("location");



    console.log(profileImg)

     // CONNECT DB
     await connectDB();
 
     await Store.updateOne({ownerEmail: email},{
        $set : {        
          img: profileImg,
          username: username,
          bio: bio,
          location: location
        }
     });

     await User.updateOne({email: email},{
        $set : {        
          onBoardingStep: 1
        }
     });

     revalidatePath('/mystore')

}
