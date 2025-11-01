
 import { AiDoctorAgets } from "@/shared/list";
 import DoctorAgetCard from "./doctorAgetCard";
const DoctorAgentList = () => {
// console.log(AiDoctorAgets);
// {console.log("AiDoctorAgets",AiDoctorAgets)}
  return <div className="mt-10">
   
   <h1 className="font-bold text-2xl"> Doctor Agent List</h1> 
   <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">

{AiDoctorAgets.map((doctor,index)=>(
      <div key={index} className="flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <DoctorAgetCard doctorAgent={doctor}/>
        </div>))}
   </div>
  </div>;
}
export default DoctorAgentList;