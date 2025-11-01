import { currentUser } from "@clerk/nextjs/server";
import { NextRequest,NextResponse } from "next/server";
import { db } from "@/config/db";
import { sessionsChatTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import {v4 as uuidv4} from 'uuid';

export async function POST(request: NextRequest) {
    try {
      // 1️⃣ Parse request body
      const { conversationId, notes, report, selectedDoctor } = await request.json();

      // 2️⃣ Get current user from Clerk
      const user = await currentUser();
      console.log ("user",user)
      if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
  
      // 3️⃣ Validate required fields
      if (!conversationId) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
  
      // 4️⃣ Generate sessionId and timestamp
      const sessionId = uuidv4();
      const createdAt = new Date().toISOString();

      const obj={
        userId: user.id, // make sure userId is integer, adjust if needed
        sessionId,
        createdAt,
        createdBy: user.primaryEmailAddress?.emailAddress || "unknown",
        conversationId,
        notes: notes || null,
        report: report || null,
        selectedDoctor:selectedDoctor ? JSON.stringify(selectedDoctor) : null // Convert object to JSON string
      }
console.log(">>> obj",obj)
     // return NextResponse.json(obj, { status: 201 });
  
      // 5️⃣ Insert into DB
      const newSession = await db.insert(sessionsChatTable).values(obj).returning();
  console.log(">>> newSession",newSession)
      // 6️⃣ Return inserted record
      return NextResponse.json(newSession[0], { status: 201 });
    } catch (error) {
      console.error("Error creating session:", error);
      return NextResponse.json({ "error Messeage": "Internal Server Error" ,info:error.message}, { status: 500 });
    }
  }

export async function GET(request: NextRequest) {
  try {
    const user = await currentUser();
    const {searchParams} = new URL(request.url);
    const sessionId = searchParams.get('sessionId');
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const email = user.primaryEmailAddress?.emailAddress;
    if (!email) {
      return NextResponse.json({ error: "Email not found" }, { status: 400 });
    }

    // @ts-ignore
    const result = await db.select().from(sessionsChatTable).where(eq(sessionsChatTable.sessionId, sessionId));

    return NextResponse.json(result[0], { status: 200 });
  } catch (error) {
    console.error("Error fetching sessions:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}