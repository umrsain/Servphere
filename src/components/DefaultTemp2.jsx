import React from 'react'
import { FaInstagramSquare, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'


export const DefaultTemp2 = () => {
    const midGray = '#B9B9B9'

  return (
<div className="flex flex-col items-center bg-[#fdfdfd] border-4 border-gray-500 rounded-xl w-[55%] h-[75%] mt-12">

        <div className='flex w-full m-5 items-start space-x-2'>

            <div className="flex bg-cover bg-[url('./S-bg.png')] h-[3rem] w-[3rem] ml-5 rounded-full">
            </div>
        
            <div className='space-y-2'>

                <h1 className='text-gray-600 block font-bold text-sm'>
                    Sandra Jones
                </h1>

                <div className='flex space-x-1.5 w-full mt-4'>
                    <div className='h-4 w-4 rounded-full border border-gray-300 flex items-center justify-center'>
                        <FaYoutube color={midGray} size={10}/>
                    </div>

                    <div className='h-4 w-4 rounded-full border border-gray-300 flex items-center justify-center'>
                        <FaTiktok  color={midGray} size={10}/>
                    </div>

                    <div className='h-4 w-4 rounded-full border border-gray-300 flex items-center justify-center'>
                        <FaTwitter color={midGray} size={10}/>
                    </div>

                    <div className='h-4 w-4 rounded-full border border-gray-300 flex items-center justify-center'>
                        <FaInstagramSquare color={midGray} size={10}/>
                    </div>
                    
                </div>

            </div>

        </div>

        <div className='flex flex-col space-y-9 items-center justify-center mt-11'>
            <div className='rounded-lg bg-gray-200 py-1.5 px-3'>
                <h4 className='text-sm text-gray-600 block font-semibold'>
                    New Section
                </h4>
            </div>

            <div className='rounded-lg bg-gray-200 py-1.5 px-3'>
                <h4 className='text-sm text-gray-600 block font-semibold'>
                    New Section
                </h4>
            </div>

        </div> 
        
    </div>

  )
}

