'use server'

import { auth, signOut } from '@/auth';
import { User } from "../../models/userModel";
import { Store } from "../../models/storeModel";
import { connectDB } from "../utils/connect";
import { revalidatePath } from 'next/cache';

export async function SignOutAction(formData) {
    const session = await auth();
    const email = session.user?.email;

     // CONNECT DB
     await connectDB();
     await signOut();


}