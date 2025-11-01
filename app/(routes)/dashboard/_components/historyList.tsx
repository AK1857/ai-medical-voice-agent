"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AddNewSessionDialog from './addNewSessionDialog';
const HistoryList = () => {


    const [HistoryList,setHistoryList] = useState([])
  return (<div className='m-10'>

        {HistoryList.length==0?<div className='flex items-center flex-col justify-center border border-dashed rounded-2xl'>
        <Image src="/medical-assistent.png" alt="No History" width={200} height={200} />
     
        <h2 className='font-bold font-size:xl'>No History</h2>
        <p>Your recent activity will appear here.</p>
        <AddNewSessionDialog />
        
        </div>
        :
        <div>{HistoryList.map((item)=>{
            return <div>History Item</div>
        })} </div>}



  </div>);
}
export default HistoryList;