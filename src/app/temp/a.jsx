import Link from 'next/navigation'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen bg-sky-500/75'>

        <div className='flex'>
            <p className='text-gray-100 text-sm font-medium p-12'>Servphere</p>
            <div className='flex justify-end w-full'>

                <Link href={"/login"}>
                    <p className='text-gray-100 text-sm font-medium p-12'>Sign in</p>
                </Link>

                <Link href={"/register"}>
                    <p className='text-gray-100 text-sm font-medium p-12'>Sign up</p>
                </Link>

            </div>

        </div>

        <div className='flex w-full'>
            <div className='w-2/4 space-y-12 m-12'>
                <h1 className='block text-gray-100 text-7xl font-bold'>
                Meet Your All In One Store Builder
                </h1>

                <p className='text-gray-100 text-md font-regular'>
                    Build an online presence where you can sell digital products and services to you audience and grow your business today with Servhpere
                </p>

                <Link href={"/login"}>
                    <button className='bg-gray-100 hover:bg-gray-300 py-2 px-12 rounded-md focus:outline-none focus:shadow-outline'>
                        <p className='text-gray-600/75 text-md font-semibold'>
                            Get Started
                        </p>
                    </button>
                </Link>

            </div>


            <div className='flex align-center w-2/4 justify-center'>
                <div className='flex-col border-4 border-grey-500 rounded-xl h-full w-2/4'></div>

            </div>

        </div>

        
    </div>
  )
}

export default page