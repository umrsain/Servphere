"use client"
import React from 'react'
import CheckoutPage from "@/components/CheckoutPage";
import convertToSubCurrency from '@/lib/convertToSubCurrency'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function page() {
  const amount = 49.99;

  return (
    <main className='max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500'>
        <div className='mb-10'>
            <h1 className='text-4xl font-extrabold mb-2'>
                Servphere
            </h1>
            
            <h2 className='text-2xl'>
                has requested
                <span className='font-bold'> ${amount}</span>
            </h2>   
        </div>

        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubCurrency(amount) , //cents
            currency: "usd"
          }}
        >
            <CheckoutPage amount={amount}/>

        </Elements>
    </main>
  )
}
