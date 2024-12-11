"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { colors } from '@/utils/colors'
import { Link, MapPin } from 'lucide-react';
 
export const DefaultTemp = ({themeColor, profileImg, username, bio, link, location, servicesData}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    let serviceIndexToComponentMapping = {
        
    }

    
  return (



<div className="sticky top-20 mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[700px] w-[350px]">
    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-[322px] h-[672px] bg-white dark:bg-gray-800">

             {/* TOP NOTCH UPPER MOBIILE LINE */}
          <div className='w-full flex justify-center'>
            <div className='flex sticky top-0 bg-gray-800 w-36 min-h-5 rounded-b-xl items-center justify-center space-x-3'>
                <hr className='border-2 rounded-md border-gray-700 w-12'/>
                
                <div className='h-2 w-2 bg-blue-900 rounded-full'>
                </div>
            </div>
          </div>

    {/* THUMBNAIL PAGE RENDERED DYNAMICALLY*/}
    <div className='w-full mt-3 z-10'>
            <div style={{backgroundImage: `url(${profileImg})`}} className='flex ml-3 bg-cover h-20 w-20 rounded-full'>
            </div>

            <div className='flex flex-col mt-3 mx-3'>
              <h3 className='text-gray-500 text-[10px] font-medium'>{username}</h3>
              <h3 className='text-gray-500 text-[9px]'>{bio}</h3>

              <div className='flex justify-between w-full mt-3'>

                <div className='flex text-gray-400 text-[8px] space-x-1'>
                  <Link size={12} color={colors.lightGrey}/>
                  <h6 className=''>{location}</h6>
                </div>

                <div className='flex space-x-1'>
                  <MapPin size={12} color={colors.lightGrey}/>
                  <h6 className='text-sky-700/75 text-[8px]'>{link}</h6>
                </div>

              </div>

            </div>

            <hr className='mt-2'/>

            <div className='flex flex-col w-full space-y-2'>

              {servicesData?.map((elm,index) =>
                <div key={index} className='flex justify-between shadow-sm p-3'>

                  <div className='w-[65%]'>
                    <h4 className='text-[11px] text-gray-600 font-semibold'>
                      {elm.thumbnail.title}
                    </h4>

                    <h5 className='text-[8px] text-gray-400'>
                      {elm.thumbnail.subtitle}
                    </h5>
                  </div>

                  <div className='flex space-x-2'>
                    <h4 className='text-[10px] text-gray-600'>{elm.thumbnail.price}</h4>

                    <button className={`bg-[${colors.airbnb_red}] h-5 px-2 text-[10px] text-white font-medium rounded-md`}>
                      Book
                    </button>
                  </div>
                </div>
              
              )}
            </div>

          </div>

        
    </div>

    </div>
    


    

    
  )
}
