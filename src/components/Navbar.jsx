import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { MdStorefront } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { SiSimpleanalytics } from "react-icons/si";
import img from './servphere-logov2.png';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
    const DrawerItems = [
        {name:'Home', route:'/home', icon : GrHomeRounded
      },
        {name:'My Store',route:'/mystore',icon : MdStorefront},
        {name:'Add Product', route: '/mystore/addproduct',icon : IoBagHandleOutline},
        {name: 'Pricing', route: '/pricing',icon : IoPricetagOutline},
        {name:'Analytics', route:'/analytics',icon : SiSimpleanalytics},
        {name:'Settings', route:'/settings',icon : IoSettingsOutline}
      ]
  return (
    <div className='bg-teal-300/25 flex flex-col rounded w-[16%] h-auto'>
        <div className='flex p-4 mt-4 text-gray-500 items-center justify-items-center'>
        
        <Image 
            src={img}
            width={40}
            height={40}
            className='h-auto'
            alt="Picture of the author" 
        />

        <h3 className='block text-md font-semibold'>Servphere</h3>
        </div>

        {DrawerItems.map((elm) => 
        <div key={elm.name} className='flex space-x-3 p-4 ml-6 hover:bg-teal-300 hover:text-white text-gray-500/75 rounded-r-lg items-center justify-items-center'>
            <elm.icon/>
            <Link href={elm.route}>
            <h4 className='block text-sm font-regular'>
                {elm.name}
            </h4>
            </Link>
            
    
        </div>
        )}
    </div>
  )
}

export default Navbar