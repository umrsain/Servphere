"use client"
import { useFormState } from "react-dom"
import {FormAction} from '../actions/FormAction'
import Link from "next/link"

// SHIPPIT TECHNOLOGIES CODE

export default function Form() {
  const [state,formAction] = useFormState( FormAction, null)

  /**
   * @data temporary variable filled with dummy data to test UI/UX
   * @state state variable that holds the result after performing a form action
   */
  const data = [
    {
        
    }
  ]

  return (
    <div className="">
        <div className="bg-sky-900/25 w-full h-10">
            <div className="flex space-x-3 justify-end mr-6 pt-3">
                <div className="h-4/4 hover:bg-sky-100/25">
                    <p className="text-white text-sm font-regular">Home</p>
                </div>

                <div>
                    <p className="text-white text-sm font-regular">About</p>
                </div>

                <div>
                    <p className="text-white text-sm font-regular">Contact Us</p>
                </div>

            </div>
        </div>
    <div className='flex h-screen bg-white'>
        <div className='w-3/12 mt-10'>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action={formAction}>

                <div className="mb-4">    
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="origin_country_code">Origin Country Code</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="origin country code" name="origin_country_code" type="text" />
                </div>

                <div className="mb-4">    
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="origin_city">Origin City</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="origin city" name="origin_city" type="text" />
                </div>

                <div className="mb-4">    
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="origin_location_code">Origin UN Location Code</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="origin un location code" name="origin_location_code" type="text" />
                </div>

                <div className="mb-4">    
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="origin_region_code">Origin UN Region Code</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="origin un region code" name="origin_region_code" type="text" />
                </div>

                <div className="mb-4">    
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destination_country_code">Destination country code</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="destination country code" name="destination_country_code" type="text"/>
                </div>

                <div className="mb-4">    
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destination_city">Destination City</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="destination city" name="destination_city" type="text"/>
                </div>

                <div className="mb-4">    
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destination_location_code">Destination UN Location Code</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="destination un location code" name="destination_location_code" type="text" />
                </div>

                <div className="mb-4">    
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destination_region_code">Destination UN Region Code</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="destination un region code" name="destination_region_code" type="text" />
                </div>

                <div className="mb-4">    
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date" >date</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="date" type="date"/>
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-sky-900/50  hover:bg-sky-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Search
                    </button>
                </div>

            </form>
        </div>

        <div className='w-9/12 h-screen items-start justify-center mt-9'>
            <h1 className="text-gray-700 text-lg font-semibold ml-6 mt-6">Available Schedules</h1>
            <div className="space-y-4 m-4">
            {state?.data?.oceanProducts[0]?.transportSchedules.map((item) => 
               
                <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex">  
                        <div className="flex-col p-4">
                            <p className="text-gray-800 text-sm font-semibold mb-2">Departure</p>
                            <p className="text-gray-700 text-xs font-medium mb-0.5">{new Date(item.departureDateTime).getDay()+' '+new Date(item.departureDateTime).toLocaleString('default', { month: 'long' })+" "+new Date(item.departureDateTime).getFullYear()}</p>
                            <p className="text-gray-700 text-xs font-medium">{item.facilities.collectionOrigin.locationName}</p>
                        </div>

                        <div className="flex-col p-4">
                            <p className="text-gray-800 text-sm font-semibold mb-2">Arrival</p>
                            <p className="text-gray-700 text-xs font-medium mb-0.5">{new Date(item.arrivalDateTime).getDay()+' '+new Date(item.arrivalDateTime).toLocaleString('default', { month: 'long' })+" "+new Date(item.arrivalDateTime).getFullYear()}</p>
                            <p className="text-gray-700 text-xs font-medium">{item.facilities.deliveryDestination.locationName}</p>
                        </div>

                        <div className="flex-col p-4">
                            <p className="text-gray-800 text-sm font-semibold mb-2">Voyage/Vessel</p>
                            <p className="text-gray-700 text-xs font-medium">{item.firstDepartureVessel.vesselName}</p>
                        </div>

                        <div className="flex-col p-4">
                            <p className="text-gray-800 text-sm font-semibold mb-2">Estimated Arrival Time(days)</p>
                            <p className="text-gray-700 text-xs font-medium">{Math.trunc(Math.round((new Date(item.arrivalDateTime).getTime())-(new Date(item.departureDateTime).getTime()))/(1000 * 3600 * 24))}</p>
                        </div>

                    </div>

                    
                    {
                        state?.data?.oceanProducts[0] ?

                        <div className="justify-end ml-4"> 
                            <a target='_blank' href='https://www.maersk.com/transportation-services/maersk-spot'>
                                <button className="bg-sky-900/50 justify-end hover:bg-sky-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Book
                                </button>
                            </a>
                        </div>
                         : null
                    }
                    
                </div>

                
            )}

            
            </div>
        </div>

    </div>
    </div>
  )
}
