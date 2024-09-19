import React from 'react'
import { Booking } from '../../../models/bookingModel';
import { auth } from '@/auth';
import { connectDB } from '@/utils/connect';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Clock, User } from "lucide-react"

export default async function page() {

    // GET LOGGED IN USERS EMAIL
    const session = await auth();
    const email = session.user?.email;

    // GET CURRENT TIME DETAILS

    const currentDateTime = new Date();
    const currentDateString = currentDateTime.toDateString();
    const currentTimeString = currentDateTime.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    // CREATE DB CONNECTION AND FETCH USER DATA
    await connectDB();

    // QUERY TO GET ALL UPCOMING BOOKINGS

        let filteredAppointments = await Booking.find({
            ownerEmail: email,
            status : "complete",
            // start date > today
            $or: [
                { date: { $gt: currentDateTime } },
                {
                  date: { $gte: today, $lt: tomorrow },
                  startTime: { $gt: currentTimeString }
                }
              ]
        });   

        console.log(filteredAppointments)
        
         
   
    return (
    <div className='flex h-screen bg-white'>
        <Navbar/>

    <Card className="w-1/2">
          <CardHeader>
            <h2 className='ml-3 mt-5 mb-2 block text-sky-900/65 text-3xl font-semibold'>
                Appointments
            </h2>
            
          </CardHeader>
          <CardContent>
            {filteredAppointments.length === 0 ? (
              <p className="text-center text-gray-500">No appointments found.</p>
            ) : (
              <ul className="space-y-4">
                {filteredAppointments.map((appointment) => (
                  <li key={appointment.id}>
                    <Card>
                      <CardContent className="flex items-center justify-between p-4">
                        <div>
                          <h3 className="font-semibold">{appointment.serviceName}</h3>
                          <p className="text-sm text-gray-500">{appointment.date.toISOString().split('T')[0]}</p>
                          <div className="flex items-center mt-2">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="text-sm">
                              {appointment.startTime} - {appointment.endTime}
                            </span>
                          </div>
                          <div className="flex items-center mt-1">
                            <User className="w-4 h-4 mr-1" />
                            <span className="text-sm">{appointment.clientName}</span>
                          </div>
                        </div>
                        <Badge variant="secondary">{appointment.clientEmail}</Badge>
                      </CardContent>
                    </Card>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
    </div>
    )
}
