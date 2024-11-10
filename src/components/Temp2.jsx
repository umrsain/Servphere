

import React from 'react'
import { FaInstagramSquare, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'

const Temp2 = () => {
    const url = 'https://wallpapers.com/images/featured/iron-man-4k-iphone-ajtrd55jqim4px36.jpg'
    const cardData = [
        {
            title: '1-1  Training Session',
            desc: ' to your fitness level and goals. Ensuring effective workouts with direct feedback and motivational support',
            price: '$50',
            discount : true,
            priceBeforeDiscount : '$76'
        },
        {
            title: 'Group Fitness Classes',
            desc: 'Join an energising  fitness class Each session is designed to challenge and motivate with plenty of support from our community',
            price: '$10',
            discount : false,
            priceBeforeDiscount : null
        },
    ]

  return (
    <div className="flex bg-cover bg-[url('./Sb-3.png')] flex-col items-center bg-[#fdfdfd] border-4 border-grey-500 rounded-xl w-[55%] h-[75%] mt-12">  

            <h1 className='text-white block drop-shadow-md font-bold text-2xl mt-4'>
                Sandra Jones
            </h1>

            <div className='flex mt-1 space-x-3 drop-shadow-md'>
                <FaYoutube color='white' size={21}/>
                <FaTiktok  color='white' size={21}/>
                <FaTwitter color='white' size={21}/>
                <FaInstagramSquare color='white' size={21}/>
            </div>
            
            <div className='h-full m-3 flex flex-col justify-end space-y-2'>
                {cardData.map((elm) =>
                    <div key={elm.title} className='bg-white shadow-lg space-y-2 rounded-md'>
                        <h1 className='text-gray-600 font-semibold text-[11px] m-2'> 
                            {elm.title}
                        </h1>
                        <h3 className='text-gray-600 font-medium text-[9px] m-2'>
                            {elm.desc}
                        </h3>
                        <h4 className='text-gray-600 font-semibold text-[11px] m-2'>
                            {elm.price}
                        </h4>

                        <div className='flex w-ful items-center justify-center p-1'>
                            <button className='hover:bg-sky-300 bg-[#587158] w-[95%] py-1 rounded focus:outline-none focus:shadow-outline'>
                                <h4 className='text-gray-100 font-semibold text-[10px]'>
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

export default Temp2