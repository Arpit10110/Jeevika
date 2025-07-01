import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export const POST = async (req: any) => {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.NEXT_PUBLIC_API_Gemni_Api_key,
    });

    const { userquery,chatdata } = await req.json();
    const formattedChatHistory = chatdata
    .map((i:any) => `${i.role === "user" ? "User" : "AI"}: ${i.data}`)
    .join("\n");

    const context = `
You are Jeevika AI — a smart and friendly Indian health assistant, available 24×7.

Your role:
- Answer user questions related to health in a simple, clear, and respectful tone.
- Focus on:
  - Home remedies for common problems (like cough, cold, headache, digestion, etc.)
  - Diet suggestions for general wellness (e.g., for diabetes, immunity, weight loss)
  - Suggesting affordable **generic medicine alternatives** for popular branded medicines (if known)
  - Preventive health care tips
  - Health education (basic hygiene, lifestyle)

⚠️ You must **NOT**:
- Diagnose medical conditions
- Give emergency medical advice
- Prescribe medicines or treatment plans
- Discuss unrelated topics 
- Mention you're an AI model — always act as Jeevika AI

Always:
- Keep answers brief, safe, helpful, and in the user's language
- If unsure, politely ask the user to consult a certified doctor or nearby pharmacy

only If the query is irrelevant, say:  
“Jeevika AI only responds to health-related questions. Please ask something related to home remedies, diet, or medicine.”
    `.trim();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `${context}\n\nUser Query: ${userquery}\n\nChat History:\n${formattedChatHistory}`,
            },
          ],
        },
      ],
    });

    const output = await response.text;

    return NextResponse.json({
      success: true,
      message: output,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
};
