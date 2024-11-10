'use server'

import { auth } from '@/auth';
import { Store } from "../../../models/storeModel";
import { connectDB } from "../../utils/connect";
import { revalidatePath } from 'next/cache';

export async function EditLinkAction(formData) {
    const session = await auth();
    const email = session.user?.email;
    const link = formData.get("link");
    
    console.log(link);

     // CONNECT DB
     await connectDB();
 
     await Store.updateOne({ownerEmail: email},{
        $set: {
            link  : link 
        }     
     });

     revalidatePath('/mystore')

}
