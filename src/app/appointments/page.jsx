import React from 'react'
import { auth } from '@/auth';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User } from "lucide-react"
import { db } from '@/db';
import { bookings } from '@/db/schema/bookings';
import { and, gt, lt, or, sql } from 'drizzle-orm';
import { services } from '@/db/schema/services';

export default async function Page() {

    // GET LOGGED IN USERS EMAIL
    const session = await auth();
    const email = session?.user?.email;

    // GET CURRENT TIME DETAILS

    const currentDateTime = new Date();
    const currentDateString = currentDateTime.toDateString();
    const currentTimeString = currentDateTime.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
 /*
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

        */
        

        let filteredAppointments = await db.execute(sql`SELECT
        service.thumbnail, booking.date_of_booking, booking."startTime",booking."endTime", client.name, client.email
        FROM client
        JOIN booking
          ON client.id = booking.client_id
          JOIN service
            ON service.id = booking.service_id
            
            WHERE booking.date_of_booking > now() OR (booking.date_of_booking = now() AND booking."startTime" > ${currentTimeString})`)
        
        filteredAppointments = filteredAppointments.rows;

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
                          <h3 className="font-semibold">{appointment?.thumbnail?.title}</h3>
                          <p className="text-sm text-gray-500">{appointment?.date_of_booking}</p>
                          <div className="flex items-center mt-2">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="text-sm">
                              {appointment?.startTime} - {appointment?.endTime}
                            </span>
                          </div>
                          <div className="flex items-center mt-1">
                            <User className="w-4 h-4 mr-1" />
                            <span className="text-sm">{appointment?.name}</span>
                          </div>
                        </div>
                        <Badge variant="secondary">{appointment?.email}</Badge>
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
