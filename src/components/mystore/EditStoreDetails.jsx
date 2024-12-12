"use client"
import { editStoreDetailsAction } from '@/actions/mystore/editStoreDetailsAction';
import { colors } from '@/utils/colors';
import React, { useState } from 'react'
import { toast } from 'sonner';

export default function EditStoreDetails({username,bio,location,link}) {
    const [isLoading, setIsLoading] = useState(false);

  return (
    <form action={async (formData) => {
        const toastID = toast.loading("Changing Profile Details");

        setIsLoading(true)
        try {
          await editStoreDetailsAction(formData);
          toast.success("Changes Successful", {
            id: toastID
           });
        
        } catch(error){
          toast.error(String(error), {
            id: toastID
        })

        }

        setIsLoading(false)
    
    }} 
        className='pt-6 pl-8 space-y-3'>

        <label htmlFor='username' className='block text-sky-900/65 text-lg font-semibold'>
            Edit User Name
        </label>

        <input required autoFocus defaultValue={username} placeholder='Enter new user name' type='text' name='username' className='focus:outline-none text-sm text-gray-500 w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75 border-0'/>
 
        <label htmlFor='bio' className='block text-sky-900/65 text-lg font-semibold'>
            Edit Bio
        </label>

        <input required autoFocus defaultValue={bio} placeholder='Enter new bio' type='text' name='bio' className='focus:outline-none text-sm text-gray-500 w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75 border-0'/>

        <label htmlFor='location' className='block text-sky-900/65 text-lg font-semibold'>
            Edit Location
        </label>

        <input required autoFocus defaultValue={location} placeholder='Enter new location' type='text' name='location' className='focus:outline-none text-sm text-gray-500 w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75 border-0'/>


        <label htmlFor='link' className='block text-sky-900/65 text-lg font-semibold'>
            Edit Link
        </label>

        <input required autoFocus defaultValue={link} placeholder='Enter new link' type='text' name='link' className='focus:outline-none text-sm text-gray-500 w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75 border-0'/>


        <button type='submit' disabled={isLoading} className={`bg-[${colors.airbnb_red}] mt-6 hover:opacity-60 active:opacity-60 py-2 w-full rounded-md focus:outline-none focus:shadow-outline`}>
         
                <h4 className='block text-white text-sm font-bold'>
                    Save Changes
                </h4>
           
        </button>
    </form> 
    
    )
}
