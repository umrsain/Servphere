import Image from 'next/image'
import React from 'react'

export const Button = ({img,buttonCTA, price}) => {

  // Check if global URL exists otherwsise set it the local state variable
  
  return (
    <div className='flex w-2/4 items-start justify-center'>

        <div className="flex flex-col sticky top-20 items-center justify-center bg-[#f9f9f9] rounded-md drop-shadow-xl w-[70%] h-[16%]">
            <div className='bg-white w-[92%] h-[73%]'>

                <div className='flex flex-row w-full h-full items-center justify-start space-x-4 ml-3'>
                    <div className='h-10 w-10 rounded-md'>
                     {
                      img ? 
                      <Image
                        src={img}
                        height={100}
                        width={100}
                        className='rounded-md'
                        alt='logo'
                      /> :
                       null
                     }
                    </div>
                    <h3 className='text-sm text-gray-500 font-medium'>{buttonCTA} <span className='text-sky-400 font-semibold'>${price}</span></h3>

                </div>

            </div>
        </div>
    </div>
  )
}

