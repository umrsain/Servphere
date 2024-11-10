import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";
import Link from 'next/link'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"




export default function payment() {

    // BENEFITS / FEATURES OF THE APP
    const benefits = [
        "Appointment Booking & scheduling",
        "Digital Products & Services",
        "Membership Subscriptions",
        "1-Click Easy Checkout"
    ]

  return (
    <div className='flex items-center justify-center h-full w-full'>

        <div className='flex flex-col h-full w-1/3 space-y-4 mt-20'>

            {/* MAIN TITLE / HOOK */}
            <h2 className='text-2xl font-bold text-sky-900/65'>
                Save upto $100s with Servphere as your All-In-One Store
            </h2>

            {/* HORIZONTAL LINE */}
            <hr className='w-full'/>

            {/* CONTAINER FOR BENEFITS */}
            <div className='flex flex-col'>
                {
                    // CARD FOR BENEFITS
                    benefits.map((elm) =>
                        <div key={elm} className='flex flex-row space-x-3 mt-2'>

                            <div className='max-h-9 max-w-9'>
                                <IoIosCheckmarkCircle className='h-full w-full' color='teal'/>
                            </div>

                            <h5 className='text-xs text-gray-400'>
                                {elm}
                            </h5>
                        </div>
                    )
                }
            </div>



            <RadioGroup defaultValue="comfortable">
                <div className='flex flex-col space-y-4'>
                    {/* CONTAINER ANNUAL PAYMENT OPTION */}
                    <div className='border-2 border-violet-900 rounded-lg h-24 w-full'>
                        <div className='flex justify-between items-center h-full w-full p-5'>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Annual" id="Annual" />
                                <label className='text-md text-gray-700' htmlFor="Annual">Annual</label>
                            </div>
                                
                            <h4>
                                $300/yr
                            </h4>
                        </div>
                    </div>

                    {/* CONTAINER MONTHLY PAYMENT OPTION */}
                    <div className='border-2 border-violet-900 rounded-lg h-24 w-full'>
                        <div className='flex justify-between items-center h-full w-full p-5'>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Monthly" id="Monthly" />
                                <label className='text-md text-gray-700' htmlFor="Monthly">Monthly</label>
                            </div>

                            <h4>
                                $29/mo
                            </h4>
                        </div>
                    </div>
                </div>
            </RadioGroup>

            {/* CONTAINER PAYMENT */}
            <div></div>

            {/* TERMS AND CONDITIONS AGREEMENT */}
            <h3 className='text-gray-600 text-xs'>I acknowledge that I have read and understand the {" "}
                <Link className='' href="">Privacy Policy</Link> {" "}
                and {" "}
                <Link className='' href="">Terms of Service</Link>
            </h3>

            {/* BUTTON TO START TRIAL */}
            <div className="flex items-center justify-between">
                    <button className="w-full hover:bg-sky-300 bg-[#6b76d8] text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Start Your 14 Days Free Trial
                    </button>
                </div>

        </div>
    </div>
  )
}
