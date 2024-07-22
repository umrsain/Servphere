'use client'
import Image from 'next/image'
import React, { useState } from 'react'
 
export default function page() {

    const [activeIndex, setActiveIndex] = useState(0);

    const themeColor = "#000000"


    let sdata = [
        {
            themeColor: '#7C4545',
            username: "Sandra jones",
            socialLinks: {
                twitter: 'https://x.com/AbdulIkram12228',
                insta: "https://www.instagram.com/Aero.Artz/"
            },
            img: "https://utfs.io/f/cab4b932-d36f-40ad-bfd8-35f5e6f35227-1j1p0.png",
            bio: "Change the world",
            services: [
                {
                    coaching: {
                        thumbnail: {
                            buttonCTA : "Book a Meeting",
                            img: "https://w7.pngwing.com/pngs/44/943/png-transparent-google-calendar-logo-icon.png",
                            subtitle: 'Lets meet up in this 60-minute meeting. Ill teach you everything you need to about becoming an independent creator',
                            title : "1-1 Coaching Session",
                            price: '$50.99',
                            priceBeforeDiscount : '$76.00'
    
                        },
                        checkout: {
                            price: '$50.99',
                            discount : '$76.00'
                        }
                    },
                    digital: {
                        thumbnail: {
                            buttonCTA : "Download eBook",
                            img : 'https://t3.ftcdn.net/jpg/01/19/20/18/360_F_119201863_LVSuM2SBBLVID6Oj5Mpdb9U8D5yUDFOO.jpg',
                            subtitle: 'Get Access to exclusive information',
                            title : "Buy my new eBook",
                            price: '$20.99',
                            priceBeforeDiscount : '$86.00'
                        },
                        checkout: {
                            price: '$50.99',
                            discount : '$76.00'
                        }
                    },
                    onlineCourse: {
                        thumbnail: {
                            buttonCTA : "Buy Course",
                            img : 'https://img.favpng.com/23/7/4/computer-icons-educational-technology-learning-training-course-png-favpng-j5t2UTpdMx23LZhscuTVqAJGb.jpg',
                            subtitle: 'Go from zero to hero in just 6 weeks',
                            title : "Online Course for Beginners",
                            price: '$10.99',
                            priceBeforeDiscount : '$36.00'
                        },
                        checkout: {
                            price: '$50.99',
                            discount : '$76.00'
                        }
                    },
                }
            ],
            
        },
    
    ]

    let thumbnailData = [
        {
            label: 'coaching',
            thumbnail : {
                buttonCTA : "Book a Meeting",
                img: "https://w7.pngwing.com/pngs/44/943/png-transparent-google-calendar-logo-icon.png",
                subtitle: 'Lets meet up in this 60-minute meeting. Ill teach you everything you need to about becoming an independent creator',
                title : "1-1 Coaching Session",
                price: '$50.99',
                discount : '$76.00'
            },
       },
       {
            label: 'coaching',
            thumbnail : {
                buttonCTA : "Book a Meeting",
                img: "https://w7.pngwing.com/pngs/44/943/png-transparent-google-calendar-logo-icon.png",
                subtitle: 'Lets meet up in this 60-minute meeting. Ill teach you everything you need to about becoming an independent creator',
                title : "1-1 Coaching Session",
                price: '$50.99',
                discount : '$76.00'
            },
            
        },
        {
            label: 'coaching',
            thumbnail : {
                buttonCTA : "Book a Meeting",
                img: "https://w7.pngwing.com/pngs/44/943/png-transparent-google-calendar-logo-icon.png",
                subtitle: 'Lets meet up in this 60-minute meeting. Ill teach you everything you need to about becoming an independent creator',
                title : "1-1 Coaching Session",
                price: '$50.99',
                discount : '$76.00'
            },
            
        },

   ]

   let checkoutData = 
    {

    img: "https://utfs.io/f/0cdb8cea-f301-4eae-a1e9-401dd97c2ff1-2bjn.jpg.webp",
    title:
    "Exclusive Coaching",
    body:
    "Learn how to escape the matrix in the modern day by joining the top Gs In the real world today with andrew tate and tristan tate",
    buttonCTA:
    "Join now",
    price:
    76.99,
    discount:
    49.99
    }
   
   
  return (
    <div>
        <div className='flex flex-col items-center w-full h-full mt-3'>
            <div className='bg-gray-600 min-h-28 min-w-48 rounded-lg'>
                
            
                    <Image
                        src={checkoutData.img}
                        width={100}
                        height={100}
                        className='rounded-lg min-h-28 min-w-48'
                        alt='bg'
                    /> 
            
            </div>

            <div className='flex flex-col h-full w-full p-3'>

                <h2 className='text-lg text-gray-600 font-semibold'>
                    {checkoutData.title}
                </h2>

                <span className='text-sky-400 font-semibold'>${checkoutData.price}</span>

                <h4 className='text-sm mt-3 text-gray-500'> 
                    {checkoutData.body}
                </h4> 

                <button style={{backgroundColor: themeColor}} type='submit' className='mt-6 w-full py-2 rounded-md focus:outline-none focus:shadow-outline'>
                                
                    <h4 className='block text-white text-sm font-bold'>
                        {checkoutData.buttonCTA}
                    </h4>
                
                </button>

            </div>
        </div>

    </div>
  )
}
