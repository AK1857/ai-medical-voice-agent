import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/config/OpenAiModel";
import { AiDoctorAgets } from "@/shared/list";




export async function POST(req:NextRequest) {
    const {notes} = await req.json();
    try {
        const completion = await openai.chat.completions.create({
            model: 'openai/gpt-4o-mini',
            messages: [
                { "role": 'system', "content": JSON.stringify(AiDoctorAgets) },
              {
                "role": 'user',
                "content": 'User notes/sysptoms:'+notes+'Based on the user notes/symptoms, suggest the  list of  doctors from the above list in JSON format. Only provide the JSON object of the  doctors.',
              },
            ],
          });
          console.log(completion.choices[0].message);

          const rowResponse= completion.choices[0].message;
          const response=rowResponse.content.replace("```json","").replace("```","").trim();
          const doctors = JSON.parse(response)
        
        return new Response(JSON.stringify({doctors}),{status:200});
    }
    catch(error){
        console.log(">>> error",error.message);
        // @ts-ignore
        return new Response(JSON.stringify({error}),{status:500});
    }
}