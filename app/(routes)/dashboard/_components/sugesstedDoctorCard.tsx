
import Image from "next/image";
import {DoctorAgetCardProps} from "./doctorAgetCard";
type props = {
   DoctorAgent: DoctorAgetCardProps,
    setSelectedDocter: any

}
const SuggestedDoctorCard = ({DoctorAgent,setSelectedDocter}:props) => {

    return <div className="flex flex-col justify-between  items-centers border rounded-2xl shadow p-3
            hover:border-blue-500 cursor-pointer
            " onClick={(e)=>setSelectedDocter(DoctorAgent)}>
            <Image src={DoctorAgent.image} 
                    alt={DoctorAgent.specialty}
                    width={70}
                    height={70}
                    className="w-[50px] h-[50px] rounded-4xl object-cover"/>
        <h1 className="font-bold text-center text-sm"> {DoctorAgent.description}</h1>
        <p className="text-xl text-card line-clamp-2">{ DoctorAgent.specialty}</p>

    </div>;
    }
export default SuggestedDoctorCard