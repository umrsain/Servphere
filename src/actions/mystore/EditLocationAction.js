'use server'

import { auth } from '@/auth';
import { Store } from "../../../models/storeModel";
import { connectDB } from "../../utils/connect";
import { revalidatePath } from 'next/cache';

export async function EditLocationAction(formData) {
    const session = await auth();
    const email = session.user?.email;
    const location = formData.get("location");
    
    console.log(location);

     // CONNECT DB
     await connectDB();
 
     await Store.updateOne({ownerEmail: email},{
        $set: {
            location  : location 
        }     
     });

     revalidatePath('/mystore')

}
