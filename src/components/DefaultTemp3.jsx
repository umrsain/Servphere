import React from 'react'
import { FaInstagramSquare, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'

export const DefaultTemp3 = () => {
    const darkgrey = '#494949'

  return (
    <div className="flex bg-cover bg-center bg-[url('https://i.pinimg.com/736x/1f/57/06/1f570661a2820a903a28e5b7cc542d4a.jpg')] flex-col justify-end items-center border-4 border-grey-500 rounded-xl w-[55%] h-[75%] mt-12">
                            
        <div className='h-[67%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-b-lg w-full flex flex-col bg-[#fff7ea] space-y-2'>
            
            <div className='w-full flex flex-col items-center justify-center space-y-4'>
                <h1 className="text-gray-500 font-['Chancery'] block drop-shadow-md font-semibold text-2xl mt-4">
                    Zayn Malik
                </h1>

                <div className='flex flex-ro w-full mt-4 space-x-3 items-center justify-center'>
                    <div className='h-5 w-5 rounded-full border border-gray-600 flex items-center justify-center'>
                        <FaYoutube color={darkgrey} size={10}/>
                    </div>

                    <div className='h-5 w-5 rounded-full border border-gray-600 flex items-center justify-center'>
                        <FaTiktok  color={darkgrey} size={10}/>
                    </div>

                    <div className='h-5 w-5 rounded-full border border-gray-600 flex items-center justify-center'>
                        <FaTwitter color={darkgrey} size={10}/>
                    </div>

                    <div className='h-5 w-5 rounded-full border border-gray-600 flex items-center justify-center'>
                        <FaInstagramSquare color={darkgrey} size={10}/>
                    </div>
                    
                </div>
            </div>

            <div className='flex flex-col space-y-9 items-center pt-12 w-full h-full'>
                <div className='rounded-lg bg-[#ead9be]  py-1.5 px-3'>
                    <h4 className='text-sm text-gray-600/75 block font-semibold'>
                        New Section
                    </h4>
                </div>

                <div className='rounded-lg bg-[#ead9be] py-1.5 px-3'>
                    <h4 className='text-sm text-gray-600/75 block font-semibold'>
                        New Section
                    </h4>
                </div>

            </div> 
        </div>
    </div>    
  )
}

