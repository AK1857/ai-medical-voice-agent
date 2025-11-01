import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import {db} from "@/config/db";
//import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { usersTable } from "@/config/schema";

export async function POST(req:NextRequest) {
    

    const user= await currentUser();

  
  try{
    const users= await db.select().from(usersTable)
    // @ts-ignore
    .where(eq(usersTable.email,user?.primaryEmailAddress.emailAddress));

    if(users.length>0){
      return NextResponse.json({message:"User already exists",user:users[0]},{status:400});
    }
    else{

        const newUser= await db.insert(usersTable).values({
            // @ts-ignore
            name:user?.fullName,
            // @ts-ignore
            email:user?.primaryEmailAddress.emailAddress,
            age:18,
            credits:10
            // @ts-ignore
        }).returning({usersTable});
    
        return NextResponse.json({message:"User created successfully",user:newUser[0]},{status:201});
    }

  }catch(error){
    console.log(error);
    return NextResponse.json({message:"Internal Server Error"},{status:500});
  }
    
}