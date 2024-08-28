'use server'

import { auth } from '@/auth';
import { User } from "../../models/userModel";
import { Store } from "../../models/storeModel";

import { connectDB } from "../utils/connect";

export async function createBooking(formData) {
    const session = await auth();
    const email = session.user?.email;
    const client_id = formData.get("client_id");
    const service_id = formData.get("service_id");

    const client_email = formData.get("client_emaol");
    const status = formData.get("status");
    const is_paid = formData.get("is_paid");




    console.log(profileImg)

     // CONNECT DB
     await connectDB();
 
     await Store.updateOne({ownerEmail: email},{
        $set : {        
          img: profileImg
        }
     });

     await User.updateOne({email: email},{
        $set : {        
          onBoardingStep: 1
        }
     });

     revalidatePath('/mystore')

}
