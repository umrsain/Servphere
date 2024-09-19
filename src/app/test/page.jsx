"use client"
import { colors } from '@/utils/colors';
import { Link, MapPin } from 'lucide-react';
import React from 'react'
import { toast } from 'sonner';

export default function test() {

  const data = {
    banner : "https://static.vecteezy.com/system/resources/previews/024/039/444/large_2x/cool-colors-abstract-acrylic-paint-texture-background-banner-or-cover-design-or-wallpaper-generative-ai-photo.jpg",
    img : "https://i.pinimg.com/236x/8f/35/44/8f354448b91c11e6e8e63d6c1513f2b4.jpg",
    fullname: "Marcus Taylor",
    username: "@coachmarcus",
    bio : "Trainer, here to inspire others to become the Top G version of themselves",
    location: "Manchester",
    link: "marcustaylor.lnk/to/COBRA",
    services : [
      {
        title: "1:1 PT Session",
        desc: "Personalized 1:1 training session tailored to your fitness goals and skill level.",
        CTA : "Book",
        price :"$40.00"
      },
      {
        title: "Group Fitness Class",
        desc: "Join our high-energy group fitness class. Perfect for all levels.",
        CTA : "Book",
        price :"$20.00"
      }
    ]
  }

  return (

    <div className="flex w-full h-full bg-white" >

      <div className='flex w-2/4 h-screen items-start justify-center'>

      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">

             {/* TOP NOTCH UPPER MOBIILE LINE */}
          <div className='w-full flex justify-center'>
            <div className='flex sticky top-0 bg-gray-800 w-36 min-h-5 rounded-b-xl items-center justify-center space-x-3'>
                <hr className='border-2 rounded-md border-gray-700 w-12'/>
                
                <div className='h-2 w-2 bg-blue-900 rounded-full'>
                </div>
            </div>
          </div>

          <div className='w-full mt-3 z-10'>
            <div style={{backgroundImage: `url(${data.img})`}} className='flex bg-cover ml-3 h-20 w-20 rounded-full'>
            </div>

            <div className='flex flex-col mx-3'>
              <h3 className='text-gray-500 text-[10px] font-medium'>{data.fullname}</h3>
              <h3 className='text-gray-400 text-[10px]'>{data.username}</h3>
              <h3 className='text-gray-500 text-[9px]'>{data.bio}</h3>

              <div className='flex justify-between w-full mt-3'>

                <div className='flex text-gray-400 text-[8px] space-x-1'>
                  <Link size={12} color={colors.lightGrey}/>
                  <h6 className=''>{data.location}</h6>
                </div>

                <div className='flex space-x-1'>
                  <MapPin size={12} color={colors.lightGrey}/>
                  <h6 className='text-sky-700/75 text-[8px]'>{data.link}</h6>
                </div>

              </div>

            </div>

            <hr className='mt-2'/>

            <div className='flex flex-col w-full space-y-2'>

              {data.services.map((elm,index) =>
                <div className='flex justify-between shadow-sm p-3'>

                  <div className='w-[65%]'>
                    <h4 className='text-[11px] text-gray-600 font-semibold'>
                      {elm.title}
                    </h4>

                    <h5 className='text-[8px] text-gray-400'>
                      {elm.desc}
                    </h5>
                  </div>

                  <div className='flex space-x-2'>
                    <h4 className='text-[10px] text-gray-600'>{elm.price}</h4>

                    <button className={`bg-[${colors.airbnb_red}] h-5 px-2 text-[10px] text-white font-medium rounded-md`}>
                      {elm.CTA}
                    </button>
                  </div>
                </div>
              
              )}
            </div>

          </div>

        </div>


      </div>

    </div>
    </div>

   
  )
}
