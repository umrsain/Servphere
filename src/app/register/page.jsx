"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signUpAction } from '@/actions/signUpAction';
import { toast } from 'sonner';
import { colors } from '@/utils/colors';

const register = () => {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const router= useRouter();




  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  const isValidPhone = (phone) => {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
    return phoneRegex.test(phone);
  }

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i;
    return passwordRegex.test(password);
  }

  const isValidName = (name) => {
    const nameRegex = /^[0-9A-Za-z]{6,16}$/i;
    return nameRegex.test(name)
  }

  const checkRegex = (e) => {

    if (e.target.name == "name") {
        if(!isValidName(e.target.value)) setNameError("Please enter a valid name")
        else setNameError("")
    }

    if (e.target.name == "username") {
      if(!isValidName(e.target.value)) setNameError("Please enter a valid user name")
      else setNameError("")
  }

    if (e.target.name == "email") {
        if(!isValidEmail(e.target.value)) setEmailError("Please enter a valid email")
        else setEmailError("")
    }

    if (e.target.name == "password") {
        if(!isValidPassword(e.target.value)) setPassError("Please enter a valid password")
        else setPassError("")
    }

    if (e.target.name == "phone") {
        if(!isValidPhone(e.target.value)) setPhoneError("Please enter a valid phone number")
        else setPhoneError("")
    }
 
  } 

  

  return (
    <div className='h-screen w-full bg-gradient-conic flex items-center justify-center'>
        <div className='w-2/6 h-full'>
            <form action={ async (formData) => {
      
            const toastID = toast.loading("Creating Account");

            try{
              await signUpAction(formData);
              toast.success("Account Successfully Created", {
                  id: toastID
              });
              router.refresh()

            } catch(error){
              toast.error(error?.message, {
                  id: toastID
              })

            }
          
        
        }
              
              } 
              className="bg-white h-full shadow-md rounded px-8 pt-12 pb-8 mb-4 space-y-5">

                <h1 className='text-gray-600 text-center text-2xl font-bold mb-2'>
                    Register
                </h1>

                <h3 className='text-gray-500 text-center text-sm mb-2'>
                    Start your journey with servphere
                </h3>

                <div className="mb-4">    
                    <input onChange={checkRegex} required name="name" placeholder="Enter your full name" type="text" className="shadow border rounded w-full py-3 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"/>
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{nameError}</p>
                </div>
                
                <div className="mb-4">    
                    <input onChange={checkRegex} required name="username" placeholder="Enter your username" type="text" className="shadow border rounded w-full py-3 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"/>
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{nameError}</p>
                </div>

                <div className="mb-4">    
                    <input onChange={checkRegex} required name="email" placeholder="Enter your email" type="text"
                    className="shadow  border rounded w-full py-3 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"/>
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{emailError}</p>

                </div>

                <div className="mb-4">    
                    <input onChange={checkRegex} required name="phone" placeholder="phone" type="text"
                    className="shadow border rounded w-full py-3 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"/>
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{phoneError}</p>

                </div>

                <div className="mb-4">    
                    <input onChange={checkRegex} required name="password" placeholder="password" type="password"
                    className="shadow border rounded w-full py-3 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"/>
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{passError}</p>

                </div>
               

                <div className="flex items-center justify-between">
                    <button className={`w-full hover:opacity-60 active:opacity-60 bg-[${colors.airbnb_red}] text-white font-bold py-2 rounded focus:outline-none focus:shadow-outlin`} type="submit">
                    Start Your 14 Days Free Trial
                    </button>
                </div>

                <h3 className='text-gray-600 text-xs text-center'>By signing up, you agree to our {" "}
                  <Link className='underline text-violet-800/75 hover:text-violet-300' href="">Privacy Policy {" "}</Link> 
                  and {" "}
                  <Link className='underline text-violet-800/75 hover:text-violet-300' href="">Terms of Service</Link>
                </h3>


                <h3 className='text-gray-600 text-xs text-center'>Already have an account? <Link className='underline text-violet-800/75 hover:text-violet-300' href="/login">Login here</Link></h3>

            </form>
        </div>

    </div>
  )
}

export default register