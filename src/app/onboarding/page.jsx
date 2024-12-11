import React from 'react'
import { auth } from '@/auth';
import SocialsDialogMenu from '@/components/Home/SocialsDialogMenu';
import ProfileDialogMenu from '@/components/Home/ProfileDialogMenu';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { colors } from '@/utils/colors';
import WizardSurvey from '@/components/Home/WizardSurvey';
import { db } from '@/db';
import { users } from '@/db/schema/users';
import { sql } from 'drizzle-orm' 
import { stores } from '@/db/schema/stores';

export default async function Page() {

    // GET LOGGED IN USERS EMAIL
    const session = await auth();

    // FETCH USER DATA AND STORE INFO

    let userData;
    let store_id;

    try{
        // USER DATA
        userData = await db.execute(sql`select * from ${users} where ${users.id} = ${session?.user?.id}`);  
        userData = userData.rows; 

        // STORE DATA

        store_id = await db.execute(sql`select ${stores.id} from ${stores} where ${stores.userId} = ${session?.user?.id}`);  
        store_id = store_id?.rows[0]?.id;

        // IF STORE DONT EXIST THEN CREATE IT AND GET STORE ID
        if (!store_id){
            store_id = crypto.randomUUID();

            await db.insert(stores).values({
                id : store_id,
                ownerEmail: session?.user?.email,
                userId: session?.user?.id,
            })
        }
        
    } catch(err){
        console.log(err)
    }


    // DATA STRUCTURE TO STORE ALL CARDS INFORMATION
    const CardsInfo = [
        {
          title: 'Add Your Profile Details',
          desc: 'Personalize your store by adding a profile photo, username and a bio etc.',
          CTA : <ProfileDialogMenu store_id={store_id}/>,
          done : false
        }, 
        {
          title : 'Add Your Socials',
          desc : 'Add links to your socials so you can connect to your audience from multiple platforms',
          CTA : <SocialsDialogMenu store_id={store_id}/>,
          done : false
    
        },
        {
            title : 'Help Us Personalize your experience',
            desc : 'Fill out a small optional survey to help us deliver a personalized experience',
            CTA : <WizardSurvey/>,
            done : false
        },
        {
          title: 'Setup Your Direct Deposit',
          desc: 'Servphere uses Stripe to transfer directly to your bank account.',
          CTA: <Link href="/payment">
    
          <button className={`bg-[${colors.airbnb_red}] hover:opacity-60 active:opacity-60 py-2 w-2/5 rounded focus:outline-none focus:shadow-outline`}>
              <h4 className='block text-sm font-bold text-white'>
                  + Setup Payment
              </h4>
          </button>
        </Link>,
          done : false
    
        }
      ]

  return (
    <div className='flex h-screen bg-white'>

        <Navbar/>

        <div className='w-full'>
        <h2 className='ml-6 mt-10 mb-2 block text-sky-900/65 text-3xl font-semibold'>
            Home
        </h2>
        <hr className='w-full'/>
        
        <h4 className='ml-6 pt-4 block text-sky-900/65 text-lg font-semibold'>
            Store Launch Checklist
        </h4>

        <p className='ml-6 pt-1 mb-4 text-slate-500/50 text-xs font-semibold'>
            {`${userData[0]?.onBoardingStep}/${CardsInfo.length}`} Tasks Completed
        </p>

        {/* Card list componentized */}
        <div className='flex flex-col'>
 
            {CardsInfo.map((card,index) => 
            
            <div key={index} className='flex flex-row  h-full ml-6 space-x-3'>
                 
                {/* Step number */}
                <div className='flex flex-col'>
                { (index < userData[0]?.onBoardingStep) ?  
                    <div className='flex h-10 w-10 items-center justify-center'>

                        <IoIosCheckmarkCircle className='h-full w-full' color={colors.airbnb_red}/>
                    </div>
                :
                
                (index === userData[0]?.onBoardingStep) ?
                    // CONDITIONALLY RENDER STEP BASED ON ACTIVE CARD INDEX
                    <div className={`min-h-9 min-w-9 rounded-full border-2 border-[#${colors.airbnb_light_red}] items-center justify-center flex`}>
                        <p className='text-gray-400/50 text-xs font-regular'>{index}</p>
                    </div>
                    :
                    <div className='min-h-9 min-w-9 rounded-full border-2 border-blue-100 items-center justify-center flex'>
                        <p className='text-gray-400/50 text-xs font-regular'>{index}</p>
                    </div>

                }

                { (index === CardsInfo.length-1) ? null:
                <div className='border-l-2 h-full ml-4'></div>
                }
                </div>
                
                {/* Card Content */}

                {
                (index !== userData[0]?.onBoardingStep) ? 

                <div className='flex flex-col w-5/6 space-y-5 p-5 h-full border-0 mb-2 rounded-xl shadow-md'>
                    <h3 className='block text-sky-900/65 text-xl font-semibold'>
                    {card.title}
                    </h3>

                    <h4 className='block text-gray-500/75 text-xs font-semibold'>
                    {card.desc}
                    </h4>
                </div>

                :
                <div className='flex flex-col w-5/6 space-y-5 p-5 h-full border-0 mb-2 rounded-xl shadow-md'>
                    <h3 className='block text-sky-900/65 text-xl font-semibold'>
                    {card.title}
                    </h3>

                    <h4 className='block text-gray-500/75 text-xs font-semibold'>
                    {card.desc}
                    </h4>

                    {card.CTA}
                </div>

                }

            </div>

            )}
        </div>

        </div>
    </div>
  )
}
