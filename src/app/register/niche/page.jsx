"use client"
import React, { useState } from 'react'
import { TbPlant2 } from "react-icons/tb";
import { IoIosFitness } from "react-icons/io";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { GiGrass } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { MdPeopleOutline } from "react-icons/md";
import { FaBrain } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { colors } from '@/utils/colors';
import { AddNiches } from '@/actions/onboarding/AddNiches';
import Link from 'next/link';

const niches = [
    {
        title: "Wellness",
        icon : TbPlant2 ,
        selected: false
    },
    {
        title: "Fitness",
        icon : IoIosFitness,
        selected: false
    },
    {
        title: 'Sports',
        icon : MdOutlineSportsBasketball,
        selected: false
    },
    {
        title: 'Finance',
        icon : FaMoneyBillAlt,
        selected: false
    },
    {
        title: 'Beauty',
        icon : BsStars,
        selected: false
    },
    {
        title: 'Photography',
        icon : MdOutlinePhotoCamera,
        selected: false
    },
    {
        title: 'Education',
        icon : IoBookSharp,
        selected: false
    },
    {
        title: 'Landscaping',
        icon : GiGrass,
        selected: false
    },
    {
        title: 'Maintenance',
        icon : FaTools,
        selected: false
    },
    {
        title: 'Mechanic',
        icon : FaCar,
        selected: false
    },
    {
        title: 'Events',
        icon : MdPeopleOutline,
        selected: false
    },
    {
        title: 'Mindset',
        icon : FaBrain,
        selected: false
    },
    {
        title: 'Other',
        icon : FaQuestion,
        selected: false
    }, 
  ]

export default function niche() {

    const [selectedNiches, setSelectedNiches] = useState([]);

    console.log(selectedNiches)

    const toggleNiche = (nicheTitle) => {
        setSelectedNiches((prev) =>
          prev.includes(nicheTitle)
            ? prev.filter((n) => n !== nicheTitle)
            : [...prev, nicheTitle]
        )
      }

  return (
        <form action={
            async(formData) => {
                await AddNiches(JSON.stringify(niches.filter((elm)=> elm.selected === true)))
            }
        } className='flex flex-col h-full w-2/5 shadow-lg items-center space-y-10'>
            <h2 className='text-3xl text-center text-gray-700 font-semibold mt-20'>
                Which <span className={`text-[${colors.airbnb_red}]`}>Niche </span>
                {' '} Suits <br/> You The Most?
            </h2>

            <div className='grid grid-cols-3 gap-4 w-3/4'>
                {
                    niches.map((elm,index) => 
                        <div onClick={() => toggleNiche(elm.title)}
                         key={index} className={`flex flex-row hover:opacity-70 space-x-3 ${(selectedNiches.includes(elm.title)) ? `bg-[${colors.airbnb_red}]` : "bg-zinc-100 "} w-32 h-8 justify-center items-center rounded-lg`}>
                            
                            <elm.icon color={ (selectedNiches.includes(elm.title))? colors.white : colors.darkIcon}/>

                            <h3 className={`text-sm font-semibold ${(selectedNiches.includes(elm.title)) ? `text-gray-100` : "text-gray-700"}`}>
                                {elm.title}
                            </h3>

                        </div>
                    )
                }
            </div>

            <div className='flex flex-col items-center w-full h-full space-y-3'>
                <button type='submit' className={`bg-[${colors.airbnb_red}] hover:opacity-60 active:opacity-60 py-2 w-3/4 rounded focus:outline-none focus:shadow-outline`}>
                    <h4 className='text-sm text-gray-50'>Next</h4>
                </button>

                <Link href={'/register/feedback'}>
                    <h4 className='text-sm text-center text-gray-400 hover:opacity-60 active:opacity-60'>Skip this step</h4>
                </Link>
            </div>


        </form>
  )
}
