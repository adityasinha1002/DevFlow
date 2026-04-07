import { askAI } from "./ai";
import { createFile } from "./fileManager";

export async function runAgent(prompt: string) {

 const response = await askAI(`
You are an autonomous coding agent.

Return ONLY valid JSON.

Format:

{
 "files":[
  {
   "name":"filename",
   "content":"file content"
  }
 ]
}

Task:
${prompt}
`);

 if (!response) {
  throw new Error("AI returned empty response");
}

const parsed = JSON.parse(response);

 for (const file of parsed.files) {
  createFile(file.name, file.content);
 }

}