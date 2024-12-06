import React from "react";

export default function UserMessage({ text, loading }) {
  return (
    <div className="message-container w-full flex justify-end items-start my-4">
      <div className="user-message float-right text-[14px] sm:text-[17px] lg:text-[19px] min-w-[60px] text-left max-w-[60%] px-4 py-2 mx-2.5 text-zinc-200 bg-[#323232a7]">
        {loading ? (
          <div className="dots-container">
            <span className="dot-animation">.</span>
            <span className="dot-animation">.</span>
            <span className="dot-animation">.</span>
          </div>
        ) : (
          text
        )}
      </div>
    </div>
  );
}
