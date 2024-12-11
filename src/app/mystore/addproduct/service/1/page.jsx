"use client"
import Navbar from '@/components/Navbar';
import Availability from '@/components/coaching/pages/Availability';
import Checkout from '@/components/coaching/pages/Checkout';
import Thumbnail from '@/components/coaching/pages/Thumbnail';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCurSelectedPageIndex, updateFormData } from '@/redux/slices/thumbnailSlice';
import { colors } from '@/utils/colors';
 
 

export default function Page() { 
  
  const dispatch = useDispatch()
  const pageOptions = ['Thumbnail', 'Availability' ];
  const curSelectedPageIndex = useSelector((store) => store.thumbnail.curSelectedPageIndex);


  const [store_id, setStoreId] = useState('')

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      let response = await fetch('/api/get-store-id/', {
        method: 'POST'
      })
      response = await response.json();

      setStoreId(response)

    }
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [])

  return (
    <div className='flex bg-white w-full h-full'>
             
    <Navbar/>
                 
    <div className='w-full h-full bg-white mt-5 mb-20'>
        <h2 className={`ml-6 mb-2 mt-5 block text-sky-900/65 text-2xl font-semibold`}>
        <span className='text-gray-300'>My store /</span> Add Product</h2>
        
        <hr className='w-full'/>

        <div className='flex flex-col'>
            <div className='flex p-8 space-x-4'>

                {pageOptions.map((option, index) => 
                    <div key={index}>
                    {curSelectedPageIndex === index ? 

                     <div onClick={()=>dispatch(setCurSelectedPageIndex(index))} key={option} className='border-2 border-red-200 text-red-300 rounded-2xl px-4 py-1'>
                        <Link href=''>
                            <h4 className='block text-sm font-semibold'>
                                {option}
                            </h4>
                        </Link>
                    </div>         
                    :
                    <div onClick={()=>dispatch(setCurSelectedPageIndex(index))} key={option} className={`border-2 hover:border-red-200 hover:text-red-300 text-gray-400 rounded-2xl px-4 py-1`}>
                        <Link href=''>
                            <h4 className='block text-sm font-semibold'>
                                {option}
                            </h4>
                        </Link>
                    </div>
                    
                }
                     
                    </div>
                )}

            </div>
            

            
                { curSelectedPageIndex == 0 && <Thumbnail/>}

                { curSelectedPageIndex == 1 && <Availability store_id={store_id}/>}


         
        

        </div>

    </div>

</div>
  )
}