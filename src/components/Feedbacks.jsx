import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { useIsMobile } from "../hooks/useIsMobile";
import { Carousel } from "@material-tailwind/react";
import ArrowButton from "./ArrowButton";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="shadow-xl shadow-purple-300/50 text-purple-200 border-purple-300 border-2 rounded-xl p-0.5 xs:w-[320px] w-full mb-14"
  >
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-black rounded-[20px] min-h-[360px] px-5 py-4"
    >
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} {company && `of ${company}`}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const { isMobileView } = useIsMobile()

  return (
    <div className={` rounded-[20px]`}>
      <div className={`rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`mt-10 ${styles.paddingX} flex flex-wrap gap-7`}>
        {isMobileView ? (
          <Carousel 
            autoplay 
            loop
            prevArrow={({ handlePrev }) => (
              <ArrowButton handlePrev={handlePrev}/>
            )}
            nextArrow={({ handleNext }) => (
              <ArrowButton handleNext={handleNext}/>
            )}            
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex justify-center py-9">
                <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
              </div>
            ))}
          </Carousel>
        ) : (
          <Carousel 
            autoplay 
            loop
            prevArrow={({ handlePrev }) => (
              <ArrowButton handlePrev={handlePrev}/>
            )}
            nextArrow={({ handleNext }) => (
              <ArrowButton handleNext={handleNext}/>
            )}                        
          >
            {Array.from({ length: Math.ceil(testimonials.length / 2) }, (_, i) => (
              <div key={i} className="w-full flex justify-evenly py-9">
                {testimonials.slice(i * 2, i * 2 + 2).map((testimonial, index) => (
                  <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
                ))}
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
