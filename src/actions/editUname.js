'use server'

import { auth } from '@/auth';
import { Store } from "../../models/storeModel";
import { connectDB } from "../utils/connect";
import { revalidatePath } from 'next/cache';

export async function editUname(formData) {
    const session = await auth();
    const email = session.user?.email;
    const username = formData.get("username");
    
    console.log(username);
    console.log(email);


     // CONNECT DB
     await connectDB();
 
     await Store.updateOne({ownerEmail: email},{
        $set: {
            username  : username 
        }
        
        
     });

     revalidatePath('/mystore')

}
