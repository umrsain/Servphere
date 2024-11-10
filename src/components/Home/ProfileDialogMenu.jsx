"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { toast } from 'sonner';
import { UploadDropzone } from '@uploadthing/react';
import { colors } from '@/utils/colors';
import { AddProfileInfo } from '@/actions/AddProfileInfo';

export default function ProfileDialogMenu({stepNumber}) {

  const [profileImg, setProfileImg] = useState('');

  return (
    <Dialog>

      <DialogTrigger asChild>
        <button className={`bg-[${colors.airbnb_red}] hover:opacity-60 active:opacity-60 py-2 w-2/5 rounded focus:outline-none focus:shadow-outline`}>
          <h4 className='block text-sm font-bold text-white'>
              + Add Profile Details
          </h4>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Profile Details</DialogTitle>
          <DialogDescription>
            Add your profile details here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <form action={async (formData) => {
            const toastID = toast.loading("Saving changes");

            try {
              await AddProfileInfo(formData);
              toast.success("Changes Successful", {
                id: toastID
              });

            } catch(error){
              toast.error(String(error), {
                id: toastID
            })

            }
        
          }}>
          <div className="">

              <div>
                  <label className='text-gray-500 text-xs'>Username</label>
                  <input required name='username' placeholder='Enter new user name' type='text' className='focus:outline-none text-xs text-gray-500 w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75 border-0'/>
              </div>
            

              <div>
                  <label className='text-gray-500 text-xs'>Profile Picture</label>

                  <UploadDropzone
                      endpoint={"imageUploader"}
                      onClientUploadComplete={(res) => {
                      // Do something with the response
                      console.log("Files: ", res[0].url);
                      setProfileImg(res[0].url);
                      alert("Upload Completed");
                      }}
                      onUploadError={(error) => {
                      // Do something with the error.
                      alert(`ERROR! ${error.message}`);
                      }}
                  /> 
              </div>

               <div>
                  <label className='text-gray-500 text-xs'>Bio</label>
                  <input required name='bio' placeholder='A short description of yourself' type='text' className='focus:outline-none text-xs text-gray-500 w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75 border-0'/>
              </div>

              <div>
                  <label className='text-gray-500 text-xs'>Location</label>
                  <input required name='location' placeholder='Enter new location' type='text' className='focus:outline-none text-xs text-gray-500 w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75 border-0'/>
              </div>

              <input type='hidden' name='profileImg' value={profileImg}/>
              
            <DialogFooter>

              <button type='submit' className={`mt-3 bg-[${colors.airbnb_red}] text-sm text-white hover:opacity-60 active:opacity-60 py-2 px-12 rounded focus:outline-none focus:shadow-outline`}>
                Save changes
              </button>

            </DialogFooter>
          </div>
        </form>

      </DialogContent>
    </Dialog>
  )
}
