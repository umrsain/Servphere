"use client"
import React, { useState } from 'react'
import SelectNiches from './surveyComponents/SelectNiches'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";

  import { toast } from 'sonner';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { AddFeedback } from '@/actions/onboarding/AddFeedback'

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

  const options = [
    "Instagram or Facebook",
    "Email or newsletter",
    "Search engine",
    "Word of mouth",
    "TikTok",
    "Other"
  ]

export default function WizardSurvey() {

    // SELECTED NICHES
    const [selectedNiches, setSelectedNiches] = useState([]);

    // HANDLE CLOSING DIALOG
    const [openDialog, setOpenDialog] = useState(false)

    // HANLDE GOING TO NEXT STEP
    const [ goNextPage, setGoNextPage ] = useState(false);

    const toggleNiche = (nicheTitle) => {
        setSelectedNiches((prev) =>
          prev.includes(nicheTitle)
            ? prev.filter((n) => n !== nicheTitle)
            : [...prev, nicheTitle]
        )
      }

      const handleClose = async () => {
        setOpenDialog(false)
    
      }

      const handleGoNextPage = () => {
        setGoNextPage(true)
      }

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>

    <DialogTrigger asChild>
    
      <button className={`bg-[${colors.airbnb_red}] hover:opacity-60 active:opacity-60 py-2 w-2/5 rounded focus:outline-none focus:shadow-outline`}>
        <h4 className='block text-sm font-bold text-white'>
            + Fill Survey
        </h4>
      </button>
    </DialogTrigger>

    <DialogContent className="sm:max-w-[425px]">

        {
            ( !goNextPage ) ? 
            <form action={
                async(formData) => {
                    const toastID = toast.loading("Adding niches");

                    try {
                        await AddNiches(JSON.stringify(selectedNiches))
                        toast.success("Changes Successful", {
                            id: toastID
                           });
                        handleGoNextPage()

                    } catch(error){
                        toast.error(String(error), {
                          id: toastID
                      })
              
                      }
                }
            } className='flex flex-col h-full items-center justify-center space-y-10'>
                <h2 className='text-3xl text-center text-gray-700 font-semibold mt-20'>
                    Which <span className={`text-[${colors.airbnb_red}]`}>Niche </span>
                    {' '} Suits <br/> You The Most?
                </h2>
    
                <div className='grid grid-cols-3 gap-3'>
                    {
                        niches.map((elm,index) => 
                            <div onClick={() => toggleNiche(elm.title)}
                             key={index} className={`flex flex-row hover:opacity-70 space-x-3 ${(selectedNiches.includes(elm.title)) ? `bg-[${colors.airbnb_red}]` : "bg-zinc-100 "} w-28 h-8 justify-center items-center rounded-lg`}>
                                
                                <elm.icon color={ (selectedNiches.includes(elm.title))? colors.white : colors.darkIcon}/>
    
                                <h3 className={`text-xs font-semibold ${(selectedNiches.includes(elm.title)) ? `text-gray-100` : "text-gray-700"}`}>
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
    
    
                    <h4 onClick={handleGoNextPage} className='text-sm text-center text-gray-400 hover:opacity-60 active:opacity-60'>
                        Skip this step
                    </h4>
                 
                </div>
    
    
            </form>
                 
                 : 

                 <form action={ async(formData) => {
                    const toastID = toast.loading("Adding Info");

                    try{
                        await AddFeedback(formData)
                        toast.success("Changes Successful", {
                            id: toastID
                           });

                        handleClose()

                    } catch(error){
                        toast.error(String(error), {
                          id: toastID
                      })
              
                      }
                }} className='flex flex-col h-full px-8 justify-center space-y-4'>
                    <h1 className='text-2xl text-gray-600 font-semibold'>
                        Where did you hear about us?
                    </h1>
        
                    <RadioGroup name="selectedVal" defaultValue="option-one">
        
                        {
                            options.map((elm, index) =>
                            <div key={index} className="flex text-sm text-gray-500 items-center space-x-2">
                                <RadioGroupItem value={elm} id={`option-${index}`} />
                                <label >{elm}</label>
                            </div>
                            )
                        }
         
        
                    </RadioGroup>
        
                    <textarea name="comment" placeholder='Leave a comment' className='w-full p-3 border border-gray-200 rounded-lg text-xs text-gray-400 bg-gray-100/25 focus:outline-none '>
        
                    </textarea>
        
                    <button type='submit' className={`bg-[${colors.airbnb_red}] hover:opacity-60 active:opacity-60 py-2 w-full rounded focus:outline-none focus:shadow-outline`}>
                        <h4 className='text-sm text-gray-50'>Next</h4>
                    </button>
        
                    <h4 onClick={handleClose} className='text-sm text-center text-gray-400 hover:opacity-60 active:opacity-60'>
                        Skip this step
                    </h4>
        
                </form>
        }

    </DialogContent>
  </Dialog>
  )
}
