import { User } from "../../../../models/userModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connect";
import { auth } from '@/auth';
import { Booking } from "../../../../models/bookingModel";

export async function POST(req){

    const { email, serviceID, startTime, endTime, date} = await req.json();

    try {

        await connectDB();

        const existingBooking = await Booking.find({
            ownerEmail : email,
            serviceID: serviceID,
            startTime: startTime,
            endTime: endTime,
            date: date
        });

        console.log(existingBooking)
        if (existingBooking.length > 0) 
            return new NextResponse("Sorry, this slot has already been booked", {status : 500});
       
         

        // PASS ID , DATA WHICH IS DATE AND START TIME , DATE WHICH IS  DATE.TOSTRING()
        await Booking.create({
            ownerEmail: email,
            serviceID: serviceID,
            startTime: startTime,
            endTime: endTime,
            date : date,
            clientEmail : clientEmail,
            clientName: clientName,
            serviceName: serviceName,
            status: "pending"
        })
        
    
        return new NextResponse("Success", {status : 200});


    } catch(error){
        return new NextResponse("Unexpected error occurred", {status : 500});
    }

}