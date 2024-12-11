'use server'

import { auth } from '@/auth';
import { db } from '@/db';
import { users } from '@/db/schema/users';
import { eq, sql } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function AddFeedback(formData) {
    const session = await auth();
    const email = session.user?.email;

    const selectedVal = formData.get("selectedVal")
    const comment = formData.get("comment")

    await db.update(users)
    .set({ 
      feedback: {
        option : selectedVal,
        comment: comment
      },
      onBoardingStep: 3,
      onBoardingCompleted: true
    })
    .where(eq(users.id, session?.user?.id));


     revalidatePath('/mystore')

}