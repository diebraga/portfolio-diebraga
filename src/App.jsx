import { BrowserRouter } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { Button } from "@material-tailwind/react";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0' style={{ backgroundColor:"#0b0013" }}>
        <div className='bg-hero-pattern bg-contain bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
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
      <footer className="w-full justify-center items-center flex py-6" style={{ backgroundColor:"#0b0013" }}>
        <a href="mailto:diebraga.devolper@gmail.com">
        <Button
          variant="outlined"
          color="white"
          className="shadow-xl shadow-white-300/50 text-white border-white border-4 flex items-center gap-2" 
        >
          <span className="md:text-lg text-sm">
            Get In Touch 
          </span>
          <IoArrowForward color="white" size={24} className="align-middle"/>
        </Button>      
        </a>
      </footer>
    </BrowserRouter>
  );
}

export default App;
