"use client";
import React from "react";
import { HoverEffect } from "./card-hover";

export function CardHoverEffectDemo() {
  return (
    <div className="mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "24x7 Customer Support",
    imgSrc: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320",
    link: "https://stripe.com",
  },
  {
    title: "Automated Employee Support",
    imgSrc: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320",
    link: "https://netflix.com",
  },
  {
    title: "Conversational Commerce",
    imgSrc: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320",
    link: "https://google.com",
  },
  {
    title: "AI Copilots trained on your Data",
    imgSrc: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320",
    link: "https://meta.com",
  }
];
