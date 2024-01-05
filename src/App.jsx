import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

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
    </BrowserRouter>
  );
}

export default App;
