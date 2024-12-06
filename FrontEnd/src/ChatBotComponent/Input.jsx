import React, { useState, useRef } from 'react';
import { FaMicrophone } from 'react-icons/fa';

export default function Input({ onSend, audioSend, messages }) {
  const [text, setText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [animationVisible, setAnimationVisible] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    onSend(text);
    setText("");
  };

  const startRecording = async () => {
    setIsRecording(true);
    setAnimationVisible(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    mediaRecorderRef.current = new MediaRecorder(stream);
    audioContextRef.current = new AudioContext();
    
    const source = audioContextRef.current.createMediaStreamSource(stream);
    analyserRef.current = audioContextRef.current.createAnalyser();
    source.connect(analyserRef.current);
    analyserRef.current.fftSize = 2048;

    mediaRecorderRef.current.start();
    setTimeout(() => {
      detectSilence();
    }, 1500);
  };

  const stopRecording = async () => {
    setIsRecording(false);
    setAnimationVisible(false);
    clearTimeout(timeoutId);

    const recordedBlob = await stopAndGetBlob();
    if (recordedBlob) {
      const wavBlob = await convertToWav(recordedBlob);
      audioSend(wavBlob);
    }
  };

  const stopAndGetBlob = () => {
    return new Promise((resolve) => {
      let chunks = [];
      
      mediaRecorderRef.current.ondataavailable = (e) => {
        chunks.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const recordedBlob = new Blob(chunks, { type: 'audio/webm' });
        resolve(recordedBlob);
      };

      mediaRecorderRef.current.stop();
    });
  };

  const detectSilence = () => {
    const silenceThreshold = 0.03;
    const silenceDelay = 2000;

    const analyser = analyserRef.current;
    if (!analyser) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const detect = () => {

      analyser.getByteFrequencyData(dataArray);

      const average = dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;

      const silenceDetected = average < silenceThreshold * 255;

      if (silenceDetected) {
        const id = setTimeout(() => {
          stopRecording();
          clearTimeout(id);
        }, silenceDelay);

        setTimeoutId(id);
      } else {
        requestAnimationFrame(detect);
      }
    };

    detect();
  };

  const convertToWav = async (blob) => {
    const arrayBuffer = await blob.arrayBuffer();
    const audioContext = new AudioContext();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const wavData = audioBufferToWav(audioBuffer);
    return new Blob([wavData], { type: 'audio/wav' });
  };

  const audioBufferToWav = (audioBuffer) => {
    const numChannels = audioBuffer.numberOfChannels;
    const length = audioBuffer.length * numChannels * 2 + 44;
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);

    writeString(view, 0, "RIFF");
    view.setUint32(4, length - 8, true);
    writeString(view, 8, "WAVE");
    writeString(view, 12, "fmt ");
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, numChannels, true);
    view.setUint32(24, audioBuffer.sampleRate, true);
    view.setUint32(28, audioBuffer.sampleRate * 2 * numChannels, true);
    view.setUint16(32, numChannels * 2, true);
    view.setUint16(34, 16, true);
    writeString(view, 36, "data");
    view.setUint32(40, length - 44, true);

    const offset = 44;
    const numOfSamples = audioBuffer.length;
    const samples = new Int16Array(numOfSamples * numChannels);

    for (let i = 0; i < numChannels; i++) {
      const channelData = audioBuffer.getChannelData(i);
      for (let j = 0; j < numOfSamples; j++) {
        samples[j * numChannels + i] = channelData[j] * 0x7fff;
      }
    }

    for (let i = 0; i < samples.length; i++) {
      view.setInt16(offset + i * 2, samples[i], true);
    }

    function writeString(view, offset, string) {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    }

    return buffer;
  };

  return (
    <div className="relative flex w-full h-[60px] mb-[15px] mt-[15px] rounded-full overflow-hidden bg-zinc-700">
      <form onSubmit={handleSend} className="flex w-full h-full items-center">
        <input
          className="w-full h-full pl-10 pr-4 py-2 text-[18px] text-zinc-200 bg-zinc-800 border-none outline-none flex-grow"
          type="text"
          onChange={handleInputChange}
          value={text}
          placeholder="Enter your message here"
        />
      </form>
      {!animationVisible && (
        <button
          type="button"
          onClick={startRecording}
          className="h-full px-4 bg-zinc-800 text-zinc-300 flex items-center justify-center"
        >
          <FaMicrophone size={25} />
        </button>
      )}
      {animationVisible && (
        <div
          onClick={stopRecording}
          className="absolute right-0 flex h-full items-center justify-center p-2 cursor-pointer"
        >
          <div className="bounce-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </div>
  );
}
