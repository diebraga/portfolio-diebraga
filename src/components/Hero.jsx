import { motion } from "framer-motion";

import { styles } from "../styles";

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
      <a
        href="#about"
        className="absolute bottom-10 xs:bottom-32 w-full flex justify-center items-center"
        style={{ height: "100px" }}
      >
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
          className="w-10 h-10 rounded-full bg-blue-500 mb-1 flex justify-center items-center"
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApElEQVR4nO3VsQqDMBSF4V8HaUeHFlwKPk/3PnVpoVNBCq4OrnG0FFRCaahek4BwD5wlBD5uuBDYYPKhSSzwDDRAP7QFLjHgl4XaePDJzQ/4073CvmP0qdHlChSjy4Uu15aXK7E+/LGdAy6+7qVr4LsDmdMK2Emnva6EM+nEB+AhQGuglKJS3Au6FPeKzsWDoP/woKgLj4KOOQI34AmcplMN7rwBpHe69fpSsh4AAAAASUVORK5CYII=" />

        </motion.div>
      </a>

    </section>
  );
};

export default Hero;
