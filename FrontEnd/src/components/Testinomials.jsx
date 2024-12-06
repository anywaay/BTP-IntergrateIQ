import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/movingCards";
import { BackgroundBeamsWithCollision } from "./ui/collisionbg";

function Testinomials() {
  return (
      <BackgroundBeamsWithCollision>
    <div className="w-full h-[75vh] sm:h-[74vh] md:h-screen relative z-0 mb-20">
    <div className="w-full flex relative z-20 justify-center text-center pt-20 md:pt-48">
        <h1 className="uppercase font-semibold text-3xl sm:text-4xl md:text-6xl">Trusted <br /> <span className="font-bold"> COLLABORATORS</span></h1>
    </div>
    <div className=" my-32 rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    <InfiniteMovingCards
      items={testimonials}
      direction="right"
      speed="slow"
    />
  </div>
</div>
    </BackgroundBeamsWithCollision>
  )
}

export default Testinomials

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Ayush Tripathi",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "Aayush Kumar",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Arihant Jain",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Arnav Sao",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Ankur Kumar",
    title: "Moby-Dick",
  },
];
