"use client"
import React, { useEffect, useState } from 'react'
import { MdEdit } from "react-icons/md";
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
import { UploadDropzone } from '@/utils/uploadthing' 
import { ChangeProfilePhoto } from '@/actions/mystore/ChangeProfilePhoto';
import { colors } from '@/utils/colors';

export default function EditProfilePhoto({image}) {
    const [img, setImg] = useState('');
  return (
    <div className='pl-8 space-y-2'>

        <label htmlFor='img' className='block text-sky-900/65 text-lg font-semibold'>
            Edit Profile Photo
        </label>

        <div>
            
            <Dialog>

                <DialogTrigger asChild>
                    <button>

                        <div style={{backgroundImage: `url(${image})`}} className="flex bg-cover min-w-28 min-h-28 hover:opacity-60 active:opacity-60 ml-5 rounded-full">
                            <MdEdit/>
                        </div>
                                     
                    </button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                    <DialogTitle>Edit Profile Picture</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile Picture here. Click save when you&apos;re done.
                    </DialogDescription>
                    </DialogHeader>

                    <form action={async (formData) => {
                        const toastID = toast.loading("Updating Profile photo");

                        try {
                        await ChangeProfilePhoto(formData);
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
                            setImg(res[0].url);
                            alert("Upload Completed");
                            }}
                            onUploadError={(error) => {
                            // Do something with the error.
                            alert(`ERROR! ${error.message}`);
                            }}
                        />
                        <input type='hidden' name="profileImg" value={img}/>
                        
                        <DialogFooter>

                        <button type='submit' className={`mt-3 bg-[${colors.airbnb_red}] hover:opacity-60 active:opacity-60 text-sm text-white py-2 px-12 rounded focus:outline-none focus:shadow-outline`}>
                            Save changes
                        </button>

                        </DialogFooter>
                    </div>
                    </form>

                </DialogContent>
            </Dialog>

        </div>
    
</div>
  )
}
