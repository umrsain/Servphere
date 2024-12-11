'use server'

import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';
import { db } from '@/db';
import { stores } from '@/db/schema/stores';
import { eq } from 'drizzle-orm';

export async function ChangeProfilePhoto(formData) {
    const session = await auth();
    const email = session.user?.email;
    const profileImg = formData.get("profileImg");

    console.log(profileImg)

     await db.update(stores).set({
      img : profileImg
     }).where(eq(stores.userId, session?.user?.id))


     revalidatePath('/mystore')

}
