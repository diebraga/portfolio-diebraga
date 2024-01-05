import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";
import { styles } from "../styles";

const Hero = ({startSound,pauseSound}) => {
  
  return (
    <section className={`relative w-full h-screen mx-auto mb-6`}>
     <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto z-[-1] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span>Hi,</span> I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Diego

            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I create awesome mobile applications
            <br className="sm:block hidden" />
            and build cool things for the web. ✨ 😀
          </p>
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
