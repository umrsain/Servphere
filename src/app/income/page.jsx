import Navbar from '@/components/Navbar'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
 
export default async function Page() { 
    
    return (
    <div className='flex h-screen bg-white'>
        <Navbar/>

        <div className='flex flex-col w-full h-screen mx-8 space-y-4'>

            <div className='flex w-full h-1/2 space-x-5'>
                <div className='flex flex-col p-3 space-y-4 mt-12 border border-gray-200 rounded-lg w-1/2'>
                    <h2 className='text-lg font-medium text-gray-400'>Total Revenue</h2>
                    <h2 className='text-2xl font-bold text-gray-600'>25$</h2>

                </div>

                <div className='flex flex-col p-3 items-center border border-gray-200 rounded-lg space-y-4 mt-12 w-1/2'>
                    <h2 className='text-sm font-medium text-gray-400'>Available for cash out</h2>
                    <h2 className='text-md font-bold text-gray-600'>5$</h2>
                    <button className={`bg-[#f57575] hover:opacity-70 py-2 px-12 rounded-md focus:outline-none focus:shadow-outline`}>
                        <p className='text-gray-50 text-md font-semibold'>
                            Cash out
                        </p>
                    </button>
                </div>
            </div>

            <div className='p-5 bg-gray-50 w-full h-1/2 rounded-lg'>
                <h2 className='text-md font-medium text-gray-500'>
                    Latest orders
                </h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Order ID</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Item Name</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead>Customer ID</TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Andrew Tate Top G</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                            <TableCell>LS112</TableCell>

                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Tony Robbins Course</TableCell>
                            <TableCell className="text-right">$20.00</TableCell>
                            <TableCell>LS112</TableCell>

                        </TableRow>
                    </TableBody>
                    </Table>


            </div>
        </div>

    </div>
  )
}