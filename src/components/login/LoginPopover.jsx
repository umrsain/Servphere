import React from 'react'
import { FaGoogle } from "react-icons/fa";

import {
    Dialog,
    DialogContent,

    DialogTrigger,
  } from "@/components/ui/dialog";
  import { colors } from '@/utils/colors';
import { toast } from 'sonner';
import { LoginForm } from '../LoginForm';
import { signIn } from '@/auth';
import { redirect } from 'next/navigation';


export default function LoginPopover() {
  return (
    <Dialog>

    <DialogTrigger asChild>
        <button>
            <div className={`flex items-center hover:bg-[${colors.airbnb_red}] hover:text-gray-50 text-gray-400 border-gray-200 justify-center rounded-3xl py-1 px-4`}>
                <p className='text-sm font-medium'>Sign in</p>
            </div>         
        </button>
    </DialogTrigger>

    <DialogContent className="sm:max-w-[425px]">
        
       

          <LoginForm/>

          <div className='flex flex-col h-full items-center justify-center mx-8'>

                  <div className='flex items-center w-full my-1'>
                    <hr className='w-1/2 border border-gray-200'/>
                    <p className='text-xs text-gray-400'>or</p>
                    <hr className='w-1/2 border border-gray-200'/>

                  </div>

                  <form action={ async() => {
                    "use server"
                    await signIn("google",{callbackUrl: "http://localhost:3000/onboarding"});
                  }} className='h-full w-full hover:opacity-60 active:opacity-60'>
                      <div className='flex items-center w-full justify-center border border-gray-400/75 space-x-4 rounded-md py-1.5'>
                        <FaGoogle size={15}/>
                        <button className='text-md' type='submit'>
                          Continue with Google
                        </button>
                      </div>
                  </form>
          </div>
        
       

    </DialogContent>
</Dialog>
  )
}
