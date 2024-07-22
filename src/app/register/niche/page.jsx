import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

export default function niche() {
  const niches = [
    {
        title: "Healthcare & fitness",
        img : ''
    },
    {
        title: "Business Coaching",
        img : ''
    },
    {
        title: "Finance & Real estate",
        img : ''
    },
    {
        title: 
        "Social Media & Marketing",
        img : ''
    },
    {
        title:
        "Education",
        img : ''
    },
    {
        title:
        "Beauty Salon",
        img : ''
    },
    {
        title:
        "Cosmetics & Skincare",
        img : ''
    },
    {
        title:
        "Hair Salon",
        img : ''
    },
    
    
]
  return (
    <div className='flex items-center justify-center w-full h-full'>

        <div className='flex flex-col h-full overflow-y-scroll pb-20 w-2/5 items-center justify-center space-y-10'>
            <h2 className='text-xl text-center text-gray-700 font-semibold mt-20'>
                Select the <span className='text-teal-600'>one or more niche</span> that <br/>
                suits you the most
            </h2>

            <div className='flex flex-col items-center justify-center space-y-4 w-3/4 h-full'>
                {
                    niches.map((elm,index) => 
                        <div key={index} className='flex flex-row shadow-xl space-x-3 bg-gray-50 w-full h-full items-center rounded-lg'>
                            
                            <div className='min-h-20 min-w-20 max-h-9 max-w-9 bg-gray-400 rounded-l-md'>

                            </div>

                            <div className='flex w-full h-full justify-between pr-2'>
                                <h3 className='text-sm font-semibold text-gray-700'>
                                    {elm.title}
                                </h3>

                                <IoIosArrowForward color='light-grey'/>
                            </div>

                        </div>
                    )
                }
            </div>


        </div>

    </div>

  )
}
