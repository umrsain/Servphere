'use server'
import { redirect } from "next/navigation";
import { signIn } from "@/auth";

export async function GoogleSignIn(formData){

    try {
        await signIn("google");
        redirect('/onboarding');

    } catch(error){
        console.log(error);
        return 
    }
    

}