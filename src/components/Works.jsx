import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Button, Carousel } from "@material-tailwind/react";
import { useIsMobile } from "../hooks/useIsMobile";
import ArrowButton from "./ArrowButton";

import { cn } from "../utils/cn";
import { BentoGrid, BentoGridItem } from "../components/BentoGrid";

export function WorkGrid() {
  return (
    <BentoGrid className="max-w-full">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          link={item.source_code_link}
          tags={item.tags}
          live={items.live}
        />
      ))}
    </BentoGrid>
  );
}
const items = [
  {
    description: "A Minecraft clone with react, react-three-fiber and threejs.",
    title: "Minecraft Clone",
    header: "https://user-images.githubusercontent.com/52054459/225892189-affbd469-5e98-4d18-be76-c9d2a7803ca4.png",
    source_code_link: "https://github.com/diebraga/mine-craft-react",
    tags: ["React", "ThreeJs", "Zustand"],
    live: "https://mine-craft-react.vercel.app/"
  },
  {
    description: "FastAi app predicts the probability of image to be a Dog or a Cat.",
    title: "Image Classification",
    header: "https://user-images.githubusercontent.com/52054459/224771687-2ed97135-8669-4775-a81b-e1097fd26500.gif",
    source_code_link: "https://github.com/diebraga/image_classification_machine_learning",
    tags: ["FastAi", "Python", "FastApi"],
  },
  {
    description: "NextJs app simulates Google Street View functionalities with R3F.",
    title: "Tour View",
    header: "https://user-images.githubusercontent.com/52054459/224830831-78c14202-3f59-4d2e-bd11-b0a0abab0d05.gif",
    source_code_link: "https://github.com/diebraga/tour_view",
    tags: ["NextJS", "ThreeJs"],
    live:"https://tour-view.vercel.app/property"
  },
  {
    description: "NextJS Web 3 app where you store your ideas in the blockchain.",
    title: "My Ideas",
    header: "https://github.com/diebraga/my-ideas/assets/52054459/8f0f81ee-a84d-4e36-9b86-2ab6431b0ea9",
    source_code_link: "https://github.com/diebraga/my-ideas",
    tags: ["NextJS", "Solidity", "Hardhat"],
    live:"https://my-ideas-9vtbacpzr-diebraga.vercel.app/"
  },
  {
    description: "NextJS App renders a scene and 3th person camera using BabylonJs.",
    title: "BabylonJS Starter",
    header: "https://user-images.githubusercontent.com/52054459/224835610-f1f17da5-bb4d-494e-8d91-fa898e615fc0.gif",
    source_code_link: "https://github.com/diebraga/next_js_babylonjs_demo",
    tags: ["NextJS", "BabylonJS"],
    live:"https://full-stack-nextjs-auth.vercel.app/"
  },
  {
    description: "Simple realtime chat room with NextJs Nodejs Express and socketIo.",
    title: "Realtime Chatroom",
    header: "https://user-images.githubusercontent.com/52054459/224837848-912a5bd1-2fa0-47bd-8d59-78437d3eea98.gif",
    source_code_link: "https://github.com/diebraga/simple_chatroom_app",
    tags: ["NodeJS", "SocketIO", "React"],
  },
  {
    description: "Geography game guess countries or flags using Nextjs and ChakraUI.",
    title: "GeoGuessWorld",
    header: "https://user-images.githubusercontent.com/52054459/224839866-2b382fd5-fe92-4c30-a8d0-f656de87e3ba.gif",
    source_code_link: "https://github.com/diebraga/GuessGeoWorld",
    tags: ["NextJS", "ChakraUI"],
    live:"https://guess-geo-world.vercel.app/"
  },
  {
    description: "Web 3 app that sends ETH txs to addresses and stores in the blockchain",
    title: "Web3 Transactions",
    header: "https://github.com/diebraga/web-3-transactions/assets/52054459/012e6140-04f8-4202-b902-0a9ebdcbfda0",
    source_code_link: "https://github.com/diebraga/web-3-transactions",
    tags: ["Vite", "Solidity", "Tailwind"],
    live:"https://web-3-transactions.vercel.app/"
  },
  {
    description: "Shopping cart in with Nextjs, using api routes and stripe checkout.",
    title: "Stripe Shop",
    header: "https://user-images.githubusercontent.com/52054459/200176756-f34c8511-841b-42aa-b1b7-0d2829a9bdd5.png",
    source_code_link: "https://github.com/diebraga/ignite_shop_2022",
    tags: ["NextJS", "Stitches", "Stripe"],
    live:"https://ignite-shop-2022.vercel.app/"
  },
  {
    description: "A Facial recognition app with python, openCv, fastApi and React.",
    title: "Facial Recognition",
    header: "https://user-images.githubusercontent.com/52054459/225896553-f9cef9b9-26ff-43d6-affc-8448e812eac1.png",
    source_code_link: "https://github.com/diebraga/facial_recognition",
    tags: ["OpenCv", "Python", "FastApi"],
  },
];
const Works = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Personal Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
            My projects highlight my technical skills, creativity, and passion for technology. Each showcases unique challenges and innovative solutions, complete with summaries, code repositories, and live demos. They demonstrate my ability to experiment with new technologies and realize imaginative ideas. ⚛️ 
        </motion.p>
      </div>

    <WorkGrid/>
    </>
  );
};

export default SectionWrapper(Works, "");
