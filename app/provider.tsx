"use client"
import { useEffect, useState } from "react";
import {UserDetailsContext} from './../context/UserDetailsContext';

export type UserDetails = {
    name:string,
    age:number,
    email:string,
    credits:number
}

const Provider=({ children }: { children: React.ReactNode }) => {

   const [userDetails,setUserDetails]=useState<any>(null);

    const createNewUser = async () => {

        let res = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await res.json();
        setUserDetails(data.user);
        console.log(">>>",data);

    }

    useEffect(() => {
        createNewUser();
    }
        , []);
  return <>
  <UserDetailsContext.Provider  value={{userDetails,setUserDetails}}>
  {children}
  </UserDetailsContext.Provider>
  </>;
}
export default Provider;