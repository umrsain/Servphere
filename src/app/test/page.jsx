"use client"
import { editUname } from '@/actions/editUname';
import React from 'react'
import { toast } from 'sonner';

export default function test() {
  return (

    <>
  


    <form action={ 
      async (formData) => {
            const toastID = toast.loading("Adding Socials");

            try {
              await editUname(formData);
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

            <label className='block text-sky-900/65 text-lg font-semibold'>
                Edit User Name
            </label>

              <input required name='username' placeholder='Enter new user name' type='text' className='focus:outline-none text-sm text-gray-500 w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75 border-0'/>


              <button type='submit' className='bg-teal-500/75 text-sm text-white hover:bg-teal-300/75 py-2 px-12 rounded focus:outline-none focus:shadow-outline'>
                Save changes
              </button>
        </form>

    </>
   
  )
}
