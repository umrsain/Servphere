'use server'

import { auth } from '@/auth';
import { db } from '@/db';
import { eq, sql } from 'drizzle-orm';
import { users } from '@/db/schema/users';
import { revalidatePath } from 'next/cache';

export async function AddNiches(niches) {
    const session = await auth();
    const email = session.user?.email;

    niches = JSON.parse(niches)
    console.log(niches)
    console.log(email)

    await db.update(users)
    .set({ 
        niches: niches,
    })
    .where(eq(users.id, session?.user?.id));


 
}