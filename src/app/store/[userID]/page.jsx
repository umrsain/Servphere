'use client'
import Image from 'next/image'
import { useParams, usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
 
export default function page() {

    const pathname = usePathname()
    const router = useRouter();
  

    const [activeIndex, setActiveIndex] = useState();


    const [sdata, setStoreData] = useState({});
    const [themeColor, setThemeColor] = useState('#000000');


    /*
    const getStoreDetails = async () => {
        const res = await fetch("/api/storedetails");
        const storeDetails = await res.json();
        return storeDetails;
    }
    

    useEffect(() => {
        getStoreDetails().then((data) => {
            setStoreData(data);
            setThemeColor(data[0].themeColor)

        })
    },[]);

    const servicesData = sdata[0]?.services;

    */

   
  return (
    <div>
        
    </div>
  )
}
