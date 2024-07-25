import { LoginForm } from '@/components/LoginForm';
import { redirect } from 'next/navigation';
import React from 'react';
import { auth, signIn } from '@/auth';


const login = async() => {

  const session = await auth();
  
  if (session?.user) redirect("/home");


  return (
    <div className='h-screen w-full bg-gradient-conic flex items-center justify-center'>
        <div className='w-2/6 h-full'>
            <LoginForm/>

            <div className=''>
                <span>Or</span>
                <form action={ async() => {
                  "use server"
                  await signIn("google")
                }}>
                    <button type='submit'>Login with Google</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default login