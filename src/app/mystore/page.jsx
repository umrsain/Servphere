import { auth } from '@/auth'
import { DefaultTemp } from '@/components/DefaultTemp'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'
import { connectDB } from "@/utils/connect";
import EditProfilePhoto from '@/components/mystore/EditProfilePhoto'
import EditUserName from '@/components/mystore/EditUserName'
import { Store } from '../../../models/storeModel'

const page = async () => {

    // GET LOGGED IN USERS EMAIL
    const session = await auth();
    const email = session.user?.email;
 
    // CREATE DB CONNECTION AND FETCH USER DATA
    await connectDB();


    let storeData;
    let themeColor;


    try{
        storeData = await Store.find({ownerEmail: email});  
        console.log(storeData)    
        themeColor = storeData[0].themeColor  
    } catch(err){
        console.log(err)
    }

      return (
        <div className="flex w-full h-full bg-white" >
    
    
                <Navbar/>
    
                <div className='w-full h-full'>
    
                    <h2 className='ml-6 mt-10 mb-2 block text-sky-900/65 text-3xl font-semibold'>
                        My Store
                    </h2>
    
                    <hr className='w-full'/>

                    <div className='flex flex-row'>
                        <div className='w-2/4 h-full'>

                            <div className='flex p-8 space-x-4'>

                                <div className='border-2 hover:border-sky-300/50 hover:text-sky-400 text-sky-800/65 rounded-2xl px-4 py-1'>
                                    <Link href=''>
                                        <h4 className='block text-sm font-semibold'>
                                            Sections
                                        </h4>
                                    </Link>
                                </div>

                                <div className='border-2 hover:border-sky-300/50 hover:text-sky-400 text-sky-800/65 rounded-2xl px-4 py-1'>
                                    <Link href='/mystore/edit'>
                                        <h4 className='block  text-sm font-semibold'>
                                            Edit Design
                                        </h4>
                                    </Link>
                                </div>
                         </div>       

                         {   (JSON.stringify(storeData) === '{}') ? null :

                            <>
                            <EditProfilePhoto image={storeData[0]?.img}/>

                            <EditUserName/>
                            </>

                        }
                        


                        </div>

                        <div className='flex w-2/4 h-screen items-start justify-center'>
                        {   (JSON.stringify(storeData) === '{}') ? null :

                       null
                        }
                        </div>
                    </div>

                </div>
    
    
        </div>
  )
} 

export default page

