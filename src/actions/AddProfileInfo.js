'use server'

import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';
import { db } from '@/db';
import { eq, sql } from 'drizzle-orm';
import { stores } from '@/db/schema/stores';
import { users } from '@/db/schema/users';

export async function AddProfileInfo(formData) {
    const session = await auth();
    const email = session.user?.email;

    // GET FORM DATA
    const profileImg = formData.get("profileImg");
    const username = formData.get("username");
    const bio = formData.get("bio");
    const location = formData.get("location");
    const link = formData.get("link");
    const store_id = formData.get("store_id");


    try {

        const id = crypto.randomUUID();

        await db.update(stores).set({
         id : store_id,
         ownerEmail: email,
         userId: session?.user?.id,
         img: profileImg,
         username: username,
         bio: bio,
         location: location,
         link: link
        })
    
        
        await db.update(users)
        .set({ onBoardingStep: 1 })
        .where(eq(users.id, session?.user?.id));
   
   
        revalidatePath('/mystore')
   
        return id;
   
    } catch(error){
        console.log(error)

        return "Unexpected Error Occured! Please try Again"
    }
     
  
}
