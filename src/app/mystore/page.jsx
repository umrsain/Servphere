import { auth } from '@/auth' 
import { DefaultTemp } from '@/components/DefaultTemp'
import Navbar from '@/components/Navbar'
import React from 'react'
import EditProfilePhoto from '@/components/mystore/EditProfilePhoto'
import EditStoreDetails from '@/components/mystore/EditStoreDetails'
import Link from 'next/link';
import { db } from '@/db';
import { sql } from 'drizzle-orm';
import { stores } from '@/db/schema/stores';
import { services } from '@/db/schema/services';
 
export default async function Page() { 

    // GET LOGGED IN USERS EMAIL
    const session = await auth();
    const email = session?.user?.email;

    let storeData;
    let themeColor;
    let servicesData;


    try{
        //
        storeData = await db.execute(sql`select * from ${stores} where ${stores.userId}=${session?.user?.id}`);
        storeData = storeData.rows;

        
        servicesData = await db.execute(sql`select * from ${services} where ${services.store_id}=${storeData[0]?.id}`);
        servicesData = servicesData.rows;

        //themeColor = storeData[0].themeColor  
        themeColor = '#FFFFFF'
    } catch(err){
        console.log(err)
    }

      return (
        <div className="flex w-full h-full bg-white" >
    
    
                <Navbar/>
    
                <div className='w-full h-full'>
    
                    <h2 className='ml-6 mt-10 mb-2 block text-sky-900/65 text-3xl font-semibold'>
                        My Store
                    </h2>
    
                    <hr className='w-full'/>

                    <div className='flex flex-row'>
                        <div className='w-2/4 h-full'>

                            {   (JSON.stringify(storeData) === '{}') ? null :
                                <h2 className='text-xl ml-6 mt-10 font-semibold text-sky-900/65'>
                                    Welcome back {storeData[0]?.username} 👋
                                </h2>
                            }

                            <div className='flex p-8 space-x-4'>

                                <div className='border-2 hover:border-sky-300/50 hover:text-sky-400 text-sky-800/65 rounded-2xl px-4 py-1'>
                                    <Link href=''>
                                        <h4 className='block text-sm font-semibold'>
                                            Sections
                                        </h4>
                                    </Link>
                                </div>

                                <div className='border-2 hover:border-sky-300/50 hover:text-sky-400 text-sky-800/65 rounded-2xl px-4 py-1'>
                                    <Link href='/mystore/edit'>
                                        <h4 className='block  text-sm font-semibold'>
                                            Edit Design
                                        </h4>
                                    </Link>
                                </div>
                         </div>       

                         {   (JSON.stringify(storeData) === '{}') ? null :

                            <>
                            <EditProfilePhoto image={storeData[0]?.img}/>

                            <EditStoreDetails
                             username = {storeData[0]?.username}
                             bio = {storeData[0]?.bio}
                             location = {storeData[0]?.location}
                             link = {storeData[0]?.link}
                            />

                            </>

                        }
                        <div className='h-24 w-full'>
                        </div>                        


                        </div>

                        <div className='flex w-2/4 h-screen mt-10 items-start justify-center'>
                        {   (JSON.stringify(storeData) === '{}') ? null :

                            <DefaultTemp 
                              themeColor={themeColor}
                              profileImg={storeData[0].img} 
                              username={storeData[0].username} 
                              bio={storeData[0].bio}
                              link={storeData[0].link}
                              location={storeData[0].location}
                              servicesData= {servicesData}
                             />
                        }
                        </div>
                    </div>

                </div>
    
    
        </div>
  )
}
