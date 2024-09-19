'use server'

import { auth } from '@/auth';
import { Store } from "../../../models/storeModel";
import { connectDB } from "../../utils/connect";
import { revalidatePath } from 'next/cache';

export async function editStoreDetailsAction(formData) {
    const session = await auth();
    const email = session.user?.email;
    const username = formData.get("username");
    const bio = formData.get("bio");
    const link = formData.get("link");
    const location = formData.get("location");

     // CONNECT DB
     await connectDB();
 
     await Store.updateOne({ownerEmail: email},{
        $set: {
            username  : username ,
            bio  : bio ,
            link  : link ,
            location  : location 
        }
        
     });

     revalidatePath('/mystore')

}
