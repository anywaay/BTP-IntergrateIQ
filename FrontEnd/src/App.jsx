import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeroParallaxDemo } from './components/ui/herocomponent';
import { BackgroundBeamsDemo } from './components/ui/card-bg';
import Navbar from './components/Navbar';
import ChatBotComponent from './components/ChatBotComponent';
import IntegrationDemo from './components/IntegrationDemo';
import { GoogleGeminiEffectDemo } from './components/ui/aicard';
import Offerings from './components/Offerings';
import NewPricing from './components/newpricing';
import Footer from './components/Footer';
import Testinomials from './components/Testinomials';
import Expertise from './components/Expertise';
import popupImg from './assets/popupimg.png';
import emailjs from '@emailjs/browser';
import logoImg from './assets/iq_logo.jpg';
import DemoChatbot from './Pages/DemoChatbot';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 25000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Router>
      <div className="text-white bg-[#e5e2e9]">
        <Routes>
          <Route
            path="/"
            element={
              <>
              <div className="bggradient">
                <Navbar />
                <HeroParallaxDemo />
              </div>
                <ChatBotComponent />
                <IntegrationDemo />
                <Offerings />
                <div className="hidden md:block">
                  <GoogleGeminiEffectDemo />
                </div>
                <NewPricing />
                <Testinomials />
                <Footer />
                {showPopup && <PopupOverlay onClose={handleClosePopup} />}
              </>
            }
          />
          <Route path="/demo" element={<DemoChatbot />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

const PopupOverlay = ({ onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Ayush Tripathi',
          from_email: form.email,
          to_email: 'mailtoayushtripathi@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setTimeout(() => {
          setForm({ name: '', email: '', message: '' });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-[1000]">
      <div className="bg-white w-[90vw] sm:w-[65vw] pt-3 sm:px-6 pb-2 rounded-lg shadow-lg text-black text-center">
        <div className="w-full h-[10%] px-2 flex justify-between">
          <div className="h-[5%] sm:h-[10%] overflow-hidden flex justify-start items-center">
            <img className="w-[50px] sm:w-[70px]" src={logoImg} alt="logo" />
            <h1 className="ml-2 sm:ml-6 text-2xl sm:text-3xl font-semibold">
              IntegrateIQ
            </h1>
          </div>
          <img
            onClick={onClose}
            width={25}
            src="https://cdn.prod.website-files.com/6643307d563d3d1613330141/669fa0524c7bba71213bbe57_close-in.svg.svg"
          />
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center ">
          <div className="w-[95%] lg:w-[55%] h-full flex flex-col items-start p-2 sm:p-6">
            <h1 className="font-semibold text-start text-2xl sm:text-3xl pb-4">
              Experience it firsthand!
            </h1>
            <p className="text-start text-[15px] sm:text-[18px] font-normal leading-[22px] max-w-[95%] sm:max-w-[90%] lg:max-w-[80%]">
              Provide your website URL, and we'll deliver a custom AI chatbot,
              trained on your customized site data, straight to your inbox.
            </p>

            <form
              className="w-full flex flex-col items-start gap-4 mt-5 sm:ml-5"
              onSubmit={handleSubmit}
            >
              <label className="text-black-500 flex flex-col gap-0 text-[16px] w-full font-semibold text-start text-[#6b41ff]">
                Name
                <input
                  type="text"
                  name="name"
                  className="input sm:mt-4 sm:min-h-[35px] border-b-2 w-[95%] sm:w-[75%] p-2 text-zinc-700"
                  placeholder="for example, James"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
              <label className="text-black-500  flex flex-col gap-0 text-[16px] w-full font-semibold text-start text-[#6b41ff]">
                Email
                <br />
                <input
                  type="email"
                  name="email"
                  className="input sm:mt-4 sm:min-h-[35px] border-b-2 w-[95%] sm:w-[75%] p-2 text-zinc-700"
                  placeholder="james@gmail.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
              <label className="text-black-500 text-[16px] flex flex-col gap-0 w-full font-semibold text-start text-[#6b41ff]">
                Your Message
                <br />
                <textarea
                  name="message"
                  rows={4}
                  className="textarea sm:mt-4 sm:min-h-[35px] border-b-2 w-[95%] sm:w-[75%] p-2 text-zinc-700"
                  placeholder="Put your website link and get your prototype delivered on your ease!"
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </label>
              <button type="submit" className="btn" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          <div className="w-[45%] h-full hidden lg:block">
            <img
              src="https://img.freepik.com/free-vector/get-touch-concept-illustration_114360-2726.jpg"
              className="rounded-lg object-fill w-full overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
