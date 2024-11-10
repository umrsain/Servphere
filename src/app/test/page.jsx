import SellerRegistration from "@/components/email/seller/SellerRegistration";
import FinishSetup from "@/components/email/seller/FinishSetup";
import BookingReminder from "@/components/email/buyer/BookingReminder";
import BookingConfirmation from "@/components/email/buyer/BookingConfirmation";

export default function Page(){
  

  return (
    
      <BookingConfirmation 
        time={'Fri, Sep 27th, 12:40PM'}
        clientName={'Andrei Taylor'}
        service={'1:1 Training Session'}
        duration={'1 HR'}
      />
    );
};

