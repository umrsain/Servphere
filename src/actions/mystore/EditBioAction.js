'use server'

import { auth } from '@/auth';
import { Store } from "../../../models/storeModel";
import { connectDB } from "../../utils/connect";
import { revalidatePath } from 'next/cache';

export async function EditBioAction(formData) {
    const session = await auth();
    const email = session.user?.email;
    const bio = formData.get("bio");
    
    console.log(bio);

     // CONNECT DB
     await connectDB();
 
     await Store.updateOne({ownerEmail: email},{
        $set: {
            bio  : bio 
        }     
     });

     revalidatePath('/mystore')

}
