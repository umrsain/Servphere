import { LoginForm } from '@/components/LoginForm';
import { redirect } from 'next/navigation';
import React from 'react';
import { auth, signIn } from '@/auth';
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';
import { Button } from '@/components/ui/button';


const login = async() => {

  const session = await auth();
  
  //if (session?.user) redirect("/mystore");


  return (
    <div className='h-screen bg-zinc-100 w-full flex items-center justify-center'>
        <div className='flex items-center justify-center h-screen w-[45%]'>

            <div className='w-3/4 p-10 h-3/4 rounded-xl bg-white'>
              <LoginForm/>

              <div className='flex mt-3 flex-col items-center space-y-3 justify-center'>

                <form action={ async() => {
                  "use server"
                  await signIn("google",{callbackUrl: "http://localhost:3000/onboarding"});
                }} className='h-full w-full hover:opacity-60 active:opacity-60'>
                    <Button variant="outline" className="w-full">
                      <FaGoogle size={15} className='mr-2'/>
                      Login with Google
                    </Button>
                </form>

                <h3 className='text-gray-600 text-xs'>Don&apos;t have an account? <Link className='text-violet-900/70 underline' href="/register">Register here</Link></h3>

              </div>

            </div>

        </div>

        <div className='h-screen w-[55%] bg-slate-600'>

        </div>

    </div>
  )
}

export default login