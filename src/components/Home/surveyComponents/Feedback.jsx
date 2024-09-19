"use client"
import { colors } from '@/utils/colors'
import Link from 'next/link'
import React from 'react'

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { AddFeedback } from '@/actions/onboarding/AddFeedback'


export default function Feedback() {
    const options = [
        "Instagram or Facebook",
        "Email or newsletter",
        "Search engine",
        "Word of mouth",
        "TikTok",
        "Other"
      ]

  return (
    
        <form action={ async(formData) => {
            await AddFeedback(formData)
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

            <h4 className='text-sm text-center text-gray-400 hover:opacity-60 active:opacity-60'>Skip this step</h4>

        </form>
  )
}
