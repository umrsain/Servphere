import { User } from "../../../../models/userModel";
import { Store } from "../../../../models/storeModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connect";
import { auth } from '@/auth';
import { Booking } from "../../../../models/bookingModel";

export async function POST(req){
    const session = await auth();
    const email = session?.user?.email;

    const {sid, date} = await req.json();
    
    //console.log(email)
    
    await connectDB();

    try{
        const bookings = await Booking.find({
            ownerEmail: email,
            sid : sid,
            date : date
        }); 

        return NextResponse.json(bookings);
    
    } catch(err){
        return NextResponse.json({error: err.message})
    }

    
    


} 