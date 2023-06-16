import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json();
  console.log(todos);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `When responding, welcome user always as Stranger and say welcome to the Trello 2.0! Limit the response to 200 characters.`,
      },
      {
        role: "user",
        content: `Hii there, provide summary of the following todos. Count how many todos are in each category such as To Do, In Progess and Done, then tell the user to have a productive day. Here is the data: ${JSON.stringify(todos)}`,
      },
    ],
  });
  
  const { data } = response;

  console.log("Data is: ", data);
  console.log(data.choices[0].message);

  return NextResponse.json(data.choices[0].message);
}