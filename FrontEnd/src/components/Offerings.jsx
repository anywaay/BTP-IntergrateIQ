import React, {useEffect, useState} from 'react'
import { Boxes } from './ui/BgBox'
import { CardHoverEffectDemo } from './ui/cards'
// import { cn } from "../utils/cn";

const cardValues = [
  {name: "Experience", content: "With years of hands-on experience in Marketing , We bring a wealth of knowledge and expertise to every project.",
    imgSrc: "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d16133302d5_e1.svg"
  },
  {name: "Expert Team", content: "Our team consists of experienced professionals who are experts in their respective fields.",
    imgSrc: "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d16133302da_e2.svg"
  },
  {name: "Legacy", content: "With years of hands-on experience in Marketing , We bring a wealth of knowledge and expertise to every project.",
    imgSrc: "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d16133302d8_e3.svg"
  },
  {name: "Design", content: "Meticulous attention to detail is at the core of our design process, ensuring a polished and flawless end product.",
    imgSrc: "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d16133302d9_e4.svg"
  },
  {name: "Data-Driven Approach", content: "We rely on data and analytics to inform our decisions and optimize results.",
    imgSrc: "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d16133302d7_ee5.svg"
  },
  {name: "Proven Results", content: "We have a track record of delivering successful campaigns that drive growth and ROI.",
    imgSrc: "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d16133302db_ee6.svg"
  },
]

function Offerings() {
  const [hoverTransforms, setHoverTransforms] = useState(Array(cardValues.length).fill(''));
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const generateRandomTransform = () => {
    const rotations = [2, -2, 1, -1];
    const scales = [1.1, 1.1];
    const rotate = rotations[Math.floor(Math.random() * rotations.length)];
    const scale = scales[Math.floor(Math.random() * scales.length)];
    return `rotate(${rotate}deg) scale(${scale})`;
  };

  useEffect(() => {
    if (hoveredIndex !== null) {
      const newTransforms = [...hoverTransforms];
      newTransforms[hoveredIndex] = generateRandomTransform();
      setHoverTransforms(newTransforms);
    }
  }, [hoveredIndex]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setHoverTransforms(Array(cardValues.length).fill(''));
  };

  return (
    <div id="whyUs" className="relative w-full overflow-hidden bginte flex px-[5vw] flex-col gap-5 items-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 opacity-[0.9] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className='relative z-20 uppercase mt-[20vh] text-6xl text-center'>Why Work With Us</h1>
      <p className='relative z-20 text-lg text-zinc-400 max-w-[60%] text-center'>
        In the world of design, collaboration is key, and here's why partnering with us is the right choice
      </p>
      
      <div className='relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] gap-10 my-16'>
        {cardValues.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-evenly items-start bg-blue-200/20 backdrop-blur-lg rounded-tl-xl rounded-br-xl p-5 transition-transform duration-300 ease-in-out hover:opacity-90 hover:shadow-xl"
            style={{
              transform: hoverTransforms[index],
              transition: 'transform 150ms ease-in-out',
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={item.imgSrc} alt={item.name} />
            <h1 className='text-white font-semibold pt-5 text-3xl'>{item.name}</h1>
            <p className='text-zinc-300 pt-4 leading-5 font-["Satoshi_Variable"]'>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



export default Offerings