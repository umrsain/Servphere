'use client'
import { Calendar } from '@/components/ui/calendar';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { createBooking } from '@/actions/createBooking';
import useSWR from 'swr'

const fetcher = (url) => fetch(url, {
    method: "POST",
    body: JSON.stringify({
        sid: "2",
        date : "Tue Sep 03 2024 00:00:00 GMT+0400 (Gulf Standard Time"
    })
}).then(res => res.json())
  
export default function page() {

    // GET PARAMETERS FROM CURRENT URL 
    const params = useParams();

    // INDEX OF SERVICE STORED IN SERVICES ARRAY
    const serviceIndex = params.serviceIndex

    //console.log(params);

    // STATE VARIABLE TO STORE AVAILABILITY DATA
    const [timeSlots, setTimeSlots] = useState([]);
    const [themeColor, setThemeColor] = useState('#000000');

    // INDEX OF CURRENTLY SELECTED TIME SLOT

    const [index, setIndex] = useState(-1);

    const [date, setDate] = useState(new Date());

    // VARIABLE TO STORE 

    const { data, error, isLoading } = useSWR(
        ['/api/getAllBookings'],
        fetcher,
        { 
            refreshInterval: 6000
        })

    if (!isLoading) 
    console.log(data)


    // SET STATE VARIALBLE CHECKOUT DATA ON MOUNT AND THEME COLOR
    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            let res = await fetch("/api/get-available-slots",
            {   
                method: 'POST',
                body: JSON.stringify({
                    serviceID: 2
                }),
                cache : "no-store"
            });

           res = await res.json()
            setTimeSlots(res)

        }
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);
      }, [])

      //console.log(timeSlots)
    //console.log(timeSlots[date.toLocaleString('en-us', {weekday:'long'})])
    /*
    // SET TIME SLOT ARRAY BASED ON SELECTED DATE - SUS CODE
    useEffect(() => {

        {   (JSON.stringify(availabilityData) === '{}') ?  setSelectDatesTimeSlots([]): 

        setSelectDatesTimeSlots(availabilityData[date.toLocaleString('en-us', {weekday:'long'})])

        }
    },[date]);
    
    console.log(timeSlots)
      */

    //console.log(timeSlots[date.toLocaleString('en-us', {weekday:'long'})])
   
  return (
    <div className='flex h-full w-full'>

    {/* CHECK WHETHER API FETCHED OR NOT */}
    {   (timeSlots.length <= 0) ? null : 
            <div>

                <form action= { async () => {
                                if (index >=0)
                                    await createBooking({
                                        serviceId: 2,
                                        date : date.toString(),
                                        data :timeSlots[date.getDay()][index]
                                    })
                            }}>

                    <div className='flex flex-col h-full w-full justify-center items-center'>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                        />  

                        <div className='flex flex-col space-y-3 mt-6'>
                            <h2 className='text-md font-semibold text-gray-600'>
                                Select time Slots
                            </h2>

                            <div className='grid grid-cols-2 gap-3'>

                            {   (timeSlots.length <= 0) ? null : 
                                <>
                                {timeSlots[date.getDay()]?.map((elm, index_) =>

                                    <>
                                   

                                         <div 
                                        onClick={()=> setIndex(index_)}
                                        className={`flex items-center text-center justify-center rounded-md hover:opacity-60 ${(index >= 0 &&  index===index_) ?"bg-sky-400/75" : "bg-gray-200/75" } bg-gray-200/75 h-10 w-28 text-[9px] text-gray-500`}>
                                            {`${elm.start}-${elm.end}`}
                                        </div>
                                    
                                    </>
                                    
                                )}
                                </>

                            }
                            </div>
   
                                <button type='submit' className='bg-teal-500/75 hover:bg-teal-300/75 py-2 w-full rounded focus:outline-none focus:shadow-outline mt-6 mb-10'>
                                        <h4 className='text-sm text-white'>Book Appointment</h4>            
                                </button>
                         
                            <div className='pb-16'>

                            </div>
                        </div>
                    </div> 
                </form>
            </div>
    }

</div>
  )
}
