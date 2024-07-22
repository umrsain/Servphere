'use client'
import React, {useState} from 'react'
import { Calendar } from '../ui/calendar'

export default function AvailabilityDetailsPage() {
  const timeSlots = [
    "10:00 AM - 10:30 AM",
    "10:45 AM - 11:15 AM",
    "11:30 AM - 12:00 PM",
    "12:15 PM - 12:45 PM"
  ];

  const [date, setDate] = useState(new Date());
  const [slotIndex, setSlotIndex] = useState(0);

  return (
    <form>
        <div className='flex flex-col h-full w-full justify-center items-center'>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />  

            <div className='flex flex-col space-y-3 mt-3'>
                <h2 className='text-md font-semibold text-gray-600'>
                    Time Slots
                </h2>

                <div className='grid grid-cols-2 gap-3'>
                    {timeSlots.map((elm, index) =>
                        <div onClick={()=> setSlotIndex(index)} className='flex items-center text-center justify-center rounded-xl bg-sky-400/75 hover:bg-sky-300 h-6 w-28 text-[9px] text-gray-50 '>
                            {elm}
                        </div>
                    )}
                </div>

                <input type='hidden' name="timeslot" value={timeSlots[slotIndex]}/>
                <input type='hidden' name="date" value={date}/>


                <button type='submit' className='bg-teal-500/75 hover:bg-teal-300/75 py-2 w-full rounded focus:outline-none focus:shadow-outline mt-6 mb-10'>
                        <h4 className='text-sm text-white'>Book Appointment</h4>            
                </button>

            </div>
        </div> 
    </form>
    )
}
