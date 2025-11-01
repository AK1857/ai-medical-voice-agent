import HistoryList from './_components/historyList';
import DoctorAgentList from './_components/doctorAgentList';
import { Button } from '@/components/ui/button';
import AddNewSessionDialog from './_components/addNewSessionDialog';
const DashboardPage = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-200 my-5">
      <h1 className='font-bold text-2xl'>Dashboard</h1>
      <AddNewSessionDialog />
      </div>
      
     <HistoryList />
     <DoctorAgentList />
    </>
  );
}
export default DashboardPage;