"use client"
import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import TimePickerCustom from '../TimePickerCustom';
import { useSelector } from 'react-redux';
import { submitCoachingData } from '@/actions/submitCoachingData';
import { toast } from 'sonner';
import { FaSortDown } from "react-icons/fa";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { colors } from '@/utils/colors';

const timeSlots = [
    {start: "01:00 AM", end: "03:00 AM"},
    {start: "01:00 AM", end: "03:00 AM"},
    {start: "01:00 AM", end: "03:00 AM"},
    {start: "01:00 AM", end: "03:00 AM"},
    {start: "01:00 AM", end: "03:00 AM"},
    {start: "01:00 AM", end: "03:00 AM"},

  ]
 
const Availability = ({store_id}) => {
    const [date, setDate] = useState(new Date());
    const availabilityData = useState({});
    const formData = useSelector((store) => store.thumbnail.formData);
    const [data, setData] = useState({
        av_duration : '',
        av_timezone: '',
        av_break_before: '',
        av_break_after: ''
    })
 
    // INDEX VARIABLE FOR PREVIEW
    const [index, setIndex] = useState(0)

    console.log(data);
    const ukTimeZones = [
        {
            tz : "GMT - Edinburgh | UTC 0",
            place : "Edinburgh"
        },
        {
            tz :"GMT - London | UTC 0",
            place: "London"
        },
        {
            tz: "GMT - Belfast | UTC 0",
            place: "Belfast"
        },
        {
            tz: "GMT - Cardiff | UTC 0",
            place: "Cardiff"
        },
        {
            tz: "GMT - Dublin | UTC 0",
            place: "Dublin"
        }
    ];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(formData);
     // THUMBNAIL PAGE ATTRIBUTES
     const tb_img = formData.tb_image || undefined;
     const tb_style = formData.tb_style || undefined;
     const tb_title = formData.tb_title || undefined;
     const tb_subtitle = formData.tb_subtitle || undefined;
     const tb_desc = formData.tb_desc || undefined;

     const tb_buttonCTA = formData.tb_button || undefined;
     const tb_price = formData.tb_price || undefined;
     const tb_discount = formData.tb_discount || undefined;


    return (
    <div className='flex w-full h-full'>
       
        {/* FORM INPUT SECTION */}
        <div className='w-2/4 h-full'>
     
            {/* SUBMIT ALL INPUT DATA FROM MULTI STEP FORM TO SERVER ACTION*/}
            <form action={async (formData) => {

                const toastID = toast.loading("Creating Service");

                try{
                    // SUBMIT MULTI STEP FORM DATA
                    await submitCoachingData(formData);

                    toast.success("Service Successfully Created", {
                        id: toastID
                    });

                }catch(error){
                    toast.error("Failed to Create Service", {
                        id: toastID
                    });
                }
            }}>
        <div className='ml-6 space-y-2'>
                            
            <div className='w-full h-full space-y-4'>

                <div className='flex flex-col space-y-12'>

                    {/* STEP 1 - CONFIGURE SETTINGS */}
                    <div className='space-y-6 w-full'>

                        <div className='flex flex-row space-x-3'>
                            <div className='flex items-center justify-center h-6 w-6 rounded-full bg-gray-100/75'>
                                <p className='text-xs text-gray-400'>1</p>
                            </div>
                            <h3 className='text-gray-500 font-medium'>Configure Settings</h3>
                        </div>

                        <div className='w-full space-y-4'>

                            <div className='flex flex-col space-y-4'>
                                <label className='text-gray-500 text-xs'>Time Zone</label>

                                <Select name="av_timezone">
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select a timezone" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                        <SelectLabel>Timezone</SelectLabel>
                                            {ukTimeZones.map((elm, index) =>
                                                <SelectItem key={index} value={elm.tz}>{elm.tz}</SelectItem>
                                            )}
                        
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div>
                            <label className='text-gray-500 text-xs'>Duration In Minutes</label>
                            <input required name='av_duration' placeholder='Duration of the meeting in minutes' type="number" className='focus:outline-none text-sm text-gray-500 w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75 border-0'/>
                        </div>

                        <div>
                            <label className='text-gray-500 text-xs'>Maximum number of participants for one meeting</label>
                            <input required name='av_max_attendees' placeholder='Maximum attendees' type="number" className='focus:outline-none text-sm text-gray-500 w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75 border-0'/>
                        </div>

                        <div className='flex space-x-10'>
                            <div>
                                <label className='text-gray-500 text-xs'>Break Before Meeting in Minutes</label>
                                <input required name='av_break_before' value="15" type="number" className='focus:outline-none text-sm text-gray-500 w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75 border-0'/>
                            </div>

                            <div>
                                <label className='text-gray-500 text-xs'>Break After Meeting in Minutes</label>
                                <input required name='av_break_after' value="15" type="number"  className='focus:outline-none text-sm text-gray-500 w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75 border-0'/>
                            </div>
                        </div>
                        

                    </div>

                    {/* STEP 2 - SELECT AVAILABLE TIMES */}
                    <div className='space-y-6 w-full'>

                        <div className='flex flex-row space-x-3'>
                            <div className='flex items-center justify-center h-6 w-6 rounded-full bg-gray-100/75'>
                                <p className='text-xs text-gray-400'>2</p>
                            </div>
                            <h3 className='text-gray-500 font-medium'>Select available times</h3>
                        </div>

                        <div className='w-full space-y-3'>
                            <h5 className='text-gray-400 text-xs'>Your Availability *</h5>

                            {/* CARD LIST FOR EACH DAY OF THE WEEK */}
                            <div className='w-full space-y-4'>

                                {daysOfWeek.map((day, index) =>
                                    <div key={index}>
                                        <div className='flex w-full'>

                                            <button className='bg-sky-500/75 hover:bg-sky-300 py-2 w-1/4 rounded focus:outline-none focus:shadow-outline'>
                                                <h4 className='text-sm text-white'>{day}</h4>        
                                            </button>

                                            <div className='flex space-x-4 item w-full justify-end'>

                                                <label className='text-gray-500 text-sm'>From</label>

                                                <div className="flex w-28 items-start justify-center rounded-lg">
                                                    <div className="flex">
                                                        <select name={`${day}_opening_hour`} className="bg-transparent text-gray-500 text-sm appearance-none outline-none">
                                                            <option value="01">1</option>
                                                            <option value="02">2</option>
                                                            <option value="03">3</option>
                                                            <option value="04">4</option>
                                                            <option value="05">5</option>
                                                            <option value="06">6</option>
                                                            <option value="07">7</option>
                                                            <option value="08">8</option>
                                                            <option value="09">9</option>
                                                            <option value="10">10</option>
                                                            <option value="11">10</option>
                                                            <option value="12">12</option>
                                                        </select>

                                                        <span className="text-md mr-3">:</span>

                                                        <select name={`${day}_opening_minute`} className="bg-transparent text-gray-500 text-sm appearance-none outline-none mr-4">
                                                            <option value="00">00</option>
                                                            <option value="30">30</option>
                                                        </select>

                                                        <select name={`${day}_opening_AM_or_PM`} className="bg-transparent text-gray-500 text-sm appearance-none outline-none">
                                                            <option value="AM">AM</option>
                                                            <option value="PM">PM</option>
                                                        </select>
                                                    </div>
                                                    <FaSortDown className='ml-2' style={{color:'gray'}}/>
                                                </div>

                                                <label className='text-gray-500 text-sm'>To</label>

                                                <div className="flex w-28 items-start justify-cente rounded-lg">
                                                    <div className="flex">
                                                        <select name={`${day}_closing_hour`} className="bg-transparent text-gray-500 text-sm appearance-none outline-none">
                                                            <option value="01">1</option>
                                                            <option value="02">2</option>
                                                            <option value="03">3</option>
                                                            <option value="04">4</option>
                                                            <option value="05">5</option>
                                                            <option value="06">6</option>
                                                            <option value="07">7</option>
                                                            <option value="08">8</option>
                                                            <option value="09">9</option>
                                                            <option value="10">10</option>
                                                            <option value="11">10</option>
                                                            <option value="12">12</option>
                                                        </select>

                                                        <span className="text-md mr-3">:</span>

                                                        <select name={`${day}_closing_minute`} className="bg-transparent text-gray-500 text-sm appearance-none outline-none mr-4">
                                                            <option value="00">00</option>
                                                            <option value="30">30</option>
                                                        </select>

                                                        <select name={`${day}_closing_AM_or_PM`} className="bg-transparent text-gray-500 text-sm appearance-none outline-none">
                                                            <option value="AM">AM</option>
                                                            <option value="PM">PM</option>
                                                        </select>
                                                    </div>
                                                    <FaSortDown className='ml-2' style={{color:'gray'}}/>
                                                </div>

                                            </div>

                                        </div>
                                        <hr className='mt-2'/>
                                    </div>
                                )}                              

                            </div>

                        </div>
                    </div> 

                    <div className='flex flex-row w-full space-x-3 justify-end'>
                        
                        <button className={`bg-white border border-gray-200 hover:opacity-60 py-2 w-1/4 rounded focus:outline-none focus:shadow-outline`}>
                            <h4 className='text-sm hover:opacity-60 text-gray-400'>Save as Draft </h4>
                        </button>

                        <button type='submit' className={`bg-[${colors.airbnb_red}] active:opacity-60 hover:opacity-60 py-2 w-1/4 rounded focus:outline-none focus:shadow-outline`}>
                            <h4 className='text-sm text-white'>Next</h4>
                            
                        </button>


                    </div>

                </div>

            </div>

            <div>

                { /* PASSING ALL DATA FROM MUTLI STEP FORM */}
                
                <input type="hidden" name="tb_img" value={tb_img} />
                <input type="hidden" name="tb_style" value={tb_style} />
                <input type="hidden" name="tb_title" value={tb_title} />
                <input type="hidden" name="tb_subtitle" value={tb_subtitle} />
                <input type="hidden" name="tb_desc" value={tb_desc} />
                <input type="hidden" name="tb_buttonCTA" value={tb_buttonCTA} />
                <input type="hidden" name="tb_price" value={tb_price} />
                <input type="hidden" name="tb_discount" value={tb_discount} />

                <input type='hidden' name='store_id' value={store_id}/>

            </div>

                </div>
            </form>
        
        </div>


        {/* MOBILE/DESKTOP PREVIEW SECTION */}

        <div className='flex w-2/4 items-start justify-center'>

            <div className="flex flex-col sticky top-10 overflow-y-scroll items-center bg-[#fefefe] border-8 border-gray-800 rounded-[40px] w-[18rem] h-[35rem]">
        
                {/* TOP NOTCH UPPER MOBIILE LINE */}
                <div className='flex sticky top-0 bg-gray-800 w-36 min-h-5 rounded-b-xl items-center justify-center space-x-3'>
                    <hr className='border-2 rounded-md border-gray-700 w-12'/>
                    
                    <div className='h-2 w-2 bg-blue-900 rounded-full'>
                    </div>
                </div>  

                <div className='flex h-full w-full mt-8 justify-center items-center'>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                    />  
                </div>

                <div className='grid grid-cols-3 gap-2 p-3'>
                    {   
                        timeSlots.map((slot, index_) =>
           
                            <div
                                key={index_} 
                                onClick={()=> setIndex(index_)}
                                className={`flex items-center text-center justify-center rounded-md hover:opacity-60 ${(index >= 0 &&  index===index_) ?"text-white bg-sky-500/75" : "bg-gray-200/75" } bg-gray-200/75 text-[8px] py-2 text-gray-500`}>
                                    {`${slot.start}-${slot.end}`}
                            </div>
                          
                      
                        )    
                    }
                </div>

                <button type='submit' className={`bg-sky-500/75 mt-6 active:opacity-60 hover:opacity-60 py-2 w-[90%] rounded focus:outline-none focus:shadow-outline`}>
                    <h4 className='text-sm font-semibold text-white'>Book Appointment</h4>
                    
                </button>

                <div className='p-8'>

                </div>
                
            </div>
        
        </div>
    
</div>
  )
}

export default Availability