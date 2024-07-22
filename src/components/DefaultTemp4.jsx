import React from 'react'
import { FaInstagramSquare, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'


export const DefaultTemp4 = () => {
  return (
<div className="flex flex-col items-center bg-[#fdfdfd] border-4 border-grey-500 rounded-xl w-[55%] h-[75%] mt-12">

    <div className='flex w-full items-start m-5'>
        <div className="flex bg-cover ml-5 bg-[url('./S-bg.png')] h-[8rem] w-[6rem] rounded-l-lg">
        </div>

        <div className='bg-red-400/75 h-full w-full border-0 mr-5 rounded-r-lg'>
            <h1 className='text-gray-100 block font-bold ml-4 mt-4 text-lg'>
                Sandra Jones
            </h1>

            <div className='flex mt-4 ml-4 space-x-3 items-end'>
                <div className='h-5 w-5 rounded-full bg-gray-200/25 flex items-center justify-center'>
                    <FaYoutube color='white' size={11}/>
                </div>

                <div className='h-5 w-5 rounded-full bg-gray-200/25 flex items-center justify-center'>
                    <FaTiktok  color='white' size={11}/>
                </div>

                <div className='h-5 w-5 rounded-full bg-gray-200/25 flex items-center justify-center'>
                    <FaTwitter color='white' size={11}/>
                </div>

                <div className='h-5 w-5 rounded-full bg-gray-200/25 flex items-center justify-center'>
                    <FaInstagramSquare color='white' size={11}/>
                </div>
                
            </div>
        </div>
    </div>

    <div className='flex flex-col space-y-9 items-center justify-center mt-11'>
        <div className='rounded-2xl bg-red-400/75  py-2 px-3.5'>
            <h4 className='text-sm text-gray-100 block font-semibold'>
                New Section
            </h4>
        </div>

        <div className='rounded-2xl bg-red-400/75  py-2 px-3.5'>
            <h4 className='text-sm text-gray-100 block font-semibold'>
                New Section
            </h4>
        </div>

    </div>                    
    </div>  
    )
}

