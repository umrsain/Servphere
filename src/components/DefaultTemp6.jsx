"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { FaInstagramSquare, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'


export const DefaultTemp6 = ({ sdata, themeColor}) => {
    const [activeIndex, setActiveIndex] = useState(0);


    let data = [
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
                        label : 'coaching',
                        thumbnail: {
                            buttonCTA : "Book a Meeting",
                            img: "https://w7.pngwing.com/pngs/44/943/png-transparent-google-calendar-logo-icon.png",
                            subtitle: 'Lets meet up in this 60-minute meeting. Ill teach you everything you need to about becoming an independent creator',
                            title : "1-1 Coaching Session",
                            price: '$50.99',
                            discount : '$76.00'
    
                        },
                        checkout: {
                            price: '$50.99',
                            discount : '$76.00'
                        }
                    },
                     {
                        label: "digital",
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
                    {
                        label: "onlineCourse",
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
                    {
                        label : 'coaching',
                        thumbnail: {
                            buttonCTA : "Book a Meeting",
                            img: "https://w7.pngwing.com/pngs/44/943/png-transparent-google-calendar-logo-icon.png",
                            subtitle: 'Lets meet up in this 60-minute meeting. Ill teach you everything you need to about becoming an independent creator',
                            title : "1-1 Coaching Session",
                            price: '$50.99',
                            discount : '$76.00'
    
                        },
                        checkout: {
                            price: '$50.99',
                            discount : '$76.00'
                        }
                    },
                     {
                        label: "digital",
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
                    {
                        label: "onlineCourse",
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
                    }
                
            ],
            
        },
    
    ]

    const servicesData = sdata[0].services;


  return (
    <div style={{backgroundImage: `linear-gradient(rgba(0,0,0, 0) 20%,rgba(0,0,0, 1) 60%),url('${sdata[0].img}')`}} className="flex bg-cover z-10 flex-col bg-bgOverlay sticky top-20 overflow-y-scroll items-center bg-[#fdfdfd]  border-8 border-gray-800 rounded-[40px] w-[55%] h-[85%]  mt-12">  

        {/* TOP NOTCH UPPER MOBIILE LINE */}
        <div className='flex sticky top-0 bg-gray-800 w-36 min-h-5 rounded-b-xl items-center justify-center space-x-3'>
            <hr className='border-2 rounded-md border-gray-700 w-12'/>
            
            <div className='h-2 w-2 bg-blue-900 rounded-full'>
            </div>
        </div>
        
       

        <div className='flex mt-3 space-x-3 drop-shadow-md'>
           
        </div>

         {/* CARDS LIST CONTAINER */}
         <div className='flex flex-col mt-32 h-full w-full space-y-1 p-3'>

            {servicesData.map((elm, index) => 


            <div onClick={() => setActiveIndex(index)} className='bg-gray-900 rounded-lg shadow-inner'>

                <div className='flex flex-col space-y-2 m-3'>
                
                    <div className='flex w-full h-full space-x-3'>

                        
                        <div className=''>
                        {
                            
                            <Image
                                src={elm.thumbnail.img}
                                height={100}
                                width={100}
                                className='rounded-sm min-h-9 min-w-9 max-w-9 max-h-9'
                                alt="logo"
                            /> 
                        }
                        </div>
                        

                        <div className='flex flex-col space-y-1.5'>
                            <h3 className='text-sm text-gray-300 font-medium'>
                                {elm.thumbnail.title}
                            </h3>

                            { (index === activeIndex ) ? 
                            <h4 className='text-xs text-gray-500'>
                                {elm.thumbnail.subtitle}
                            </h4> : 

                            <h4 className='text-xs line-clamp-2 text-gray-500'>
                                {elm.thumbnail.subtitle}
                            </h4> 
                            }
                    

                            {/* CONDITIONAL RENDER BASED ON DISCOUNT */}
                            {
                                (index === activeIndex) ? (
                                (elm.checkout.discount) ?

                                <div style={{color: themeColor}} className='flex flex-row items-center space-x-1.5'>
                                    <span className='font-semibold'>{elm.checkout.discount}</span>
                                    <span className='text-decoration-line: line-through opacity-50 text-sm font-semibold'>{elm.checkout.price}</span>
                                </div>
                                :
                                <div style={{color: themeColor}} className='flex flex-row items-center space-x-1.5'>
                                    <span className='font-semibold'>{elm.checkout.price}</span>
                                </div> ) : null
                            }

                        </div>
                    </div>

                    { (index === activeIndex) ? 
                    <button style={{backgroundColor: themeColor}} className='py-2 w-full rounded focus:outline-none focus:shadow-outline'>
                        <h4 className='text-sm text-white'>{elm.thumbnail.buttonCTA}</h4>  
                    </button> : null
                    }

                </div>
            </div>

            )} 
        </div>


    </div>
  )
}

