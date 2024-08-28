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
import { AddProfilePhoto } from '@/actions/AddProfilePhoto';
import { UploadDropzone } from '@uploadthing/react';
import { colors } from '@/utils/colors';



export default function ProfileDialogMenu({stepNumber}) {



  const [profileImg, setProfileImg] = useState('');

  return (
    <Dialog>

      <DialogTrigger asChild>
        <button className={`bg-[${colors.airbnb_red}] hover:opacity-60 active:opacity-60 py-2 w-2/5 rounded focus:outline-none focus:shadow-outline`}>
          <h4 className='block text-sm font-bold text-white'>
              + Add Profile Picture
          </h4>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Profile Picture</DialogTitle>
          <DialogDescription>
            Make changes to your profile Picture here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <form action={async (formData) => {
            const toastID = toast.loading("Adding Profile photo");

            try {
              //await AddProfilePhoto(formData);
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
