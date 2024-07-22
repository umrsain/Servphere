import Image from 'next/image'
import React from 'react'

export default function CheckoutDetailsPage({img,desc_title,price,body,buttonCTA,themeColor}) {
  return (
    <div>
        <div className='flex flex-col items-center w-full h-full mt-3'>
            <div className='bg-gray-600 w-[90%] h-[27%] rounded-lg'>
                
              
                    <Image
                        src={img}
                        width={100}
                        height={100}
                        className='w-full h-full rounded-lg'
                        alt='bg'
                    /> 
            
            </div>

            <div className='flex flex-col h-full w-full p-3'>

                <h2 className='text-lg text-gray-600 font-semibold'>
                    {desc_title}
                </h2>

                <span className='text-sky-400 font-semibold'>${price}</span>

                <h4 className='text-sm mt-3 text-gray-500'> 
                    {body}
                </h4> 

                <button style={{backgroundColor: themeColor}} type='submit' className='mt-6 w-full py-2 rounded-md focus:outline-none focus:shadow-outline'>
                                 
                    <h4 className='block text-white text-sm font-bold'>
                        {buttonCTA}
                    </h4>
                
                </button>

            </div>
        </div>

    </div>
  )
}
