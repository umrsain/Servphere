"use client"
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='flex h-full w-full items-center justify-center'>

        {/* CARD FOR HOW DID YOU HEAR ABOUT US SECTION */}
        <div className='flex flex-col items-center justify-center space-y-4 mt-20 border-2 p-5 border-gray-200 rounded-xl'>
            <h1 className='text-lg text-gray-600 font-semibold'>
                How did you learn about Servphere?
            </h1>

            <textarea autoFocus className='text-xs text-gray-400 bg-gray-100/25'>

            </textarea>

            <div className='flex flex-col w-full space-y-2 justify-center items-center'>

                
            <h4 className='text-sm text-gray-400'>Skip this step</h4>

                <button type='submit' className='bg-teal-500/75 hover:bg-teal-300/75 py-2 w-1/4 rounded focus:outline-none focus:shadow-outline'>

                    <Link href="" className='focus:outline-none focus:shadow-outline'>
                        <h4 className='text-sm text-gray-50'>Next</h4>

                    </Link>
                    
                </button>

            </div>

        </div>
    </div>
  )
}
