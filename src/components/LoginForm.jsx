"use client"
import { loginHandler } from '@/actions/loginHandler';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';


export const LoginForm = () => {

    const router= useRouter();

    return (
        <form action={ async (formData) => {
            const email = formData.get("email");
            const password = formData.get("password");

            if (!email || !password) 
                return toast.error("Please provide all details");
            
            const toastID = toast.loading("Logging in");

            const error = await loginHandler(email, password);

            if(!error){
                
                // REFRESH PAGE AFTER LOGIN
                toast.success("Login Successful", {
                    id: toastID
                });
                router.refresh();
            }

            else{
                toast.error(String(error), {
                    id: toastID
                })
            }
        
        }} 
        className="bg-white h-full shadow-md rounded px-8 pt-12 pb-8 mb-4 space-y-5">

        <h1 className='text-gray-600 text-center text-2xl font-bold mb-2'>
            Login
        </h1>

        <h3 className='text-gray-500 text-center text-sm mb-2'>
            Continue your journey with servphere
        </h3>

        <div className="mb-4">    
            <input name="email" required placeholder="email" type="text" className="shadow  border rounded w-full py-3 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"/>
        </div>

        <div className="mb-4">    
            <input name="password" required placeholder="password" type="password" className="shadow border rounded w-full py-3 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"/>
        </div>
       
        <div className="flex items-center justify-between">
            <button className="w-full hover:bg-sky-300 bg-[#6b76d8] text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
            </button>
        </div>

        <h3 className='text-gray-600 text-xs'>Dont have an account? <Link className='' href="/register">Register here</Link></h3>

    </form>
    )
}