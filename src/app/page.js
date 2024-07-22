"use client"

import Link from 'next/link';
import React from 'react'
import img from '../components/servphere-logov2.png';
import Image from 'next/image';


export default function Home() {

  //console.log(res.oceanProducts[0].transportSchedules);
  
  return (
    <div className='flex flex-col w-full h-full bg-teal-400/70 pt-10 pl-12 pr-12 pb-12'>

        <div className='flex'>

            <div className='flex items-center justify-items-center'>
            
                <Image 
                    src={img}
                    width={50}
                    height={50}
                    className='h-auto'
                    alt="Picture of the author" 
                />

                <h3 className='block text-gray-50 text-md font-semibold'>Servphere</h3>
            </div>

            <div className='flex justify-end space-x-3 w-full'>

                <Link href={"/login"}>
                    <div className='flex items-center hover:bg-gray-50 hover:text-gray-600 border-2 border-gray-200 text-gray-200 justify-center rounded-3xl py-1 px-4'>
                        <p className='text-md font-medium'>Sign in</p>
                    </div>
                </Link>

                <Link href={"/register"}>
                    <div className='flex items-center hover:bg-gray-50 hover:text-gray-600 text-gray-200 border-2 border-gray-200 justify-center rounded-3xl py-1 px-4'>
                        <p className='text-md font-medium'>Sign up</p>
                    </div>
                </Link>

            </div>

        </div>

        <div className='flex w-full h-full'>
            <div className='w-2/4 h-full space-y-12 mt-16 ml-14'>
                <h1 className='block text-gray-100 text-7xl font-bold'>
                Meet Your <span className=''> All-In-One </span>Store Builder
                </h1>

                <p className='text-gray-100 text-md font-regular'>
                    Build an online presence where you can sell digital products and services to you audience and grow your business today with Servhpere
                </p>

                <div>
                    <Link href={"/login"}>
                        <button className='bg-gray-50 hover:bg-gray-200 py-2 px-12 rounded-md focus:outline-none focus:shadow-outline'>
                            <p className='text-gray-600/75 text-md font-semibold'>
                                Get Started
                            </p>
                        </button>
                    </Link>
                </div>

            </div>


            <div className='flex mt-10 w-2/4 items-start justify-center'>
                

                <div className="flex flex-col sticky top-20 overflow-y-scroll items-center bg-[#fefefe] border-8 border-gray-800 rounded-[40px] w-[18rem] h-[35rem] mt-6">
        
                    {/* TOP NOTCH UPPER MOBIILE LINE */}
                    <div className='flex bg-gray-800 w-36 min-h-5 rounded-b-xl items-center justify-center space-x-3'>
                        <hr className='border-2 rounded-md border-gray-700 w-12'/>
                        
                        <div className='h-2 w-2 bg-blue-900 rounded-full'>
                        </div>
                    </div>    
                </div>



            </div>

        </div>

        
    </div>
  );
}
