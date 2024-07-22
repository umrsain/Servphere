import React from 'react'
import { FaInstagramSquare, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'


export const DefaultTemp5 = () => {
  return (
    <div className="flex bg-cover bg-[url('https://wallpapercave.com/wp/wp11588679.jpg')] flex-col items-center bg-[#fdfdfd] border-4 border-gray-600 rounded-xl w-[55%] h-[75%] mt-12">  

    <h1 className='text-white block drop-shadow-md font-bold text-xl mt-4'>
        Alexander Jones
    </h1>

    <div className='flex mt-3 space-x-3 drop-shadow-md'>
        <FaYoutube color='white' size={14}/>
        <FaTiktok  color='white' size={14}/>
        <FaTwitter color='white' size={14}/>
        <FaInstagramSquare color='white' size={14}/>
    </div>

    <div className='flex flex-col space-y-9 items-center h-full w-full justify-center'>
        <div className='rounded-2xl bg-gray-200 py-1.5 px-3'>
            <h4 className='text-xs text-gray-600 block font-semibold'>
                New Section
            </h4>
        </div>

        <div className='rounded-2xl bg-gray-200 py-1.5 px-3'>
            <h4 className='text-xs text-gray-600 block font-semibold'>
                New Section
            </h4>
        </div>

    </div>        
    </div>
  )
}

