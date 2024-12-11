'use server'

import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';

import { db } from '@/db';
import { and, eq, sql } from 'drizzle-orm';
import { stores } from '@/db/schema/stores';
import { users } from '@/db/schema/users';

export async function AddSocials(formData) {
    const session = await auth();
    const insta = formData.get("insta");
    const tiktok = formData.get("tiktok");
    const twitter = formData.get("twitter");
    const store_id = formData.get("store_id");

    await db.update(stores)
    .set({ 
      socials:{
         insta: insta,
         tiktok : tiktok,
         twitter : twitter,
      }
    })
    .where(and( eq(stores.userId, session?.user?.id), eq(stores.id, store_id)));

    await db.update(users)
    .set({ onBoardingStep: 2 })
    .where(eq(users.id, session?.user?.id));

     revalidatePath('/mystore')


}
 