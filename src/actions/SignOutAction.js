'use server'

import { auth, signOut } from '@/auth';


export async function SignOutAction(formData) {
    const session = await auth();

     // CONNECT DB

     await signOut();


}