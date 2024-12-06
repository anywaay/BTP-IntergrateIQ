import React, { useEffect, useRef } from "react";

export default function Messages({ messages, botScroll }) {
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, botScroll]);

  useEffect(()=>{
    console.log("botsc", botScroll);
  },[botScroll])

  return (
    <div
      className="relative w-full h-[calc(100%-90px)] overflow-auto flex flex-col py-2.5 px-2 sm:px-6 text-zinc-400 custom-scrollbar"
    >
      <div className="relative z-10">
        {messages}
      </div>
      <div ref={endOfMessagesRef} />
    </div>
  );
}
