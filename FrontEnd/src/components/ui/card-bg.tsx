"use client";
import React from "react";
import { BackgroundBeams } from "./card-carousal";
import { CardHoverEffectDemo } from "./cards";
import tabimg from "../../assets/tab.jpg"
import { motion } from 'framer-motion'


export function BackgroundBeamsDemo() {
  return (
    <div className="w-full bg-white pb-20">
      <div className="w-full flex flex-col items-center justify-center pt-16 sm:pt-32">
        <h1 className="w-[90%] sm:w-[90%] text-zinc-800 text-2xl sm:text-4xl md:text-6xl font-semibold mb-12 text-center">Curious How Your Custom <span className="chatbottext"> AI Agent </span><br />Transforms Interactions?</h1>
        <p className="text-zinc-800 max-w-[90%] sm:max-w-[75%] text-center mb-20 font-semibold text-[14px] sm:text-[18px]">Our AI Agent takes the data from your submitted documents and processes it using advanced natural language understanding. 
          It then creates a chatbot capable of answering questions, providing information, and engaging with users based on the specific 
          content from your documents, ensuring accurate and relevant responses tailored to your needs.</p>
        <div className="w-full flex justify-center items-center object-fill">
        <img src={tabimg} width="70%" className=" transition-transform duration-500 hover:scale-[1.15]"/>
        </div>
      </div>
    </div>
  );
}




// export function BackgroundBeamsDemo() {
//   return (
//     <div className="h-[100vh] w-full relative antialiased bg-black">
//       <div className="w-[85%] mx-auto p-4 pt-32 flex flex-col items-center justify-center">
//       <h1 className="text-white text-5xl font-semibold">How We Work</h1>
//       <div>
//         <img src={tabimg} />
//       </div>
//       </div>
//       <BackgroundBeams />
//     </div>
//   );
// }
