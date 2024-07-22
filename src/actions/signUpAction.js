'use server'

import { hash } from "bcryptjs";
import { User } from "../../models/userModel";
import { Store } from "../../models/storeModel";

import { redirect } from "next/navigation";
import { connectDB } from "../utils/connect";

export async function signUpAction(formData){
    const name = formData.get("name");
    const username = formData.get("username");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const password = formData.get("password");

    // CONNECT DB
    await connectDB();

    const user = await User.findOne({email});

    if (user) throw new Error("User already exists");

    const hashedPassword = await hash(password, 10);

    // TO DO : CREATE USERNAME FIELD IN STORE
    
    const res = await User.create({
        name: name,
        username : username,
        email : email,
        phone : phone,
        password : hashedPassword
    })

    await Store.create({
        ownerEmail: email,
        services: [],
        socialLinks: {}

    })

    redirect('/login');



}