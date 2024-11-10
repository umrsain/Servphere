'use client'
import React, { useEffect, useState } from 'react'

export default function page() {

    const [bookingData, setBookingData] = useState([]);
    const [timeSlots, setTimeSlots] = useState({});
    const [date, setDate] = useState(new Date());



    // GET ALL BOOKING DATA
    const getAllBookingDetails = async () => {
        const res = await fetch("/api/get-booking-details");
        const storeDetails = await res.json();
        return storeDetails;
    }

      // GET BOOKING DATA BASED ON DATE
      const getBookingDetails = async () => {
        const res = await fetch("/api/get-booking-details",
          {
            method: 'POST',
            body: {
              date : JSON.stringify(date)
            }
          }
        );
        const storeDetails = await res.json();
        return storeDetails;
    }
  
  
  // FETCH OPENING AND CLOSING TIMES FOR EACH DAY, BREAKS BEFORE, BREAK AFTER, DURATION
  useEffect(() => {
    getStoreDetails().then((data, index) => {
        setBookingData(data);

    });

  },[]);

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

    getTimeSlots(
      `${elm.opening_hour}:${elm.opening_minute} ${elm.opening_AM_or_PM}`,
      `${elm.closing_hour}:${elm.closing_minute} ${elm.closing_AM_or_PM}`,
      availabilityData?.duration,
      availabilityData?.breakBefore,
      availabilityData?.breakAfter,
  )

  // CALCULATE AVAILABLE TIME SLOTS FOR EACH DAY AND MAP EACH DAY TO ITS CORRESPONDING TIME SLOTS
    availabilityData?.timings?.map((elm,index) =>  
        setTimeSlots({...timeSlots, [elm.day] : 
          getTimeSlots(
            `${elm.opening_hour}:${elm.opening_minute} ${elm.opening_AM_or_PM}`,
            `${elm.closing_hour}:${elm.closing_minute} ${elm.closing_AM_or_PM}`,
            availabilityData?.duration,
            availabilityData?.breakBefore,
            availabilityData?.breakAfter,
          )
        })
    );

  // CANCEL OUT TIME SLOTS WITH EXISTING BOOKING
  // SET TIME SLOTS BASED ON CURRENT SELECTED DAY
  const [selectDatesTimeSlots, setSelectDatesTimeSlots] = useState([])

  // SET TIME SLOT ARRAY BASED ON SELECTED DATE - SUS CODE
  useEffect(() => {

    async function fetchData(){
      
      // FETCH BOOKINGS FOR SELECTED DATE TO CANCEL
      const bookingRecords = await getBookingDetails()
      setSelectDatesTimeSlots(availabilityData[date.toLocaleString('en-us', {weekday:'long'})])
    }
    fetchData();
  },[date]);

  // CONFIRM BOOKING AND PROCEED TO CHECKOUT, CREATE RECORD IN DB AND SEND CONFIRMATION EMAIL TO STORE OWNER AND CLIENT



  return (
    <div>page</div>
  )
}
