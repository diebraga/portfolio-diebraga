import React, { useRef } from "react";
import { motion } from "framer-motion";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`overflow-hidden`}
    >
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 h-[350px] cursor-grab"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
