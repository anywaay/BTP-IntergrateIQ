"use client";
import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from '../utils/cn'; 
import logoImg from "../assets/iq_logo.jpg";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const scrollTop = scrollYProgress.get();
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollTop < 0.05 || direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <AnimatePresence mode="wait">
      <div className='w-full flex justify-center items-center pt-20'>
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            'fixed z-[999] w-full px-20 my-5 font-["Neue Montreal Regular"] ',
            'w-full py-[2px] flex justify-center '
          )}
        >
          <nav className={`border-gray-200 mb-10 ${ menuOpen ? 'mt-32 pt-2 ' : 'mt-0 py-1'} navbarBg rounded-xl min-w-[300px] w-full`}>
            <div className="w-full mx-auto">
              <div className="mx-2 md:mx-5 flex flex-wrap items-center justify-between">
                <a href="#" className="flex items-center">
                  <div className="logo w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full overflow-hidden">
                    <img
                      src={logoImg}
                      alt="logo"
                    />
                  </div>
                  <span className=" ml-2 md:ml-5 self-center text-sm md:text-lg font-semibold whitespace-nowrap text-zinc-100">
                    IntegrateIQ
                  </span>
                </a>
                <div className="flex md:hidden md:order-2">
                  <button
                    onClick={toggleMenu}
                    type="button"
                    className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
                    aria-controls="mobile-menu-3"
                    aria-expanded={menuOpen}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className={menuOpen ? 'w-6 h-6' : 'hidden w-6 h-6'}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className={`${
                    menuOpen ? 'block' : 'hidden'
                  } md:flex justify-between items-end w-full md:w-auto md:order-1`}
                  id="mobile-menu-3"
                >
                  <ul className="flex-col md:flex-row md:items-center flex md:space-x-8 mt-4 md:mt-0 md:text-[1.2vw] md:font-medium">
                    <li>
                      <a
                        href="#home"
                        className="md:bg-transparent text-gray-100 block pl-3 pr-4 py-2  md:p-0 rounded"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#pricing"
                        className="text-gray-100 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#Services"
                        className="text-gray-100 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/aayush-kumar-debugging/"
                        className=" uppercase text-gray-500 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                      >
                        <button className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="uppercase inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full  px-3 py-1 text-sm font-medium text-slate-100 backdrop-blur-3xl">
    Book a Call
  </span>
</button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

          <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Navbar;
