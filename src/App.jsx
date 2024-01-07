import { BrowserRouter } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import { VscUnmute, VscMute } from "react-icons/vsc";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { Button } from "@material-tailwind/react";
import { useState, useRef, useEffect } from "react";

const App = () => {
  const soundRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function startSound() {
    soundRef.current?.play()
    soundRef.current.volume = 0.6
    setIsMuted(false);
  }

  function pauseSound() {
    soundRef.current?.pause()
    setIsMuted(true);
  }

  return (
    <BrowserRouter>
      <audio
        ref={soundRef}
        src="/space.mp3"
        loop
      />
      <div className='relative z-0' style={{ backgroundColor: "#0b0013" }}>
        <div className='bg-hero-pattern bg-contain bg-no-repeat bg-center'>
          <Navbar />
          <Hero startSound={startSound} pauseSound={pauseSound} />
        </div>
        <About />
        <Experience />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Tech />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <footer className="w-full justify-center items-center flex py-6" style={{ backgroundColor: "#0b0013" }}>
        <a href="mailto:diebraga.devolper@gmail.com">
          <Button
            variant="outlined"
            className="animate-pulse shadow-xl shadow-purple-300/50 text-purple-100 border-purple-200 border-4 flex items-center gap-2"
          >
            <strong className="">
              Get In Touch
            </strong>
            <IoArrowForward size={20} className="align-middle text-purple-100" />
          </Button>
        </a>
      </footer>
      {isMuted && (
            <button className="fixed bottom-3 right-3 md:bottom-6 md:right-8 bg-black p-2 shadow-xl shadow-purple-300/50 text-purple-100 border-purple-200 border-2 rounded-lg" onClick={startSound}>
             <VscMute className="text-lg"/>
            </button>      
      )}
        {!isMuted && (
              <button className="fixed bottom-3 right-3 md:bottom-6 md:right-8 bg-black p-2 shadow-xl shadow-purple-300/50 text-purple-100 border-purple-200 border-2 rounded-lg" onClick={pauseSound}>
             <VscUnmute className="text-lg"/>
            </button>      
      )}
    </BrowserRouter>
  );
}

export default App;
