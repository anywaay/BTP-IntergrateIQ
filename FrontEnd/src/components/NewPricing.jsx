import React from 'react'

function NewPricing() {
  return (
    <>
    <div id="pricing" class=" min-h-screen flex justify-center rounded-[20px] md:rounded-[50px] -translate-y-[50px] items-center text-black w-full  bg-[#e5e2e9]">
        <div class="w-[85%] md:w-[95%] xl:w-[80%] mt-20 pb-32">
            <div class="text-center font-semibold">
                <h1 class="text-5xl">
                    <span class="text-blue-700 tracking-wide font-semibold ">Flexible </span>
                    <span>Plans</span>
                </h1>
                <p class="pt-6 text-xl text-gray-400 w-full px-8 md:w-full font-semibold">
                    Choose a <span className='chatbottext'> monthly </span> plan that works best for you and<br/> your team.
                </p>
            </div>
            <div class="pt-32 w-full items-center gap-24 lg:gap-16 flex flex-col lg:flex-row">
                <div class="p-4 sm:p-8 bg-white text-center rounded-3xl lg:pr-16 shadow-xl w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%]">
                    <h1 class="text-black font-semibold text-2xl uppercase">Basic</h1>
                    <p className='text-zinc-500 pt-3 text-center'>Perfect for individuals and small projects.</p>
                    {/* <p class="pt-2 tracking-wide">
                        <span class="text-gray-400 align-top">$ </span>
                        <span class="text-3xl font-semibold"><span className='text-zinc-700'>XX</span>99 </span>
                        <span class="text-gray-400 font-medium">/Monthly</span>
                    </p> */}
                    <hr class="mt-4 border-1" />
                    <div class="pt-8">
                        <p class="font-semibold text-gray-400 text-left">
                            <span class="material-icons align-middle">
                                done
                            </span>
                            <span class="pl-2">
                            AI CHATBOT
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left pt-5">
                            <span class="material-icons align-middle">
                                done
                            </span>
                            <span class="pl-2">
                            Normal support
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left pt-5">
                            <span class="material-icons align-middle">
                                done
                            </span>
                            <span class="pl-2">
                            Automation
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left pt-5">
                            <span class="material-icons align-middle">
                                done
                            </span>
                            <span class="pl-2">
                            AI strategy
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left pt-5">
                            <span class="material-icons align-middle">
                                done
                            </span>
                            <span class="pl-2">
                            Busniess Evaluation
                            </span>
                        </p>

                        <a href="https://www.linkedin.com/in/aayush-kumar-debugging/" class="">
                            <p class="w-full py-4 bg-[#180b41] mt-8 rounded-xl text-white">
                                <span class="font-medium">
                                    7 Days Free Trial
                                </span>
                                <span class="pl-3 material-icons align-middle text-sm -rotate-[45deg]">
                                    east
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
                <div class="p-4 sm:p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-110 md:scale-125 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%]">
                    <h1 class="text-white font-semibold text-2xl uppercase">PRO</h1>
                    <p className='text-zinc-300 pt-3'>
                    Unlock enhanced AI capabilities, priority support, and weekly updates.
                    </p>
                    {/* <p class="pt-2 tracking-wide">
                        <span class="text-gray-400 align-top">$ </span>
                        <span class="text-3xl font-semibold"><span className='text-zinc-200'>XX</span>99 </span>
                        <span class="text-gray-400 font-medium">/Monthly</span>
                    </p> */}
                    <hr class="mt-4 border-1 border-gray-600" />
                    <div class="pt-8">
                        <p class="font-semibold text-gray-400 text-left">
                            <span class="material-icons align-middle">
                                done
                            </span>
                            <span class="pl-2">
                            AI CHATBOT
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left pt-5">
                            <span class="material-icons align-middle">
                                done
                            </span>
                            <span class="pl-2">
                            AI voice agent
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left pt-5">
                            <span class="material-icons align-middle">
                                done
                            </span>
                            <span class="pl-2">
                            Premium support
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left pt-5">
                            <span class="material-icons align-middle">
                                done
                            </span>
                            <span class="pl-2">
                            Automation
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left pt-5">
                            <span class="material-icons align-middle">
                                done
                            </span>
                            <span class="pl-2">
                            Busniess Evaluation
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left pt-5">
                            <span class="material-icons align-middle">
                                done
                            </span>
                            <span class="pl-2">
                            Other Services
                            </span>
                        </p>

                        <a href="https://www.linkedin.com/in/aayush-kumar-debugging/" class="">
                        
                            {/* <p class="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white"> */}
                            <button className="inline-flex h-12 w-full mt-8 animate-shimmer items-center justify-center rounded-md border border-slate-800 
                            bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] goldenbg  bg-[length:200%_100%] px-6 font-medium text-slate-400 
                            transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                <span class="font-medium text-[#4A2C2A]">
                                    7 days free trial
                                </span>
                                <span class="pl-2 material-icons text-[#4A2C2A] align-middle text-sm -rotate-[45deg]">
                                    east
                                </span>
                            </button>
                            {/* </p> */}
                        </a>
                    </div>
                    <div class="absolute top-4 right-4">
                        <p class="goldenbg font-semibold px-4 py-1 rounded-full uppercase text-xs text-[#4A2C2A]">Popular</p>
                    </div>
                </div>
                <div class="p-4 sm:p-8 bg-white text-center rounded-3xl lg:pl-16 shadow-xl w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] ">
                    <h1 class="text-black font-semibold text-2xl uppercase">Custom</h1>
                    <p className='text-zinc-500 pt-3'>
                    Access the full suite of AI features, 24/7 dedicated support.
                    </p>
                    {/* <p class="pt-2 tracking-wide">
                        <span class="text-gray-400 align-top">$ </span>
                        <span class="text-3xl font-semibold">CUSTOM </span>
                        <span class="text-gray-400 font-medium">/Monthly</span>
                    </p> */}
                    <hr class="mt-4 border-1" />
                    <div class="pt-8">
                    <p class="font-semibold text-gray-400 text-left">
                            <span class="material-icons align-middle">
                                done
                            </span>
                            <span class="pl-2">
                            AI CHATBOT
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left pt-5">
                            <span class="material-icons align-middle">
                                done
                            </span>
                            <span class="pl-2">
                            Custom agents
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left pt-5">
                            <span class="material-icons align-middle">
                                done
                            </span>
                            <span class="pl-2">
                            Dedicated support
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left pt-5">
                            <span class="material-icons align-middle">
                                done
                            </span>
                            <span class="pl-2">
                            Automation
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left pt-5">
                            <span class="material-icons align-middle">
                                done
                            </span>
                            <span class="pl-2">
                            Busniess Evaluation
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left pt-5">
                            <span class="material-icons align-middle">
                                done
                            </span>
                            <span class="pl-2">
                            Other Services
                            </span>
                        </p>

                        <a href="https://www.linkedin.com/in/aayush-kumar-debugging/" class="">
                            <p class="w-full py-4 bg-[#180b41] mt-8 rounded-xl text-white">
                                <span class="font-medium">
                                    Contact Us
                                </span>
                                <span class="pl-2 material-icons align-middle text-sm -rotate-[45deg]">
                                    east
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default NewPricing;