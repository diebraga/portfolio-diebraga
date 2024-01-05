import { BrowserRouter } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import { VscUnmute, VscMute } from "react-icons/vsc";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { Button, IconButton } from "@material-tailwind/react";
import { useState, useRef } from "react";

const App = () => {
  const soundRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true);

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
            color="white"
            className="animate-pulse shadow-xl shadow-purple-300/50 text-purple-100 border-purple-200 border-4 flex items-center gap-2"
          >
            <span className="md:text-lg text-sm">
              Get In Touch
            </span>
            <IoArrowForward size={24} className="align-middle text-purple-100" />
          </Button>
        </a>
      </footer>
      {isMuted && (
              <button className="fixed bottom-6 right-8 bg-black p-3 shadow-xl shadow-purple-300/50 text-purple-100 border-purple-200 border-2 rounded-lg" onClick={startSound}>
             <VscMute size={25}/>
            </button>      
      )}
        {!isMuted && (
              <button className="fixed bottom-6 right-8 bg-black p-3 shadow-xl shadow-purple-300/50 text-purple-100 border-purple-200 border-2 rounded-lg" onClick={pauseSound}>
             <VscUnmute size={25}/>
            </button>      
      )}
    </BrowserRouter>
  );
}

export default App;
