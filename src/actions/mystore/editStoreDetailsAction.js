'use server'

import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';
import { db } from '@/db';
import { stores } from '@/db/schema/stores';
import { eq } from 'drizzle-orm';

export async function editStoreDetailsAction(formData) {
    const session = await auth();
    const email = session.user?.email;
    const username = formData.get("username");
    const bio = formData.get("bio");
    const link = formData.get("link");
    const location = formData.get("location");

     await db.update(stores).set({
        username  : username ,
        bio  : bio ,
        link  : link ,
        location  : location 
     }).where(eq(stores.userId, session?.user?.id))
  

     revalidatePath('/mystore')

}
