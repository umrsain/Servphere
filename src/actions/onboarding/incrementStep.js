'use server'

import { auth } from '@/auth';
import { connectDB } from '@/utils/connect';
import { redirect } from 'next/navigation';
import { User } from '../../../models/userModel';
import { revalidatePath } from 'next/cache';

export async function incrementStep() {
    const session = await auth();
    const email = session.user?.email;

    // CONNECT DB
    await connectDB();

    await User.updateOne({email: email},{    
        $set : {        
            onBoardingStep: 3
          }
    });

    revalidatePath('/mystore')

}