import { Button } from "@material-tailwind/react";
import { styles } from "../styles";
import { useState } from "react";
import { TypewriterEffectSmooth } from "./TypeWritterEffect";

const Hero = ({startSound}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const words = [
    {
      text: "Fullstack",
      className: "text-lg md:text-xl text-white-100"
    },
    {
      text: "Developer",
      className: "text-lg md:text-xl text-white-100"
    },
  ];

  return (
    <section className={`relative w-full h-screen mx-auto mb-6`}>
      {!videoLoaded && (
        <div className="fixed inset-0 bg-[#0b0013] flex justify-center items-center">
          <div className="animate-ping h-10 w-10 rounded-full bg-purple-700"></div>
        </div>      
      )}
     <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto z-[-1] object-cover"
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Diego Braga
            </span>
          </h1>
          <TypewriterEffectSmooth words={words} />

        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-10 xs:bottom-32 w-full flex justify-center items-center"
        style={{ height: "100px" }}
      >
        <Button
          variant="outlined"
          color="deep-purple"
          className="animate-pulse shadow-xl shadow-purple-300/50 text-purple-100 border-purple-200 border-4 mt-16"
          onClick={startSound}
        >
          <strong>View Portfolio</strong>
        </Button>
      </a>

    </section>
  );
};

export default Hero;
