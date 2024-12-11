"use client"
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Page() { 

    const pathname = usePathname();

    // ARRAY TO STORE PRODUCTS/SERVICES OFFERED
    const ProductItems = [
        {
            id: 1,
            name: 'Book a 1:1 session',
            desc: 'Book an appointment with clients',
            img : 'https://w7.pngwing.com/pngs/44/943/png-transparent-google-calendar-logo-icon.png'
        },
        {
            id: 2,
            name: 'Digital Download',
            desc: 'Sell PDFs, Spreadsheets, Word Documents, eBooks etc',
            img : 'https://img.favpng.com/23/7/4/computer-icons-educational-technology-learning-training-course-png-favpng-j5t2UTpdMx23LZhscuTVqAJGb.jpg'
        },

    ]

  return (
    
            <div className='flex bg-white'>
    
                <Navbar/>
    
                <div className='w-full h-screen'>
    
                    <h2 className='ml-6 mt-10 mb-2 block text-sky-900/65 text-3xl font-semibold'>
                        
                        <span className='text-gray-300'>My Store /</span> Add Product
                    </h2>
    
                    <hr className='w-full'/>

                    <div className='p-7 w-3/4'>
                        { ProductItems.map((elm) =>
                        <Link key={elm.id} href={`${pathname}/service/${elm.id}`}>

                            <div className='flex flex-row hover:opacity-60 active:opacity-60 p-3 border-0 mb-2 rounded-xl shadow-md space-x-3'>
                                
                                    <div className='bg-gray-300 w-14 h-14 rounded-lg'>
                                        <Image
                                            className='rounded-lg'
                                            src={elm.img}
                                            height={100}
                                            width={100}
                                            alt="logo"
                                        />
                                    </div>

                                <div className=''>

                                        <h3 className='block mb-2 text-sky-900/75 text-xl font-semibold'>
                                            {elm.name}
                                        </h3>
                                        <h4 className='block mb-2 text-gray-500/75 text-xs font-semibold'>
                                            {elm.desc}
                                        </h4>

                                </div>

                            </div>   

                        </Link>
                    )}
                    </div>
                    
                </div>

            </div>
    
  )
}