import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,

} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#000",
        border: "1px solid #40046e",
        borderBottom: 0,
        color: 'white'
      }}
      
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      // className="animate-ping"
      
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      
    >
      <div className="">
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>
      {!videoLoaded && (
        <div class="fixed inset-0 bg-[#0b0013] flex justify-center items-center">
          <div class="animate-ping h-10 w-10 rounded-full bg-purple-700"></div>
        </div>      
      )}
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[2000px] z-[-1] object-cover"
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="/atomic.mp4" type="video/mp4" />
      </video>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#40046e">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
