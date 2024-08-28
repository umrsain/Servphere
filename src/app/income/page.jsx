import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div className='flex h-screen bg-white'>
        <Navbar/>

        <div className='flex flex-col w-full h-full'>

            <div className='flex w-full h-1/2'>
                <div className='flex flex-col items-center space-y-4 mt-16 w-1/2'>
                    <h2 className='text-lg font-medium text-gray-400'>Total Revenue</h2>
                    <h2 className='text-xl font-bold text-gray-600'>25$</h2>

                </div>

                <div className='flex flex-col items-center space-y-4 mt-16 w-1/2'>
                    <h2 className='text-sm font-medium text-gray-400'>Available for cash out</h2>
                    <h2 className='text-md font-bold text-gray-600'>5$</h2>
                    <button className={`bg-[#f57575] hover:opacity-70 py-2 px-12 rounded-md focus:outline-none focus:shadow-outline`}>
                        <p className='text-gray-50 text-md font-semibold'>
                            Cash out
                        </p>
                    </button>
                </div>
            </div>

            <div className='p-5'>
                <h2 className='text-md font-medium text-gray-300'>
                    Latest orders
                </h2>

            </div>
        </div>

    </div>
  )
}

export default page