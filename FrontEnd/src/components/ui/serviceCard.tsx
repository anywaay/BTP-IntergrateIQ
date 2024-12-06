import React from "react";
import { Meteors } from "./meteorCard";

export function MeteorsDemo() {
  return (
<div className="flex justify-center">
  <div className=" w-[75%]  sm:w-[60%] md:w-full relative h-[380px] md:h-[450px] lg:h-[420px] xl:h-[500px]">
    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-200/20 to-teal-200/20 transform scale-[0.80] rounded-full blur-3xl" />
    <div className="relative shadow-xl bg-white/5 border border-white/20 backdrop-filter backdrop-blur-lg px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-center justify-evenly">
      <h1 className="font-bold text-[20px] md:text-3xl xl:text-4xl text-zinc-100 mb-3 lg:mb-6 relative z-50 uppercase">
        Reputation-Management
      </h1>

      <p className="font-normal text-[15px] xl:text-lg text-zinc-100 mb-4 relative z-50">
      Enhance your brand's credibility, improve your search rankings, and propel your business to new heights with strategies that turn your reputation into a powerful growth engine.
      </p>
      
        <div className="w-full flex flex-col items-center">
        <p className="text-[2.2vw]"> 🌟🌟🌟🌟🌟</p>
        <h1>Amazing! you got 5 star</h1>
        </div>
      {/* Meaty part - Meteor effect */}
      <Meteors number={20} />
    </div>
  </div>
</div>
  );
}

export function AIsupportCard() {
    return (
  <div className="flex justify-center">
    <div className="w-[75%]  sm:w-[60%]  md:w-full  relative h-[380px] md:h-[450px] lg:h-[420px] xl:h-[500px]">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-200/20 to-teal-200/20 transform scale-[0.80] rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-white/5 border border-white/20 backdrop-filter backdrop-blur-lg px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-evenly items-evenly">
        <h1 className="font-bold text-[20px] md:text-3xl xl:text-4xl text-zinc-100 mb-3 lg:mb-6 relative z-50 uppercase">
          AI Customer Support
        </h1>
  
        <p className="font-normal text-[15px] xl:text-lg text-zinc-100 mb-4 relative z-50">
        Harness the power of our AI outreach system to enhance customer engagement and reduce costs with intelligent, efficient support agents. Transform your customer service with the future of automation.
        </p>
        
          <div className="w-full flex flex-col items-center">
            <div className=" h-[50px] w-[90px] md:h-[80px] md:w-[120px] lg:h-[100px] lg:w-[150px] object-fit flex items-center overflow-hidden">
            <img src="https://framerusercontent.com/images/Z2iEUAsB7ibPk52BXBx59AN6M.png?scale-down-to=512" />
            </div>
          </div>
        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  </div>
    );
  }
  export function AIChatbotCard() {
    return (
  <div className="flex justify-center">
    <div className="w-[75%]  sm:w-[60%]  md:w-full relative h-[380px] md:h-[450px] lg:h-[420px] xl:h-[500px]">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-200/20 to-teal-200/20 transform scale-[0.80] rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-white/5 border border-white/20 backdrop-filter backdrop-blur-lg px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-evenly items-evenly">
        <h1 className="font-bold  text-[20px] md:text-3xl xl:text-4xl text-zinc-100 mb-3 lg:mb-6 relative z-50 uppercase">
          AI Chatbot's
        </h1>
  
        <p className="font-normal text-[15px] xl:text-lg text-zinc-100 mb-4 relative z-50">
        Automate Your Workflows with AI, Unlock the potential of our AI chatbot system to streamline tasks, reduce costs, and save valuable time. Let our AI chatbots handle the routine, so you can focus on what matters most.
        </p>
        
          <div className="w-full flex flex-col items-center">
          <div className=" h-[50px] w-[90px] md:h-[120px] md:w-[120px] lg:h-[150px] lg:w-[150px] object-fit flex items-center overflow-hidden">
          <img src="https://cdn-icons-png.flaticon.com/512/1698/1698535.png" />
            </div>
          </div>
        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  </div>
    );
  }
  export function WebsiteCard() {
    return (
  <div className="flex justify-center w-full">
    <div className="relative w-[75%]  sm:w-[60%]  md:w-full h-[380px] md:h-[450px] lg:h-[420px] xl:h-[500px]">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-200/20 to-teal-200/20 transform scale-[0.80] rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-white/5 border border-white/20 backdrop-filter backdrop-blur-lg px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-evenly items-evenly">
        <h1 className="font-bold  text-[20px] md:text-3xl xl:text-4xl text-zinc-100 mb-3 lg:mb-6 relative z-50 uppercase">
          Modern Websites
        </h1>
  
        <p className="font-normal text-[15px] xl:text-lg text-zinc-100 mb-4 relative z-50">
        Automate Your Workflows with AI, Unlock the potential of our AI chatbot system to streamline tasks, reduce costs, and save valuable time. Let our AI chatbots handle the routine, so you can focus on what matters most.
        </p>
        
          <div className="w-full flex flex-col items-center">
          <div className=" h-[50px] w-[90px] md:h-[120px] md:w-[120px] lg:h-[150px] lg:w-[150px] object-fit flex items-center overflow-hidden">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1ufhGy_niOVDsG2iMMiMysPrmLWFuesqIA&s" />
            </div>
          </div>
        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  </div>
    );
  }
  export function UIUXCard() {
    return (
  <div className="flex justify-center">
    <div className="w-[75%] md:w-full sm:w-[60%] relative h-[380px] md:h-[450px] lg:h-[420px] xl:h-[500px]">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-200/20 to-teal-200/20 transform scale-[0.80] rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-white/5 border border-white/20 backdrop-filter backdrop-blur-lg px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-evenly items-evenly">
        <h1 className="font-bold  text-[20px] md:text-3xl xl:text-4xl text-zinc-100 mb-3 lg:mb-6 relative z-50 uppercase">
          UI/UX
        </h1>
  
        <p className="font-normal text-[15px] xl:text-lg text-zinc-100 mb-4 relative z-50">
        Automate Your Workflows with AI, Unlock the potential of our AI chatbot system to streamline tasks, reduce costs, and save valuable time. Let our AI chatbots handle the routine, so you can focus on what matters most.
        </p>
        
          <div className="w-full flex flex-col items-center">
          <div className=" h-[50px] w-[90px] md:h-[120px] md:w-[120px] lg:h-[150px] lg:w-[150px] object-fit flex items-center overflow-hidden">
          <img src="https://nyusoft.com/wp-content/themes/twentytwentyone-child/images/services/UI-UX-design-services/banner-image-ui-ux.png" />
            </div>
          </div>
        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  </div>
    );
  }
  export function VoiceAgentCard() {
    return (
  <div className="flex justify-center">
    <div className="w-[75%] md:w-full sm:w-[60%] relative h-[380px] md:h-[450px] lg:h-[420px] xl:h-[500px]">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-200/20 to-teal-200/20 transform scale-[0.80] rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-white/5 border border-white/20 backdrop-filter backdrop-blur-lg px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-evenly items-evenly">
        <h1 className="font-bold  text-[20px] md:text-3xl xl:text-4xl text-zinc-100 mb-3 lg:mb-6 relative z-50 uppercase">
          AI Voice Agent
        </h1>
  
        <p className="font-normal text-[15px] xl:text-lg text-zinc-100 mb-4 relative z-50">
        Revolutionize interactions with our AI Voice Agents. Offering 24/7 support and natural conversations, our technology enhances customer service and boosts efficiency.
        </p>
        
          <div className="w-full flex flex-col items-center">
          <div className=" h-[80px] w-[80px] md:h-[120px] md:w-[120px] lg:h-[150px] lg:w-[150px] object-fit flex items-center overflow-hidden">
          <img src="https://cdn-icons-png.flaticon.com/512/4012/4012603.png" />
            </div>
          </div>
        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  </div>
    );
  }