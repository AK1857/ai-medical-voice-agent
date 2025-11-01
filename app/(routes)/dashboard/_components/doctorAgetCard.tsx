"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
export type DoctorAgetCardProps = {
    index: number,
     name: string,
    specialty: string,
    image: string,
    agentPrompt:string,
    description:string

}
type props={
    doctorAgent:DoctorAgetCardProps
}
const DoctorAgetCard = ({doctorAgent}:props) => {
    let doctorAget=doctorAgent;
    console.log(doctorAget);
  return (
    <div>
        <div className="border p-5 rounded-lg shadow-md mt-5">
            <Image src={doctorAget.image} alt={doctorAget.image} width={100} height={100} className="w-24 h-24 rounded-full mx-auto mb-4"/>  
            <h2 className="text-xl font-bold mb-2">{doctorAget.name}</h2>
            <p className="text-gray-600 mb-4">{doctorAget.description}</p>
            <Button className="text-white px-4 py-2 rounded hover:bg-blue-600">Consult Now <ArrowRight/></Button>
        </div>
    </div>
  )
}

export default DoctorAgetCard