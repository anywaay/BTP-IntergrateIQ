import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracingBeam";
import socialads from "../assets/contentwriting.jpg"
import shorform from "../assets/uius2.jpg";

function Expertise() {
  return (
    <div className="bg-zinc-100 flex flex-col items-center pt-32">
    <h1 className="max-w-[90%] md:max-w-[75%] text-center text-4xl md:text-6xl text-zinc-900 font-semibold">Expertise Spotlight,<br /> Showcasing Our Services</h1>

    <TracingBeam className="px-6">
    <div className="ml-4 md:ml-0 w-full mx-auto antialiased pt-16 relative">
      {dummyContent.map((item, index) => (
        <div key={`content-${index}`} className="mb-24 flex flex-col md:flex-row justify-center items-center">
            <div className="w-full flex flex-col md:flex-row md:items-end h-[280px] md:h-[400px]">
            <div className="bg-[#8F95A026] text-black flex flex-col pl-6 md:pl-10 lg:pl-16 justify-center rounded-tl-xl rounded-tr-lg md:rounded-tr-none md:rounded-bl-xl w-full h-full md:h-[92%]">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-1 md:pb-4 max-w-[95%] lg:max-w-[70%] chatbottext">
            {item.title} 
            </h1>
            <p className="pt-1 md:pt-3 font-semibold text-zinc-800 w-[95%] md:w-[90%] lg:w-[80%] text-[14px] sm:text-lg">
            {item.description}
            </p>
            </div>
            </div>
            <div className="overflow-hidden w-full h-[200px] md:h-[400px] bg-[#1b0f57e1] md:rounded-tr-lg rounded-br-lg rounded-bl-lg md:rounded-bl-none md:rounded-tl-lg flex justify-start">
            <img
                src={item.image}
                alt="blog thumbnail"
                className={`w-full ${item.badge === 3 ? 'object-cover' :'object-fill'}`}
              />
            </div>
          {/* <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
            {item.badge}
          </h2>

          <p className={twMerge("text-xl mb-4")}>
            {item.title}
          </p>

          <div className="text-sm  prose prose-sm dark:prose-invert">
            {item?.image && (
              <img
                src={item.image}
                alt="blog thumbnail"
                height="1000"
                width="1000"
                className="rounded-lg mb-10 object-cover"
              />
            )}
            {item.description}
          </div> */}
        </div>
      ))}
    </div>
  </TracingBeam>
  </div>
  )
}

export default Expertise


const dummyContent = [
  {
    title: "Copywriting",
    description: (
      <>
        <p>
        Weave captivating narratives that not only grip the imagination but also resonate deeply, fostering engagement 
        and loyalty with strategic, creative content that sets your brand narrative apart and speaks directly to the 
        heart of your audience.
        </p>
      </>
    ),
    badge: 1,
    image: "https://www.hubspot.com/hs-fs/hubfs/Writing%20an%20Effective%20Email.png?width=595&height=400&name=Writing%20an%20Effective%20Email.png",
  },
  {
    title: "Web Development",
    description: (
      <>
        <p>
        Tailor a unique and impactful virtual presence with custom, responsive web designs that engage users and transform their digital 
        experience into an unforgettable journey with your brand, making every click a step towards conversion.
        </p>
      </>
    ),
    badge: 2,
    image: "https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg"
  },
  {
    title: "SEO & SEM",
    description: (
      <>
        <p>
        Propel your online visibility to new heights with expert SEO strategies and targeted SEM campaigns, ensuring that your 
        brand not only stands out in the crowded digital marketplace but also becomes a beacon for those seeking your services.
        </p>
      </>
    ),
    badge: 3,
    image: "https://viecmarketing.com/blog/wp-content/uploads/2022/01/image-27.jpeg"
  },
  {
    title: "Social Media Ads",
    description: (
      <>
        <p>
        Leverage the powerful dynamics of social media platforms with finely tuned, data-driven ads, designed to captivate 
        and engage on platforms like Google and TikTok, strategically placing your brand in the spotlight of your audience’s daily media flow.
        </p>
      </>
    ),
    badge: 4,
    image: socialads
  },
  {
    title: "UI/UX",
    description: (
      <>
        <p>
        Deliver exceptional user experiences with our UI/UX design services. We craft intuitive, visually appealing interfaces that 
        engage users and enhance usability. Our designs are tailored to your business goals, ensuring your digital products are both functional and delightful to use.
        </p>
      </>
    ),
    badge: 5,
    image: shorform
  },
];
