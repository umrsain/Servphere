'use server'

import { services } from '@/db/schema/services';
import { db } from '@/db';

export async function submitDigitalData(formData) {

    // GET AUTHENTICATED USERS EMAIL 


    // THUMNAIL PAGE DATA

    const tb_img = formData.get('tb_image');
    const tb_title = formData.get('tb_title');
    const tb_subtitle = formData.get('tb_subtitle');
    const tb_desc = formData.get('tb_desc');
    const tb_features = formData.get('tb_features').split(",");
    const tb_buttonCTA = formData.get('tb_button');
    const tb_price = formData.get('tb_price');
    const tb_discount = formData.get('tb_discount');
    const tb_product = formData.get('tb_product');

    const store_id = formData.get("store_id");

    
    await db.insert(services).values({
        store_id : store_id,
        label : "digital",
        thumbnail: {
            img: tb_img,
            title: tb_title,
            subtitle: tb_subtitle,
            description: tb_desc,
            features : tb_features,
            buttonCTA: tb_buttonCTA ,
            price : tb_price,
            discount :tb_discount,
            product : tb_product
        },
    })
}