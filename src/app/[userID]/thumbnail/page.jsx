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
   
  return (
    <div className='flex h-full w-full'>

        {/* THUMBNAIL PAGE RENDERED DYNAMICALLY*/}

        <div id="thumbnail" className='flex flex-col items-center'>

        {/* PROFILE IMAGE */}
        <div style={{backgroundImage: `url(${sdata[0].img})`}} className="flex bg-cover min-h-24 min-w-24 mt-8 rounded-full">
            
        </div>

        {/* USERNAME */}
        <h1 className='text-gray-600 block font-bold text-xl mt-3'>
            {sdata[0].username}
        </h1>

        {/* EXISTING SOCIALS */}
        <div className='flex mt-2 space-x-3'>
            
        </div>
            
        {/* CARDS LIST CONTAINER */}
        <div className='flex flex-col h-full w-full space-y-1 p-3'>

            {thumbnailData.map((elm, index) => 

            
            <div onClick={() => setActiveIndex(index)} className='bg-white rounded-lg shadow-inner'>

                <div className='flex flex-col space-y-2 m-3'>
                
                    <div className='flex w-full h-full space-x-3'>

                        
                        <div className='min-h-8 min-w-8'>
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
                            <h3 className='text-sm text-gray-500 font-medium'>
                                {elm.thumbnail.title}
                            </h3>

                            { (index === activeIndex ) ? 
                            <h4 className='text-xs text-gray-400'>
                                {elm.thumbnail.subtitle}
                            </h4> : 

                            <h4 className='text-xs line-clamp-2 text-gray-400'>
                                {elm.thumbnail.subtitle}
                            </h4> 
                            }
                    

                            {/* CONDITIONAL RENDER BASED ON DISCOUNT */}
                            {
                                (index === activeIndex) ? (
                                (elm.thumbnail.discount) ?

                                <div style={{color: themeColor}} className='flex flex-row items-center space-x-1.5'>
                                    <span className='font-semibold'>{elm.thumbnail.discount}</span>
                                    <span className='text-decoration-line: line-through opacity-50 text-sm font-semibold'>{elm.thumbnail.price}</span>
                                </div>
                                :
                                <div style={{color: themeColor}} className='flex flex-row items-center space-x-1.5'>
                                    <span className='font-semibold'>{elm.thumbnail.price}</span>
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

    </div>
  )
}
