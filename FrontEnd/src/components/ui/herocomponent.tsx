"use client";
import React from "react";
import { HeroParallax } from "./hero-parallax";
import img1 from "../../assets/daccord.jpg";
import img2 from "../../assets/dual_dense.jpg"
import img3 from "../../assets/electric-vehicle.jpg"
import img4 from "../../assets/explorex.jpg"
import img5 from "../../assets/waffle.jpg"
import img6 from "../../assets/clothes.jpg"
import img7 from "../../assets/connect.jpg"
import img8 from "../../assets/nextgen.jpg"
import img9 from "../../assets/spiderman.jpg"



export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Daccord",
    link: "https://gomoonbeam.com",
    thumbnail: img1,
  },
  {
    title: "Dual Dense",
    link: "https://cursor.so",
    thumbnail: img2,
  },
  {
    title: "EV Website",
    link: "https://userogue.com",
    thumbnail: img3,
  },

  {
    title: "Explorex",
    link: "https://editorially.org",
    thumbnail: img4,
  },
  {
    title: "Waffle Mill",
    link: "https://editrix.ai",
    thumbnail: img5,
  },
  {
    title: "Fashion",
    link: "https://app.pixelperfect.quest",
    thumbnail: img6,
  },

  {
    title: "BoxChampy",
    link: "https://algochurn.com",
    thumbnail: img7,
  },
  {
    title: "NextGen",
    link: "https://ui.aceternity.com",
    thumbnail: img8,
  },
  {
    title: "SpiderMan",
    link: "https://tailwindmasterkit.com",
    thumbnail: img9,
  },
  {
    title: "Daccord",
    link: "https://smartbridgetech.com",
    thumbnail: img1,
  },
  {
    title: "Dual Dense",
    link: "https://renderwork.studio",
    thumbnail: img2,
  },

  {
    title: "EV Website",
    link: "https://cremedigital.com",
    thumbnail: img3,
  },
  {
    title: "Explorex",
    link: "https://goldenbellsacademy.com",
    thumbnail: img4,
  },
  {
    title: "Waffle Mill",
    link: "https://invoker.lol",
    thumbnail: img5,
  },
  {
    title: "Fashion",
    link: "https://efreeinvoice.com",
    thumbnail: img6,
  },
];
