import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Carousel } from "@material-tailwind/react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <Tilt className="xs:w-[350px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full bg-gradient-to-r from-blue-500 to-pink-500 p-[1px] rounded-[20px] shadow-card float-left mr-10 mb-10"
        style={{ position: "relative" }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-black rounded-[20px] min-h-[360px] px-5 py-4 cursor-pointer"
          onClick={() => window.open(source_code_link, "_blank")}
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              {/* <div
                
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div> */}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Personal Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
These projects are a testament to my passion for technology and innovation, highlighting my skills through personal projects that I undertake for enjoyment. Each one is a unique creation, showcasing not just my technical abilities, but also my creativity and enthusiasm for exploring new ideas. You'll find brief descriptions of these projects along with links to their code repositories and live demonstrations. These personal endeavors reflect my ability to engage with complex challenges, experiment with diverse technologies, and bring my imaginative concepts to life.        </motion.p>
      </div>

      <Carousel autoplay loop>
        <div className="w-full flex justify-center py-9">
          <ProjectCard
            index={0}
            description={"A Minecraft clone with react, react-three-fiber and threejs."}
            name={"Minecraft Clone"}
            image="https://user-images.githubusercontent.com/52054459/225892189-affbd469-5e98-4d18-be76-c9d2a7803ca4.png"
            source_code_link={"https://github.com/diebraga/mine-craft-react"}
            tags={[{ name: "React" }, {name:"ThreeJs"},{name:"Zustand"}]}
          />
        </div>
        <div className="w-full flex justify-center py-9">
          <ProjectCard
            index={1}
            description={"A Facial recoconition app with python, openCv, fastApi and React"}
            name={"Facial Recognition"}
            image="https://user-images.githubusercontent.com/52054459/225896553-f9cef9b9-26ff-43d6-affc-8448e812eac1.png"
            source_code_link={"https://github.com/diebraga/facial_recognition"}
            tags={[{ name: "OpenCv" },{ name: "Python" },{ name: "React" },{ name: "FastApi" } ]}
          />
        </div> 
        <div className="w-full flex justify-center py-9">
          <ProjectCard
            index={2}
            description={"A Deep Learning app that predicts if the probability of the inputed image to be a Dog a Cat or other, It use FastAI machine learning libraries and FastApi."}
            name={"Image Classification"}
            image="https://user-images.githubusercontent.com/52054459/224771687-2ed97135-8669-4775-a81b-e1097fd26500.gif"
            source_code_link={"https://github.com/diebraga/image_classification_machine_learning"}
            tags={[{ name: "FastAi" },{ name: "Python" },{ name: "React" },{ name: "FastApi" }]}
          />
        </div>
        <div className="w-full flex justify-center py-9">
          <ProjectCard
            index={2}
            description={"Starter NextJs app that simulates Google Street View functionalities with NextJS React-Three-Fiber and Drei."}
            name={"Tour View"}
            image="https://user-images.githubusercontent.com/52054459/224830831-78c14202-3f59-4d2e-bd11-b0a0abab0d05.gif"
            source_code_link={"https://github.com/diebraga/tour_view"}
            tags={[{ name: "NextJS" },{ name: "ThreeJs" }]}
          />
        </div>
        <div className="w-full flex justify-center py-9">
          <ProjectCard
            index={2}
            description={"A Starter NextJS App that renders a scene with a thrird person camera using BabylonJs framework"}
            name={"BabylonJS with NextJS starter"}
            image="https://user-images.githubusercontent.com/52054459/224835610-f1f17da5-bb4d-494e-8d91-fa898e615fc0.gif"
            source_code_link={"https://github.com/diebraga/next_js_babylonjs_demo"}
            tags={[{ name: "NextJS" },{ name: "BabylonJS" }]}
          />
        </div>
        <div className="w-full flex justify-center py-9">
          <ProjectCard
            index={2}
            description={"A Simple realtime chat room with nextJs in the frontend Nodejs Express and SocketIo framework."}
            name={"Realtime Chatroom"}
            image="https://user-images.githubusercontent.com/52054459/224837848-912a5bd1-2fa0-47bd-8d59-78437d3eea98.gif"
            source_code_link={"https://github.com/diebraga/simple_chatroom_app"}
            tags={[{ name: "NodeJS" },{ name: "SocketIO" },{ name: "React" }]}
          />
        </div>
        <div className="w-full flex justify-center py-9">
          <ProjectCard
            index={2}
            description={"A Greagraphy game with two modalityes guess countries or guess countries flags divided by continent, Using nextjs and chackraUI."}
            name={"GeoGuessWorld"}
            image="https://user-images.githubusercontent.com/52054459/224839866-2b382fd5-fe92-4c30-a8d0-f656de87e3ba.gif"
            source_code_link={"https://github.com/diebraga/GuessGeoWorld"}
            tags={[{ name: "NextJS" },{ name: "ChacrkaUI" }]}
          />
        </div>
        <div className="w-full flex justify-center py-9">
        <ProjectCard
          index={0}
          description={"A Shopping cart built with nextjs, stitches and a serverless api route that creates a stripe checkout."}
          name={"Stripe Shop"}
          image="https://user-images.githubusercontent.com/52054459/200176756-f34c8511-841b-42aa-b1b7-0d2829a9bdd5.png"
          source_code_link={"https://github.com/diebraga/ignite_shop_2022"} 
          tags={[{ name: "NextJS" },{ name: "Stitches" }, { name: "Stripe" }]}
        />
        </div>

      </Carousel>
    </>
  );
};

export default SectionWrapper(Works, "");
