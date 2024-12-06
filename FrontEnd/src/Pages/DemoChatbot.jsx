import React, { useState, useEffect } from "react";
import BotMessage from "../ChatBotComponent/BotMessage";
import UserMessage from "../ChatBotComponent/UserMessage";
import Messages from "../ChatBotComponent/Messages";
import Input from "../ChatBotComponent/Input";
import API from "./DemoChatbotAPI";
import "./chatbotstyles.css";
import { FileUpload } from "../components/ui/file-upload";
import logoImg from "../assets/iq_logo.jpg"

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [botScroll, setBotScroll] = useState(false);
  
  const send = async text => {
    setBotScroll(false);
    const updateScroll = ()=>{
      setBotScroll(true)
    }

    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API.GetChatbotResponse(text)} updateScroll={updateScroll}
      />
    );
    setMessages(newMessages);
  };


  const audioSend = async (audio) => {
    setBotScroll(false);
    const updateScroll = ()=>{
      setBotScroll(true)
    }

    const loadingMessage = messages.concat(
      <UserMessage key={messages.length + 1} loading={true} />
    );
    setMessages(loadingMessage);
    const response = await API.GetAudioResponse(audio);

    const { message, Question } = response;

    const setQuestion = loadingMessage.slice(0, -1).concat(
      <UserMessage key={messages.length + 1} text={Question || "Not able to Understand the audio"} />,
    );
    setMessages(setQuestion);

    const audioResponse = await API.GetAudiofromText(message)
    const {nextText, audiofile} = audioResponse;

  const newMessages = setQuestion.concat(
    <BotMessage
      key={messages.length + 2}
      fetchMessage={async () => ({ message: message, audiofile })} updateScroll={updateScroll}
    />
  );
  setMessages(newMessages);
  };
  

  return (
      <div className="w-full h-full bg-zinc-900 flex justify-center">
        <div className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[60%] h-[94%] sm:h-full ">
        <div className={`${messages.length > 0 ? 'hidden' : 'flex'} h-[45%] sm:h-[30%] w-full px-4 justify-center flex-col`}>
        <h1 className="text-zinc-600 text-5xl sm:text-[65px] poppins-medium"> Hello!</h1>
        <h1 className="chatbottext text-5xl mt-3 sm:mt-2 sm:text-[60px] poppins-medium">How May I Help you today?</h1>
        </div>
        <div className={`${messages.length > 0 ? 'h-[100%]' : 'h-[55%] sm:h-[70%]'} w-full flex flex-col justify-center items-end`}>
        <Messages messages={messages} botScroll={botScroll} />
        <Input onSend={send} audioSend={audioSend} messages={messages} />
        </div>
        </div>
      </div>
  );
}

function DataUpload({setChatbotVisible}){
  const [files, setFiles] = useState([]);
  const handleFileUpload = (files) => {
    setFiles(files);
    // console.log(files);
  };
  return (
    <>
    <div className="font-[monospace] text-black w-[95%] sm:w-[40%] md:w-[35%] lg:w-[30%] xl:w-[27%] mx-auto">
    {/* <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-[#171717e9] border-neutral-800 rounded-lg"> */}
      <FileUpload onChange={handleFileUpload} setChatbotVisible={setChatbotVisible}/>
    {/* </div> */}

    </div>
    </>
  )
}

function DemoChatbot() {
  const [chatbotVisible, setChatbotVisible] = useState(false);

  useEffect(()=>{
    API.ClearPrevDocs()
  },[])

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#ffffff]">
    <div className="h-[10vh] bg-zinc-900 w-full px-2 sm:px-8 flex items-center justify-between">
    <div className="h-full flex items-center">
    <img className="object-fit h-[60%] sm:h-[85%] rounded-full overflow-hidden" src={logoImg} alt="logo" />
    <h1 className="pl-2 sm:pl-4 sm:text-2xl font-semibold">IntegrateIQ</h1>
    </div>
    <div>
    <a href="/" className="md:bg-transparent text-gray-100 block font-semibold pl-3 pr-4 py-2  md:p-0 rounded" aria-current="page" >
      Home </a>
    </div>

    </div>
    {chatbotVisible ? 
    <div className="w-full h-[90vh] flex justify-center items-center">
    <Chatbot />
    </div>
    : <div className="w-full h-[90vh] flex justify-center items-center bg-[#060606e9]">
     <DataUpload setChatbotVisible={setChatbotVisible} />
     </div>}
    </div>
  )
}

export default DemoChatbot


