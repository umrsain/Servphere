import Link from 'next/link';
import React from 'react'
import img from '../components/servphere-logov2.png';
import Image from 'next/image';
import { auth } from '@/auth';
import { colors } from '@/utils/colors';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import LoginPopover from '@/components/login/LoginPopover';
import SignupPopover from '@/components/register/SignupPopover';
import { redirect } from 'next/navigation';
  

export default async function Home() {

  //console.log(res.oceanProducts[0].transportSchedules);

  const session = await auth();
  if (session?.user) redirect('/onboarding');

  //console.log(session)
  
  const heroCardsInfo = [
    {
        title: "Elevate Your Business Fast",
        desc : "Create a stunning online storefront in minutes. Showcase your services, manage bookings, and boost sales—all from one sleek platform."
    },
    {
        title: "Unlock Your Growth Potential",
        desc: "Stop losing clients to slow, outdated processes. With Srvfia, your services are just a click away for customers."
    },
    {
        title: "Smart, Simple, Scalable",
        desc: "Your services, front and center. Without any back-and-forth. Start today and transform how you do business."
    }
  ]
 
  const faqs = [
    {
        question : "Is my business right for Srvfia?",
        answer : "Yes it is"
    },
    {
        question : "Do i have to be available all the time?",
        answer : "No u dont"
    },
    {
        question : "Any tips on being a top provider?",
        answer : "Become the TOP G"
    },
    {
        question : "What is Srvfia’s pricing?",
        answer : "Its affordable"
    }
  ]
  
  return (
    <div className='flex flex-col w-full h-full bg-zinc-100/30 pt-10 px-32 pb-12'>

        <div className='flex'>

            <div className='flex items-center justify-items-center'>
            
              

                <h3 className={`block text-[${colors.airbnb_red}] text-md font-semibold`}>Servphere</h3>
            </div>

            <div className='flex justify-end space-x-3 w-full'>

                
                <LoginPopover/>
                

                <SignupPopover/>

            </div>

        </div>

        <div className='flex w-full h-full space-x-16'>
            <div className='w-3/4 h-full space-y-12 mt-16'>
                <h1 className='block text-gray-600 text-8xl font-bold'>
                Meet Your <span className=''> All-In-One </span>Store Builder
                </h1>

                <p className='text-gray-400 text-md font-regular'>
                Thousands of people like you use Servphere to bring their entire business into a single platform. Expand your business with our online portal. List your services, streamline bookings, and reach new clients efficiently.                </p>

                <div>
                    <Link href={"/login"}>
                        <button className={`bg-[#f57575] hover:opacity-70 py-2 px-12 rounded-md focus:outline-none focus:shadow-outline`}>
                            <p className='text-gray-50 text-md font-semibold'>
                                Get Started
                            </p>
                        </button>
                    </Link>
                </div>

            </div>


            <div className='flex mt-10 items-start justify-center'>
                

            <div className="flex flex-col shadow-md items-center justify-center border-l-8 border-gray-300 bg-[#292929] rounded-[40px] w-[18rem] h-[35rem] mt-6">
                

                <div className="flex flex-col items-center bg-[#fefefe] rounded-[40px] w-[95%] h-[97%]">
        
                    {/* TOP NOTCH UPPER MOBIILE LINE */}
                    <div className='flex sticky top-0 bg-gray-800 w-36 min-h-5 rounded-b-xl items-center justify-center space-x-3'>
                        <hr className='border-2 rounded-md border-gray-700 w-12'/>
                        
                        <div className='h-2 w-2 bg-blue-900 rounded-full'>
                        </div>
                    </div>
                    
                </div>
            </div>



            </div>

        </div>

        <div className='flex space-x-4 w-full justify-center mt-24'>
            {heroCardsInfo.map((elm,index) => 
                <div key={index} className='w-1/3 space-y-4 shadow-xl p-4 rounded-xl'>
                    <h2 className='text-md font-medium text-gray-600'>{elm.title}</h2>
                    <p className='text-sm text-gray-500/75'>{elm.desc}</p>
                </div>
            )}
        </div>

        <div className='flex w-full h-full space-x-16 mt-24'>

            <div className='w-1/2 space-y-4'>
                <h2 className='text-md font-semibold text-gray-600'>
                    You could have a beautiful, portal in the next 10 minutes.
                </h2>

                <p className='text-sm text-gray-500/75'>
                    Your portal is free, easy, and beautfiul. Servphere handles the tech out of the box, so you can set up your portal and get back to work.
                </p>

                <div className=''>
                    <div className='flex justify-between'>
                        <p className='text-xs font-semibold text-gray-700'>
                            Sell straight from your portal.
                        </p>
                        <p>
                            +
                        </p>
                    </div>

                    <div className='flex justify-between'>
                        <p className='text-xs font-semibold text-gray-700'>
                            Monetise your audience further.
                        </p>
                        <p>
                            +
                        </p>
                    </div>

                    <div className='flex justify-between'>
                        <p className='text-xs font-semibold text-gray-700'>
                            No code or designing skills needed.
                        </p>
                        <p>
                            +
                        </p>
                    </div>
                </div>

                <Link href={""}>
                    <button className={`bg-[#f57575] hover:opacity-70 py-2 px-12 mt-6 rounded-md focus:outline-none focus:shadow-outline`}>
                        <p className='text-gray-50 text-md font-semibold'>
                            Start for Free
                        </p>
                    </button>
                </Link>

            </div>

            <div className='bg-rose-200 rounded-2xl w-1/2'>

            </div>
        </div>

        <div className='flex w-full h-full space-x-16 mt-24'>

            <div className='w-1/2 space-y-4 mt-5'> 

                <h2 className='text-3xl font-semibold text-gray-600'>
                    Your Questions, <br></br> answered
                </h2>   
            </div>

            <div className='w-1/2 space-y-4'>

                <Accordion type="single" collapsible>
                    {
                        faqs.map((elm,index) =>

                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>{elm.question}</AccordionTrigger>
                            <AccordionContent>
                                {elm.answer}
                            </AccordionContent>
                        </AccordionItem>
                        )
                    }
                </Accordion>   

            </div>

        </div>

        
    </div>
  );
}
