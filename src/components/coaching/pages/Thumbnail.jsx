"use client"
import React, { useState } from 'react';
import { Button } from '../thumbnailPreviewCards/Button';
import Callout from '../thumbnailPreviewCards/Callout';
import Preview from '../thumbnailPreviewCards/Preview';
import { useDispatch, useSelector } from 'react-redux';
import { setCurSelectedPageIndex, updateFormData } from '@/redux/slices/thumbnailSlice';
import { UploadDropzone } from '@/utils/uploadthing';
import { colors } from '@/utils/colors';
 
const Thumbnail = () => {

    const curSelectedPageIndex = useSelector((store) => store.thumbnail.curSelectedPageIndex);
    const formData = useSelector((store) => store.thumbnail.formData);

    const [data, setData] = useState({
        tb_image : 'https://w7.pngwing.com/pngs/44/943/png-transparent-google-calendar-logo-icon.png',
        tb_title : '',
        tb_subtitle : '',
        tb_desc : '',
        tb_button : '',
        tb_price : '',
        tb_discount : '',
    }) 

    const styleOptions = ['Button', 'Callout', 'Preview'];
    const [myStyle, setMyStyle] = useState('Button');
    const [img, setImg] = useState('');

    const dispatch = useDispatch()

    async function action(formData) {
        var object = {};
        formData.forEach((value, key) => object[key] = value);
        dispatch(updateFormData(object));
        dispatch(setCurSelectedPageIndex(curSelectedPageIndex+1));
    }

  return (
    <div className='flex h-full space-x-10 w-full'>

        <div className='w-2/4 h-full'>

        <form action={action} className='ml-6 space-y-5'>
                        

        <div className='w-full h-full space-y-10'>

            <div className='flex flex-col space-y-6'>
                <div className='flex flex-row space-x-3'>
                    <div className='flex items-center justify-center h-6 w-6 rounded-full bg-gray-200/75'>
                        <p className='text-xs text-gray-400'>1</p>
                    </div>
                    <h3 className='text-gray-500 font-medium'>Select image</h3>
                </div>
                <UploadDropzone     
                    endpoint={"imageUploader"}
                    onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res[0].url);
                    setData({...data, tb_image : res[0].url})
                    alert("Upload Completed");
                    }}
                    onUploadError={(error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                    }}
                />
                <input name="tb_image" value={data.tb_image} type='hidden'/>

                
            </div>

            <div className='space-y-6'>

                <div className=''>
                    <label className='text-gray-500 text-xs'>Title</label>
                    <input defaultValue={formData.tb_title} autoFocus onChange={(e) => setData({...data, tb_title: e.target.value})} required name='tb_title' placeholder='title' className='focus:outline-none text-sm text-gray-500 w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75 border-0' />
                </div>

                <div className=''>
                    <label className='text-gray-500 text-xs'>Subtitle</label>
                    <input defaultValue={formData.tb_subtitle} onChange={(e) => setData({...data, tb_subtitle: e.target.value})} required name='tb_subtitle' placeholder='subtitle' className='focus:outline-none text-sm text-gray-500 w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75 border-0' />
                </div>

                <div className=''>
                    <label className='text-gray-500 text-xs'>Description</label>
                    <textarea defaultValue={formData.tb_desc} onChange={(e) => setData({...data, tb_desc: e.target.value})} required name='tb_desc' placeholder='description' className='focus:outline-none text-sm text-gray-500 w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75 border-0' />
                </div>
 
                <div className=''>
                    <label className='text-gray-500 text-xs'>Button</label>
                    <input defaultValue={formData.tb_button } onChange={(e) => setData({...data, tb_button: e.target.value})} required name='tb_button' placeholder='button' className='focus:outline-none text-sm text-gray-500 w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75 border-0' />
                </div>

                <div className=''>
                    <label className='text-gray-500 text-xs'>Price</label>
                    <input defaultValue={formData.tb_price} onChange={(e) => setData({...data, tb_price: e.target.value})} required name='tb_price' placeholder='price' className='text-gray-500 text-sm focus:outline-none w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75' />
                </div>

                <div>
                    <label className='text-gray-500 text-xs'>Discount Price</label>
                    <input defaultValue={formData.tb_discount} onChange={(e) => setData({...data, tb_discount: e.target.value})} name='tb_discount' placeholder='Discount' type='text' className='focus:outline-none text-sm text-gray-500 w-full py-1.5 pl-2 rounded-sm font-regular bg-sky-50/75 border-0'/>
                </div>

                <input type='hidden' name='tb_style' value={myStyle}/>

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

    </form>
        </div>
 
        <div className='flex sticky top-20 justify-between h-[8rem] w-[30rem] hover:opacity-60 active:opacity-60 bg-white rounded-lg shadow-md p-3'>
            
            <div className='w-[65%]'>
              <h4 className='text-[15px] text-gray-600 font-semibold'>
                {data.tb_title || formData.tb_title}
              </h4>
    
              <h5 className='text-[13px] text-gray-400'>
                {data.tb_subtitle || formData.tb_subtitle}
              </h5>
            </div>
    
            <div className='flex space-x-2'>
              <h4 className='text-[14px] text-gray-600'>{'$'}{data?.tb_price || formData?.tb_price}</h4>
    
              <button className={`bg-[${colors.airbnb_red}] h-5 px-2 text-[14px] text-white font-medium rounded-md`}>
                Book
              </button>
            </div>
    
          </div>
    </div>
  )
}

export default Thumbnail