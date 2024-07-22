import Image from 'next/image'
import React from 'react'

const Preview = ({img, title, subtitle, price, buttonCTA}) => {
    
  // Check if global URL exists otherwsise set it the local state variable
  
  return (
    <div className='flex w-2/4 items-start justify-center'>

    <div className="flex flex-col sticky top-20 items-center justify-center bg-[#f9f9f9] rounded-md drop-shadow-xl w-[70%] h-[40%]">
        <div className='bg-white w-[92%] h-[73%]'>

            <div className='flex flex-col space-y-4 items-center justify-center'>
           
                <div className='flex w-full h-full items-start justify-start space-x-4 ml-5 mt-5'>

                    
                    <div className='h-10 w-10 rounded-md'>
                    {
                      img ? 
                      <Image
                        src={img}
                        height={100}
                        width={100}
                        alt="logo"
                      /> :
                       null
                     }
                    </div>
                   

                    <div className='flex flex-col space-y-1.5'>
                        <h3 className='text-sm text-gray-500 font-medium'>
                            {title}
                        </h3>

                        <h4 className='text-xs text-gray-400'>
                            {subtitle}
                        </h4>

                        <span className='text-sky-400 font-semibold'>${price}</span>

                    </div>
                </div>

                <button className='bg-sky-500/75 hover:bg-sky-300 py-2.5 w-11/12 rounded focus:outline-none focus:shadow-outline'>
                    <h4 className='text-sm text-white'>{buttonCTA}</h4>
                    
                </button>

                <span className='text-sky-400 text-xs'>Learn More</span>


            </div>
        </div>
    </div>
</div>

  )
}

export default Preview