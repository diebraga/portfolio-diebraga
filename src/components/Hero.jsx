import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span>Hi,</span> I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
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

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
            animate={{
              y: [0, 24, 0],
              backgroundColor: ["#3182CE", "#FBB6CE", "#3182CE"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-10 h-10 rounded-full bg-blue-500 mb-1"
          >
            <div className="w-4 h-4 rounded-full bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
