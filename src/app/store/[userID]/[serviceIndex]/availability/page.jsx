'use client'
import { Calendar } from '@/components/ui/calendar';
import Image from 'next/image'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
  
export default function page() {

    // GET PARAMETERS FROM CURRENT URL 
    const params = useParams();

    // INDEX OF SERVICE STORED IN SERVICES ARRAY
    const serviceIndex = params.serviceIndex

    console.log(params);

    // STATE VARIABLE TO STORE AVAILABILITY DATA
    const [data, setData] = useState([]);
    const [themeColor, setThemeColor] = useState('#000000');

    const [date, setDate] = useState(new Date());

    // STATE VARIABLE TO STORE AVAILABILE TIME SLOTS

    // FUNCTION TO GET AVAILABLE TIME SLOTS
    function getTimeSlots(openingTime, closingTime, meetingDuration, breakBefore, breakAfter) {
        const parseTime = (time) => {
          const [timePart, period] = time.split(' ');
          let [hours, minutes] = timePart.split(':').map(Number);
          if (period === 'PM' && hours !== 12) hours += 12;
          if (period === 'AM' && hours === 12) hours = 0;
          return { hours, minutes };
        };
      
        const formatTime = ({ hours, minutes }) => {
          const period = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12 || 12;
          return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${period}`;
        };
      
        const addMinutes = (time, minutesToAdd) => {
          let { hours, minutes } = time;
          minutes += minutesToAdd;
          while (minutes >= 60) {
            minutes -= 60;
            hours += 1;
          }
          return { hours, minutes };
        };
      
        const opening = parseTime(openingTime);
        const closing = parseTime(closingTime);
        const slots = [];
      
        let currentTime = opening;
      
        while (true) {
          const startSlot = addMinutes(currentTime, breakBefore);
          const endSlot = addMinutes(startSlot, meetingDuration);
          const nextStartTime = addMinutes(endSlot, breakAfter);
      
          if (endSlot.hours > closing.hours || (endSlot.hours === closing.hours && endSlot.minutes > closing.minutes)) {
            break;
          }
      
          slots.push({ start: formatTime(startSlot), end: formatTime(endSlot) });
          currentTime = nextStartTime;
        }
      
        return slots;
    }

    const getStoreDetails = async () => {
        const res = await fetch("/api/storedetails");
        const storeDetails = await res.json();
        return storeDetails;
    }

    // SET STATE VARIALBLE CHECKOUT DATA ON MOUNT AND THEME COLOR
    useEffect(() => {
        getStoreDetails().then((data, index) => {
            setData(data);

            setThemeColor(data[0].themeColor)

        })
    },[]);

    // SET AVAILABILITY DATA VARIABLE
    const availabilityData = data[0]?.services[2].availability;

    // STORE CALCULATED TIME SLOTS FOR EACH DAY
    let timeSlots = {}

    // CALCULATE TIME SLOTS FOR EACH DAY
    availabilityData?.timings?.map((elm,index) =>
        timeSlots[elm.day] =
        getTimeSlots(
            `${elm.opening_hour}:${elm.opening_minute} ${elm.opening_AM_or_PM}`,
            `${elm.closing_hour}:${elm.closing_minute} ${elm.closing_AM_or_PM}`,
            availabilityData?.duration,
            availabilityData?.breakBefore,
            availabilityData?.breakAfter,
        )
    

    )

    const [selectDatesTimeSlots, setSelectDatesTimeSlots] = useState([])
         
    /*
    // SET TIME SLOT ARRAY BASED ON SELECTED DATE - SUS CODE
    useEffect(() => {

        {   (JSON.stringify(availabilityData) === '{}') ?  setSelectDatesTimeSlots([]): 

        setSelectDatesTimeSlots(availabilityData[date.toLocaleString('en-us', {weekday:'long'})])

        }
    },[date]);
    */

    console.log(timeSlots)
   
    console.log(timeSlots[date.toLocaleString('en-us', {weekday:'long'})])

    
    
    
            

  return (
    <div>

        {/* CHECK WHETHER API FETCHED OR NOT */}
        {   (JSON.stringify(availabilityData) === '{}') ? null : 
                <div>

                    <form>
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

                                {   (JSON.stringify(timeSlots) === '{}') ? null : 
                                    <>
                                    {timeSlots[date.toLocaleString('en-us', {weekday:'long'})].map((elm, index) =>
                                        <div className='flex items-center text-center justify-center rounded-md hover:opacity-60 bg-gray-200/75 h-10 w-28 text-[9px] text-gray-500 '>
                                            {`${elm.start}-${elm.end}`}
                                        </div>
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
