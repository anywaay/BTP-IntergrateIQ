import React from 'react'
import { GoogleGeminiEffectDemo } from './ui/aicard'
import { FlipWordsAI } from './ui/flipaiword'
import { AIChatbotCard, AIsupportCard, MeteorsDemo, UIUXCard, VoiceAgentCard, WebsiteCard } from './ui/serviceCard'
import { LampContainer } from './ui/Lamp'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';


function IntegrationDemo() {
  const navigate = useNavigate();
  return (
    <div  id="Services"
    className='w-full pb-32- p-7 lg:p-16 xl:p-32 bginte rounded-tl-[40px] rounded-tr-[40px]'>
    <div className='w-full flex flex-col justify-center items-center'>
    <div className='hidden pt-28 max-w-[80%] md:flex flex-col items-center text-center font-semibold'>
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className='flex flex-col items-center justify-center'
      >
        <h1 className='max-w-[83%] text-[3.2vw] leading-[3.5vw] pt-10'>Elevate Your <span className='customtext'>Digital Presence</span> with Our Comprehensive Services  </h1>
      <p className='text-[1.2vw] text-zinc-300 pt-16'>Transform your business with our AI-driven multilingual chatbots, offering seamless 
      text-to-text, speech-to-speech, and text-to-speech interactions. Elevate your customer experience to the next level.</p>
      </motion.h1>
    </LampContainer>
    </div>

    <div className=' w-[90%] md:hidden flex flex-col items-center text-center font-semibold'>
        <h1 className=' w-[90%] text-[30px] leading-[28px] sm:leading-[4.5vw] pt-5'>Elevate Your <span className='customtext'>Digital Presence</span> with Our Comprehensive Services  </h1>
      <p className='text-[11px] text-zinc-300 pt-7'>We craft beautiful UI/UX designs, build full-stack solutions, and create AI chatbots 
      and voice agents. Plus, we boost your brand with expert SEO, marketing, and reputation management. Let's take your business to the next level.</p>
    </div>

    
    <div className='w-full pt-0 grid md:grid-cols-2 lg:grid-cols-3 gap-10 translate-y-[10vh] md:-translate-y-[20vh]'>
    {/* <WebsiteCard /> */}
    {/* <UIUXCard /> */}
    {/* <MeteorsDemo /> */}
    <AIsupportCard />
    <AIChatbotCard />
    <VoiceAgentCard />
    </div>
    <div className='mb-32 md:mb-2'>
    <button onClick={() => { navigate("/demo")}} className='mt-0 md:text-[1.5vw] demobutton px-6 py-2 rounded-xl ease-in duration-200 translate-y-[15vh] md:-translate-y-[5vh]'> Book A Demo - See How it Works!</button> 
    </div>
    </div>
    </div>
  )
}

export default IntegrationDemo