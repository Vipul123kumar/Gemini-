

// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   }  from "@google/generative-ai";

// //   import{ promises as fs}  from "fs";
// const fs = from("node:fs");
//   const mime = require("mime-types");
// //   import mime from "mime-type";
  
// //   const apiKey = process.env.GEMINI_API_KEY;
// const apiKey="AIzaSyDahxD8PkD23cli-3TzLmKmi9TgKqW4wdM";
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-2.5-pro-preview-03-25",
//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 65536,
//     responseModalities: [
//     ],
//     responseMimeType: "text/plain",
//   };
  
//   async function run(prompt) {
//     const chatSession = model.startChat({
//       generationConfig,
//       history: [
//       ],
//     });
  
//     const result = await chatSession.sendMessage(prompt);
//     // TODO: Following code needs to be updated for client-side apps.
//     const candidates = result.response.candidates;
//     for(let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
//       for(let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {
//         const part = candidates[candidate_index].content.parts[part_index];
//         if(part.inlineData) {
//           try {
//             const filename = `output_${candidate_index}_${part_index}.${mime.extension(part.inlineData.mimeType)}`;
//             fs.writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));
//             console.log(`Output written to: ${filename}`);
//           } catch (err) {
//             console.error(err);
//           }
//         }
//       }
//     }
//     console.log(result.response.text());
//   }
  
//    export default run;
    
 const url=" https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key="
 const API_KEY="AIzaSyAl-YICA7N8-GdnRyo8_yoGhQUA3DAgNCc"
 