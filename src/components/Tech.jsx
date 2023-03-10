import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <motion.a
          key={technology.name}
          initial="hidden"
          animate="visible"
          custom={index}
          className="w-24 h-24 rounded-full bg-white p-4 cursor-pointer"
          whileHover={{ rotate: [0, -5, 5, -5, 5, 0] }}
        >
          <img src={technology.icon} className="w-full h-full object-contain" />
        </motion.a>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
