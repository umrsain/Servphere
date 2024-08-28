"use client"
import { colors } from '@/utils/colors'
import Link from 'next/link'
import React from 'react'

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export default function page() {
  const options = [
    "Instagram or Facebook",
    "Email or newsletter",
    "Search engine",
    "Word of mouth",
    "TikTok",
    "Other"
  ]
  return (
    <div className='flex h-full w-full items-center justify-center'>

        {/* CARD FOR HOW DID YOU HEAR ABOUT US SECTION */}
        <div className='flex flex-col w-1/4 justify-center space-y-4 mt-20 px-14 border-2 border-gray-200 rounded-xl'>
            <h1 className='text-2xl text-gray-600 text-center font-semibold'>
                Where did you hear about us?
            </h1>

            <RadioGroup defaultValue="option-one">

                {
                    options.map((elm, index) =>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value={elm} id={`option-${index}`} />
                        <label >{elm}</label>
                    </div>
                    )
                }
 

            </RadioGroup>

            <textarea placeholder='Leave a comment' autoFocus className='w-full text-xs text-gray-400 bg-gray-100/25'>

            </textarea>

            <button type='submit' className={`bg-[${colors.airbnb_red}] hover:opacity-60 active:opacity-60 py-2 w-full rounded focus:outline-none focus:shadow-outline`}>
                <h4 className='text-sm text-gray-50'>Next</h4>
            </button>

            <h4 className='text-sm text-center text-gray-400 hover:opacity-60 active:opacity-60'>Skip this step</h4>

        </div>


    </div>
  )
}
