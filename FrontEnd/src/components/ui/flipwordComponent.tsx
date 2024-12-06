import React from "react";
import { FlipWords } from "./flipword";

export function FlipWordsDemo() {
  const words = ["Business  Growth!", "Websites!", "Modern Chatbots!"];

  return (
    <div className="flex items-start">
      <div className="font-normal text-white dark:text-white">
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
