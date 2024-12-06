import React, { useState, useEffect, useRef } from "react";
import logoImg from "../assets/iq_logo.jpg";
export default function BotMessage({ fetchMessage, updateScroll }) {
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [audiotext, setAudioText] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const hasFetched = useRef(false);

  function playBase64Audio(base64Audio) {
    if (!audioRef.current) {
      audioRef.current = new Audio(`data:audio/wav;base64,${base64Audio}`);

      // Add event listener to handle audio ending
      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false); // Reset the play button to pause state
      });
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.currentTime = 0; // Reset to start
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    async function loadMessage() {
      if (hasFetched.current) return;
      hasFetched.current = true;

      const msg = await fetchMessage();
      setLoading(false);
      setMessage(msg.message);
      updateScroll();

      if (msg.audiofile.status) {
        setAudioText(msg.audiofile.audio_base64);
      }
    }
    loadMessage();
  }, [fetchMessage]);

  return (
    <div className="message-container w-full flex justify-start items-start">
      <img
        className="w-[35px] h-[35px] sm:w-[40px] overflow-hidden sm:h-[40px] rounded-full"
        src={logoImg}
        alt="logo"
      />

      <div className="bot-message float-left py-2 px-1 sm:px-5 mx-1.5 text-zinc-300 text-[14px] sm:text-[17px] max-w-[80%] sm:max-w-[60%] text-left min-w-[40px] relative">
        {isLoading ?
          (
          <div className="bounce-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )
         : message}
        <br />
        <div className="relative mt-3">
          {audiotext && (
            <button
              onClick={() => playBase64Audio(audiotext)}
              className="w-[30px] h-[30px] text-white flex justify-center items-center rounded-full shadow-lg transition-all duration-300 relative group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-6 h-6 ${isPlaying ? "text-blue-400" : "text-gray-400 group-hover:text-gray-200"}`}
              >
                <path d="M3 10v4" />
                <path d="M7 7v10" />
                <path d="M11 4v16" />
                <path d="M15 7v10" />
                <path d="M19 10v4" />
              </svg>
              <span className="tooltip-text absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {isPlaying ? "Pause" : "Play"}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
