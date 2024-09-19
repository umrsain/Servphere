import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    ownerEmail : { type: String },
    serviceID : { type: String },
    startTime : { type: String },
    endTime : { type: String },
    date : { type: Date },
    status : { type: String },
    clientEmail : { type: String },
    clientName : { type: String },
    serviceName : { type: String },

},
{
    timestamps: true
})

export const Booking = mongoose.models?.Booking || mongoose.model("Booking",bookingSchema)


