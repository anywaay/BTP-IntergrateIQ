import React from 'react'
import AiAgentPic from "../assets/aiagents.jpg";
import TradtionalPic from "../assets/traditionalchatbo.jpg"
const aichats=[
    {imgSrc:"https://cdn.prod.website-files.com/6643307d563d3d1613330141/665f1b8567f7a0de835aaf13_s1.svg", title: "Pre-Set Answers: ", desc: "Rely on Fixed Responses"},
    {imgSrc:"https://cdn.prod.website-files.com/6643307d563d3d1613330141/665f1b852e7f6bd51698a3a7_s2.svg",title: "User Dissatisfaction: ", desc: "Frequently pose irrelevant or redundant questions."},
    {imgSrc:"https://cdn.prod.website-files.com/6643307d563d3d1613330141/665f1b8518c07d493d2023e2_s3.svg",title: "Rigid Workflow: ", desc: "Must predict and plan for every possible scenario in advance."},
    {imgSrc:"https://cdn.prod.website-files.com/6643307d563d3d1613330141/665f1b85501420f077ef45c7_s4.svg",title: "Lack of Adaptability: ", desc: "Struggle to handle new or unexpected interactions."},
    {imgSrc:"https://cdn.prod.website-files.com/6643307d563d3d1613330141/665f1b8541b0c47650f30c2f_s5.svg",title: "Low Effectiveness: ", desc: "Have difficulty resolving complex issues."},
]

const manualchats=[
  {imgSrc:"https://cdn.prod.website-files.com/6643307d563d3d1613330141/665f19db2cf9d06d14d568fa_1.svg", title: "Adaptive Problem Solving: ", desc: "Move beyond scripts to analyze and respond to each inquiry."},
  {imgSrc:"https://cdn.prod.website-files.com/6643307d563d3d1613330141/665f19db9a5c366de762442c_2.svg",title: "Seamless Data Integration: ", desc: "Utilize company knowledge and integrate with CRMs, databases, and APIs."},
  {imgSrc:"https://cdn.prod.website-files.com/6643307d563d3d1613330141/665f19db851d9be1032425ff_3.svg",title: "Personalized Solutions: ", desc: "Deliver tailored answers for specific situations."},
  {imgSrc:"https://cdn.prod.website-files.com/6643307d563d3d1613330141/665f19db7c911003767cd8a1_4.svg",title: "Advanced Task Execution: ", desc: "Handle complex actions like processing refunds, cancellations, etc."},
  {imgSrc:"https://cdn.prod.website-files.com/6643307d563d3d1613330141/665f19db74fb773929c17927_5.svg",title: "Comprehensive Multilingual Support: ", desc: "Manage queries in over 50 languages across various channels."},
]


function ChatBotComponent() {
  return (
    <div
    className='pt-28 flex flex-col justify-start items-center w-full pb-28 bg-white'>
        <div className='flex justify-center items-center w-[full] md:max-w-[65vw] pb-20'> 
            <div className='flex justify-center items-center flex-col font-["Outfit"]'>
            <h1 className="text-black text-[28px] text-center md:text-[3.3vw] font-semibold chatbottext">Why Are AI Agents More Efficient</h1>
            <h1 className="text-black text-[24px] text-center md:text-[3.1vw] font-semibold">Than Traditional Chatbots?</h1>
            <p className='text-zinc-800 max-w-[300px] md:max-w-[38vw] text-center text-[10px] md:text-[1.2vw]'>Instead of following scripts, AI Agents dynamically solve problems
            in real-time. <span className='font-semibold'>Powered by our AI Reasoning Engine.</span></p>
            </div>
        </div>

        <div className=' w-full sm:w-[65%] md:w-[80%] lg:w-[85%] xl:w-[80%]  flex flex-col lg:flex-row justify-between items-center lg:justify-between lg:items-start gap-10'>
            <div className=' w-[90%] md:w-3/4 lg:w-1/2 rounded-[20px] bg-[#F5F5F5] p-5 md:p-12  pb-10 flex flex-col justify-start'>
            <h1 className='font-["Outfit"] text-zinc-800 text-[20px] md:text-[2vw] font-semibold'> Traditional chatbots:</h1>
            <div className='mb-10 mt-5 md:mt-10 border-solid border-zinc-800 border-[1px] rounded-[10px] overflow-hidden'>
            <img className='h-[370px] md:h-[490px]' src={TradtionalPic} />
            </div>  
            {aichats.map((item)=>(
            <div className='flex w-[100%] items-start mb-5'>
            <img className='w-[11%]' src={item.imgSrc} />  
              <div className='w-[88%] pl-4 h-[100%] text-black text-[13px] md:text-[18px]'>
                  <p> <span className='font-semibold'>{item.title} </span> {item.desc}</p>
              </div>
          </div>
            ))}
            </div>

            <div className='w-[90%] md:w-3/4 lg:w-1/2 rounded-[20px] bg-[#F5F0FF] p-5 md:p-12 pb-10 flex flex-col justify-start'>
            <h1 className='font-["Outfit"] text-zinc-800 text-[20px] md:text-[2vw] font-semibold'> AI Agents:</h1>
            <div className='mb-10 mt-5  md:mt-10 rounded-[10px] border-solid border-zinc-800 border-[1px] overflow-hidden'>
            <img className='h-[370px] md:h-[490px]' src={AiAgentPic} />
            </div>  
            {manualchats.map((item)=>(
            <div className='flex w-[100%] items-start mb-5 '>
            <img className='w-[11%]' src={item.imgSrc} />  
              <div className='w-[88%] pl-4 h-[100%] text-black text-[13px] md:text-[18px]'>
                  <p> <span className='font-semibold text-[#6B41FF]'>{item.title} </span> {item.desc}</p>
              </div>
          </div>
            ))}
            </div>
        </div>
    </div>
  )
}



export default ChatBotComponent