import React from "react";
import projectPic from "../assets/image.png";
import projectPic2 from "../assets/project.jpg";
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ProjectsHome() {
  const navigate = useNavigate();

  return (
    <div className="mt-10 ">
      <div className="my-4">
        <span className="text-zinc-300 text-xs px-2 rounded-md py-1 bg-zinc-700 text-start">
          Recent Projects
        </span>
      </div>

      <div className="max-w-screen-xl flex  sm:space-y-4  md:space-y-4 lg:space-y-0 space-y-4   flex-col  lg:flex-row    space-x-4 xl:space-x-4 2xl:space-x-10">
        <motion.a
          href="https://lostpiece.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col w-full lg:w-1/2  ring ring-zinc-700 rounded-lg p-4 hover:cursor-pointer hover:bg-zinc-800  hover:ring-zinc-500 hover:text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={projectPic2}
            alt="Andrei Parquez Web Developer Project Lost Piece"
            className="h-32 md:h-48 lg:h-32 rounded-md ring ring-zinc-700 object-cover"
          />
          <p className="text-white text-sm my-2">LostPiece</p>
          <p className="text-gray-300 text-xs">
            Capstone project: A 2d mobile game showcasing philippine art
            history.
          </p>
        </motion.a>
        <motion.a
          href="https://annabellscloset.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col w-full lg:w-1/2 ring ring-zinc-700 rounded-lg p-4 hover:cursor-pointer hover:bg-zinc-800  hover:ring-zinc-500 hover:text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={projectPic}
            alt="Andrei Parquez Web Developer Project Annabell's Closet"
            className="h-48 md:h-48 lg:h-32 rounded-md ring ring-zinc-700 object-cover"
          />
          <p className="text-white text-sm my-2">Annabell's Closet</p>
          <p className="text-gray-300 text-xs">
            A simple ecommerce ukay - ukay website using react and firebase.{" "}
          </p>
        </motion.a>
      </div>
      <div>
        <motion.button
          className="text-white px-2 py-1 rounded-md text-sm my-2 flex justify-center items-center hover:cursor-pointer group"
          onClick={() => navigate("/projects")}
          whileHover="hover"
          initial="rest"
          animate="rest"
        >
          More projects
          <motion.div
            variants={{
              rest: { x: 0 },
              hover: { x: 5 },
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="ml-1"
          >
            <MdArrowRightAlt className="text-2xl" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}

export default ProjectsHome;
