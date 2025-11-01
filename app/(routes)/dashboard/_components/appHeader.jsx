
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
const AppHeader = () => {
   const menuOptions=[{
        id:1,
        name:"Home",
        path:"/home"
    },
    {
        id:2,
        name:"Profiele",
        path:"/profile"
    },
    {
        id:3,
        name:"Pricing",
        path:"/pricing"
    },
    {
        id:4,
        name:"Home",
        path:"/home"
    }
]
  return (
    <div className="flex items-center justify-between p-4 shadow md:px-20 lg:px-40">
     <Image src="/logo.png" alt="Logo" width={120} height={40} />
     <div>
     <div className="flex items-center gap-10">
                {menuOptions.map((option)=>(
                    <div className='hover:font-bold cursor-pointer transition-all ' key={option.id}>
                       {option.name}
                    </div>
                ))}
            </div>
       
     </div>
     <UserButton />
    </div>
  );
}
export default AppHeader;