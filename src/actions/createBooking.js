'use server'
  
import { auth } from '@/auth';
import { User } from "../../models/userModel";
import { Store } from "../../models/storeModel";
import { connectDB } from "../utils/connect";

export async function createBooking(data) {
    const session = await auth();
    const email = session.user?.email;


    
    // Check if the slot is available based on ServiceID, startime and date
    const existingBooking = await Booking.find({
      services: {
        $elemMatch: {
          serviceID: data.id,
          bookings: {
            $elemMatch: {
              startTime: data.data.start,
              endTime: data.data.start,
              date: data.date
            }
          }
        }
      }
    });
 
    if (existingBooking) console.log("YES IT HIT")

    console.log(existingBooking)

  

    /*

    // PASS ID , DATA WHICH IS DATE AND START TIME , DATE WHICH IS  DATE.TOSTRING()
    await Store.updateOne(
      { 
        "services.id": data.serviceId
      },
      { 
        "$push": { 
          "services.$.bookings": {
            "startTime": data.data.start,
            "endTime": data.data.end,
            "date": data.date
          }
        }
      }
    )

    */
  

 


}
