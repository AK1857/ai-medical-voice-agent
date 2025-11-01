"use client"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import React, { use, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import DoctorAgetCard, { DoctorAgetCardProps } from "./doctorAgetCard";
import SuggestedDoctorCard from "./sugesstedDoctorCard"
const AddNewSessionDialog = () => {
  const router=useRouter();
    const [note,setNote]=useState<String>("");
    const[selectedDoctor,setSelectedDoctor]=useState<DoctorAgetCardProps>();
    const [suggestedDoctors,setSuggestedDoctors]=useState<DoctorAgetCardProps[]>();
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(false);


    const onStartConsultaion=async()=>{
      if(!selectedDoctor){
        alert("Please select a doctor");
        return;
      }
      setLoading(true);
        try{
            const response=await axios.post('/api/session-chat',
               {
                    "conversationId": "conv_12345",
                    "notes": note,
                    "report": null,
                    "selectedDoctor": selectedDoctor
                }
            );
           // const data=await response.json();
            console.log(response.data);
            if(response.data?.sessionId){
                router.push(`/dashboard/medical-agent/${response.data.sessionId}`);
            }
            setLoading(false);
        }catch(error){
            console.log(error);
        }
    }
    const OnNextClick=async()=>{
      setLoading(true);
    const getSuggestedDoctors= await axios.post('/api/suggested-doctores',
        {
            notes:note,
            selectedDoctor:selectedDoctor
        }
    );
    if(getSuggestedDoctors?.data?.doctors?.length>0){
        setSuggestedDoctors(getSuggestedDoctors.data.doctors);
        setLoading(false);
    }

    console.log(">>> suggestied doctor",getSuggestedDoctors.data);
    }

    const onStartConversation=async()=>{
      setLoading(true);
        try{
            const response=await axios.post('/api/session-chat',
               {
                    "conversationId": "conv_12345",
                    "notes": note,
                    "report": null,
                    "selectedDoctor": null
                }
            );
           // const data=await response.json();
            console.log(response.data);
            if(response.data?.sessionId){
                router.push(`/dashboard/medical-agent/${response.data.sessionId}`);
            }
            setLoading(false);
        }catch(error){
            console.log(error);
        }
    }
  return (<div>
    <Dialog>
  <DialogTrigger>
  <Button className='mt-5 mb-5'>+Start new Session</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Basic Details</DialogTitle>
      <DialogDescription asChild>
    
       {!suggestedDoctors ?<div>
        <h1>Add Symptom or other Details</h1>
        <Textarea placeholder="Add Details here...." className="h-[200px]" 
        onChange={(e)=>setNote(e.target.value)}
        />
       </div>
       :<div>

       <h1>Select a Doctor</h1>
        <div className=" grid grid-cols-3 gap-5">
          {/*suggestedDoctors && <DoctorAgetCard doctorAgent={suggestedDoctors[0]}/> */}
        {suggestedDoctors.map((doctor,index)=>(
        <SuggestedDoctorCard key={index} DoctorAgent={doctor} setSelectedDocter={()=>setSelectedDoctor(doctor)}/>
        // <h1 key={index}>{doctor.name}</h1>
          ))}
          </div>
        </div>
        }
   
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
        <DialogClose>
        <Button variant="outline">Cancel</Button>
        </DialogClose>
        
       {!suggestedDoctors? <Button disabled={!note} onClick={OnNextClick}  >
         {loading && <Loader2 className="animate-spin" />} 
          Next <ArrowRight/></Button>
          :<Button onClick={()=>onStartConsultaion()}>Start Consultant</Button>
}
    </DialogFooter>
  </DialogContent>
</Dialog>
  </div>);
}
export default AddNewSessionDialog;