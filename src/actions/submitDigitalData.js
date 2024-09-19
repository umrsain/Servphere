'use server'

import { auth } from '@/auth';
import { User } from "../../models/userModel";
import { connectDB } from "../utils/connect";
import { Store } from "../../models/storeModel";
import mongoose from 'mongoose';


export async function submitDigitalData(formData) {

    // GET AUTHENTICATED USERS EMAIL 
    
    const session = await auth();
    const email = session.user?.email;

    // THUMNAIL PAGE DATA

    const tb_img = formData.get('tb_image');
    const tb_title = formData.get('tb_title');
    const tb_subtitle = formData.get('tb_subtitle');
    const tb_buttonCTA = formData.get('tb_button');
    const tb_price = formData.get('tb_price');
    const tb_discount = formData.get('tb_discount');
    const tb_product = formData.get('tb_product');

    
       // CONNECT DB
       await connectDB();
     
       await Store.updateOne({ownerEmail: email},{
        $push: {
           services : {
                _id: new mongoose.Types.ObjectId(),
                label : "digital",
                thumbnail: {
                    img: tb_img,
                    title: tb_title,
                    subtitle: tb_subtitle,
                    buttonCTA: tb_buttonCTA ,
                    price : tb_price,
                    discount :tb_discount,
                    product : tb_product
                    
                },
            
           }           
       }});

       





}