const serverHit= import.meta.env.VITE_APP_SERVER_LINK;

const API = {
  GetChatbotResponse: async (message) => {
    // console.log("sended2");
    try {
      const response = await fetch(serverHit+ 'chat/Question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();

      const audioFile = await fetch(serverHit+ 'chat/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data.text),
      });

      const audio = await audioFile.json();
      // console.log("audio is: ", audio);

      return { message: data.text, audiofile: audio };

    } catch (error) {
      // console.error('Error fetching chatbot response:', error);
      setTimeout(() => {
        window.location.reload();
      }, 4000);

      return { message: "Sorry, we do not found any document of yours, taking you back to the upload page.", audiofile: { status: false } };
    }
  },

  GetAudioResponse: async (audio) => {
    // console.log("in the audio api");
    const formData = new FormData();
    formData.append("file", audio, "recording.wav");
    try {
      const response = await fetch(serverHit+'chat/audio', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return { message: data.text, Question: data.Question };

    } catch (error) {
      // console.error("Error uploading audio file:", error);
      return { message: "Sorry i am unable to process your audio, kindly try again.", Question: "sorry" };
    }
  },
  GetAudiofromText: async (text) => {
    try {
      const audioFile = await fetch(serverHit+'chat/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(text),
      });

      const newAudio = await audioFile.json();

      return { nextText: text, audiofile: newAudio };

    } catch (error) {
      return { nextText: "Sorry i am unable to process your audio, kindly try again.", audiofile: { status: false } };
    }
  },

  ClearPrevDocs: async()=>{
    try {
      const response = await fetch(serverHit+'chat/clear', {
        method: 'GET',
      });
    } catch (error) {
    }
  },
  SeverInvokeCall: async()=>{
    try {
      const response = await fetch(serverHit+'prsnl/Question', {
        method: 'POST',
        body: JSON.stringify("hello")
      });
    } catch (error) {
    }
  }

};

export default API;
