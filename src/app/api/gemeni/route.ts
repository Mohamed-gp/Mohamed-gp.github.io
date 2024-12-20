import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { message, history } = body;
    if (!message) {
      return NextResponse.json(
        {
          message: "Please enter a message.",
        },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // doc
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: process.env.USER_TEXT }],
        },
        {
          role: "model",
          parts: [{ text: process.env.AI_TEXT }],
        },
        {
          role: "user",
          parts: [{ text: process.env.USER_CATCH_TEXT }],
        },
        {
          role: "model",
          parts: [{ text: process.env.AI_MISTAKE_TEXT }],
        },
        {
          role: "user",
          parts: [{ text: process.env.USER_CORRECT_TEXT }],
        },
        {
          role: "model",
          parts: [{ text: process.env.AI_CORRECT_TEXT }],
        },
      ].concat(history),
      generationConfig: {
        maxOutputTokens: 1000,
      },
    } as any);
    const msg = message;

    const result = await chat.sendMessage(msg);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({
      message: text,
    });
  } catch (error) {
    console.log(error);
  }
};
