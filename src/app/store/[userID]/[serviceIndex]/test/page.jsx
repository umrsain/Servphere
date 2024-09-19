"use client"
import React, { useState } from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function page() {
     // GET LOGGED IN USERS EMAIL

     const [arr, setArr] = useState([])
     const { data, error, isLoading } = useSWR('/api/storedetails', fetcher,{ refreshInterval: 6000 })
     
     //if (!isLoading) console.log(data[0]?.services[2]?.bookings)

     //{data[0]?.services[2]?.bookings[data[0]?.services[2]?.bookings.length-1].start}
      if (isLoading) return <div>loading...</div>
        
  return (
    <div className='w-full h-full'>
       
          <p className='text-black'>
            {data[0]?.services[2]?.bookings[data[0]?.services[2]?.bookings.length-1].startTime}
          </p>  
         

        <p className='text-black'> hello</p>
    </div>
  )
}
