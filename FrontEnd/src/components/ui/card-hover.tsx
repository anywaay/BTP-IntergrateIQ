"use client";
import React from "react";
import { cn } from "../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Item = {
  title: string;
  imgSrc: string;
  link: string;
};

type HoverEffectProps = {
  items: Item[];
  className?: string;
};

export const HoverEffect = ({
  items,
  className,
}: HoverEffectProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.link}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-100/[0.8] dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="p-[0px]">
          <div className='flex flex-col items-start bg-[#f8f6fa] rounded-tl-xl rounded-br-xl p-2'> 
      <img src='https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d16133302d5_e1.svg' />
      <h1 className='text-black font-semibold pt-2 text-3xl'>Experience</h1>
      <p className='text-zinc-700 pt-3 leading-5 font-["Satoshi_Variable"]'>With years of hands-on experience in Marketing , 
      We bring a wealth of knowledge and expertise to every project.</p>
      </div>

          </Card>
        </div>
      ))}
    </div>
  );
};

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const Card = ({
  className,
  children,
}: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-tl-xl rounded-br-xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

type CardTitleProps = {
  className?: string;
  children: React.ReactNode;
};

export const CardTitle = ({
  className,
  children,
}: CardTitleProps) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

type CardDescriptionProps = {
  className?: string;
  children: React.ReactNode;
};

export const CardDescription = ({
  className,
  children,
}: CardDescriptionProps) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
