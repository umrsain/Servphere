'use server'

import { auth } from '@/auth';
import { User } from "../../models/userModel";
import { Store } from "../../models/storeModel";

import { connectDB } from "../utils/connect";
export async function editFirstLevel(formData) {
 
    const session = await auth();
    const email = session.user?.email;
    const fieldValue = formData.get("fieldValue");
    const fieldName = formData.get("fieldName");

     // CONNECT DB
     await connectDB();
 
     await Store.updateOne({ownerEmail: email},{
        $set: {
         themeColor : fieldValue
        }
     });
  
}
