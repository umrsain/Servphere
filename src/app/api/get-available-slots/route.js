import { User } from "../../../../models/userModel";
import { Store } from "../../../../models/storeModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connect";
import { auth } from '@/auth';

export async function POST(req){
    const session = await auth();
    const email = "abdu1@gmail.com";

    const {serviceID} = await req.json();

    try{
        await connectDB();
        
        const data = await Store.find({
            ownerEmail : email,
            services : {
                $elemMatch: {
                    id : serviceID,
                }
            }
        }, {_id:0 , });
        
        const availabilityData = data[0].services[serviceID].availability

        //console.log(`len: ${availabilityData?.timings}`)
        
        const slots = availabilityData?.timings?.map((elm,index) =>
            getTimeSlots(
                `${elm.opening_hour}:${elm.opening_minute} ${elm.opening_AM_or_PM}`,
                `${elm.closing_hour}:${elm.closing_minute} ${elm.closing_AM_or_PM}`,
                availabilityData?.duration,
                availabilityData?.breakBefore,
                availabilityData?.breakAfter,
            )
        )
        
        return NextResponse.json(slots, {status: 200});
    } catch(err){
        return NextResponse.json({error: err.message})
    }
} 

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