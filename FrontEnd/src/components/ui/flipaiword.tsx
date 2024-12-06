import React from "react";
import { FlipWords } from "./flipword";

export function FlipWordsAI() {
  const words = ["Reputation Management", " Mordern Websites!", "AI Customer Support", "AI Chatbots"];

  return (
    <div className="flex items-start">
      <div className="font-normal">
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}