import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Map from "./map";
import myPic from "../assets/mypic.jpg";
import myPicCartoon from "../assets/cartoon.png";
import "../assets/styles.css";
import Text from "./text.jsx";
import Tech from "./tech.jsx";
import Projects from "./projectsHome.jsx";
import Footer from "./footer.jsx";
import Picture from "./picture.jsx";
import SliderImage from "./Slider.jsx";
import DinoMinigame from "./dinoMinigame.jsx";

const rollingTextVariants = {
  animate: {
    y: [0, -20, -40, -60, -80, -100],
    transition: {
      y: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  },
  initial: { y: 0 },
  exit: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const waveVariants = {
  wave: {
    rotate: [0, 20, -20, 20, -20, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 3,
    },
  },
};

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [imageSrc, setImageSrc] = useState(myPic);

  return (
    <div>
      <div className="w-full h-52 mx-auto px-6">
        <Map />
        <div className="flex w-full gap-4">
          <img
            src={imageSrc}
            alt="Andrei Parquez Web Developer"
            className="w-24 h-24 rounded-full ring-2 ring-zinc-700 p-1 m-1"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-center font-semibold tracking-widest text-white text-xl xs:text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
              Hi, I'm Andrei
              <motion.span
                className="inline-block"
                style={{ transformOrigin: "bottom right" }}
                variants={waveVariants}
                initial="initial"
                animate="wave"
              >
                👋
              </motion.span>
            </h1>
            <div className="flex items-center">
              <span className="green-circle"></span>
              <div
                className="text-white rolling-text-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Visually hidden for SEO benefit */}
                <ul className="sr-only">
                  <li>Frontend Developer</li>
                  <li>Game Developer</li>
                  <li>Loves Anime</li>
                  <li>Creator</li>
                </ul>
                <motion.div
                  className="rolling-text text-gray-400 text-sm"
                  variants={rollingTextVariants}
                  initial="initial"
                  animate={isHovered ? "animate" : "exit"}
                >
                  <div className="text">Looking for Job</div>
                  <div className="text">Frontend Developer</div>
                  <div className="text">Game Developer</div>
                  <div className="text">Loves Anime</div>
                  <div className="text">Creator</div>
                  <div className="text">Chill guy</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <Text />
        <Tech />

        <Projects />
        <DinoMinigame />
        <SliderImage />
        <Picture />

        <Footer />
      </div>
    </div>
  );
}

export default Home;
