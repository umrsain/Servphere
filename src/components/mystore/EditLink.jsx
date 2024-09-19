"use client"
import { EditLinkAction } from '@/actions/mystore/EditLinkAction';
import { colors } from '@/utils/colors';
import React from 'react'
import { toast } from 'sonner';

export default function EditLink() {
  return (
    <form action={async (formData) => {
        const toastID = toast.loading("Changing Link");

        try {
          await EditLinkAction(formData);
          toast.success("Changes Successful", {
            id: toastID
           });
           

        } catch(error){
          toast.error(String(error), {
            id: toastID
        })

        }
    
    }} 
        className='pt-6 pl-8 space-y-3'>

        <label htmlFor='link' className='block text-sky-900/65 text-lg font-semibold'>
            Edit Link
        </label>

        <input required autoFocus placeholder='Enter new link' type='text' name='link' className='focus:outline-none text-sm text-gray-500 w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75 border-0'/>


        <button type='submit' className={`bg-[${colors.airbnb_red}] mt-6 hover:opacity-60 active:opacity-60 py-2 w-full rounded-md focus:outline-none focus:shadow-outline`}>
         
                <h4 className='block text-white text-sm font-bold'>
                    Save Changes
                </h4>
           
        </button>
    </form> 
    
    )
}
