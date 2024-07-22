'use server'

import { auth } from '@/auth';
import { User } from "../../models/userModel";
import { connectDB } from "../utils/connect";


export async function createServiceAction(state,formData) {
    const session = await auth();
    const tb_img = formData.get("tb-image");
    const tb_style = formData.get("tb-style");
    const tb_title = formData.get("tb-title");
    const tb_subtitle = formData.get("tb-subtitle");
    const tb_buttonCTA = formData.get("tb-button");
    const email = session.user?.email;

     
    // CONNECT DB
    await connectDB();

 
    const user = await User.findOne({email});

    await User.updateOne({email: email},{store: {
        ownerEmail: email,
        services : {
            coaching : {
                thumbnail: {
                    style: style,
                    img: img,
                    title: title,
                    subtitle: subtitle,
                    buttonCTA:buttonCTA 


                }
            }

        }
    
    }});




     
 

}