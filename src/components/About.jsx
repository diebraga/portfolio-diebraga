import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Carousel } from "@material-tailwind/react";

const ServiceCard = ({ index, title, icon, icon2 }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] rounded-[20px] shadow-card float-left mr-10 mb-10"
      style={{ position: "relative" }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <div style={{ display: "flex" }}>
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
          {icon2 && (
            <img
              src={icon2}
              alt="web-development"
              className="w-16 h-16 object-contain"
            />
          )}
        </div>

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const handleDragStart = (e) => e.preventDefault();

const images = ["/d1.png", "/d2.png", "/d3.png"];

const items = images.map((src, index) => (
  <div className="w-full flex justify-center py-9">
    <img
      key={index}
      src={src}
      onDragStart={handleDragStart}
      role="presentation"
      className="object-cover w-72"
      style={{ filter: "grayscale(100%)" }}
    />
  </div>
));

function calculateYearsSince(dateString) {
  const startDate = new Date(dateString);
  const currentDate = new Date();

  const differenceInTime = currentDate.getTime() - startDate.getTime();
  const differenceInYears = differenceInTime / (1000 * 3600 * 24 * 365.25);

  return Math.floor(differenceInYears);
}

const startDate = "2019-10-01";
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Overview.</h2>
      </motion.div>

      {/* Flex container for carousel and text */}
      <div className="flex flex-wrap mt-5 sm:flex-col justify-center items-center">
        <div className="w-full">

          <Carousel loop autoplay>

            {items}

          </Carousel>
        </div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
        >
          <>
            Hi, my name is Diego Braga, and I'm a passionate software
            developer based in Ireland with expertise in TypeScript, JavaScript,
            React, Next.js, and Node.js. I have over {calculateYearsSince(startDate)} years of industry experience.
          </>
        </motion.p>
      </div>

      {/* Flex container for service cards */}
      < div className="mt-20 flex flex-wrap gap-10 justify-evenly sm:justify-center" >
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div >
    </>
  );
};


export default SectionWrapper(About, "about");
