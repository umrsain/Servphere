import React from 'react'
import { FaInstagramSquare, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'


const Temp3 = () => {
  return (
    <div className="flex  bg-cover bg-[url('./Sb-3.png')] flex-col justify-end items-center bg-[#fdfdfd] border-4 border-grey-500 rounded-xl w-[55%] h-[75%] mt-12">

        <h1 className='text-white block drop-shadow-md font-bold text-2xl mt-4'>
            Sandra Jonese
        </h1>

        <div className='flex mt-1 space-x-3 drop-shadow-md'>
            <FaYoutube color='white' size={21}/>
            <FaTiktok  color='white' size={21}/>
            <FaTwitter color='white' size={21}/>
            <FaInstagramSquare color='white' size={21}/>
        </div>

    
        
        <div className='h-3/5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-full m-3 flex flex-col bg-gray-800 justify-end space-y-2'>
            {cardData.map((elm) =>
                <div key={elm.title} className='bg-gray-800 border  border-gray-600 space-y-2 rounded-md'>
                    <h1 className='text-gray-100 font-semibold text-[11px] m-2'> 
                        {elm.title}
                    </h1>
                    <h3 className='text-gray-100 font-medium text-[9px] m-2'>
                        {elm.desc}
                    </h3>
                    <h4 className='text-gray-100 font-semibold text-[11px] m-2'>
                        {elm.price}
                    </h4>

                    <div className='flex w-ful items-center justify-center p-2'>
                        <button className='hover:bg-sky-300 bg-gray-100 w-[95%] py-1 rounded focus:outline-none focus:shadow-outline'>
                            <h4 className='text-gray-800 font-semibold text-[10px]'>
                                Get Started
                            </h4>
                        </button>
                    </div>

                </div>
            )}
        </div>
</div>
  )
}

export default Temp3