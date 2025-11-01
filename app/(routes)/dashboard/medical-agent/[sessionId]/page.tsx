
"use client"
import React,{useEffect} from 'react';
import { useParams } from 'next/navigation';
const MedicalVoiceAgent=() => {
const{sessionId}=useParams();
const [sessionDetails,setSessionDetails]=React.useState(null);

const getSessionDetails=async()=>{

    alert(">>> all good")

    console.log(">>> sessionId",sessionId);
    try{
        const response=await fetch(`/api/session-chat?sessionId=${sessionId}`);
        const data=await response.json();
        console.log(">>>,data",data);
    }catch(error){
        console.log(">>> error",error);
    }
}
 
const addSeession=async()=>{
    try{
        const response=await fetch('/api/session-chat',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "conversationId": "conv_12345",
                "notes": "Patient mentioned headache and fever for 3 days.",
                "report": "Suggested blood test and prescribed paracetamol.",
                "selectedDoctor": {
                    "id": 7,
                    "name": "Hutan Ashrafian, MD/PhD",
                    "description": "A surgeon and biologist computational",
                    "specialization": "Robotic surgery & computational biology",
                    "image": "/doctor4.png",
                    "agentPrompt": "Offer recommendations for integrating AI into surgical planning and"
                    }
            })
        });
        const data=await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

useEffect(()=>{
   // addSeession()
   getSessionDetails();
}
,[sessionId]);
    return (
        <div>
            <h1>Medical Voice Agent</h1>
           <p>sessionId:{sessionId}</p>
        </div>
    );
}
export default MedicalVoiceAgent;