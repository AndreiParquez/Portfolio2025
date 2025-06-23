import React from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiUnity, SiMysql } from "react-icons/si";

const techStacks = [
  {
    name: "React.js",
    icon: <FaReact className="text-gray-500 group-hover:text-blue-500" />,
  },
  {
    name: "JS",
    icon: <FaJsSquare className="text-gray-500 group-hover:text-yellow-500" />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="text-gray-500 group-hover:text-orange-500" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-gray-500 group-hover:text-blue-700" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-gray-500 group-hover:text-teal-500" />,
  },
  {
    name: "Unity",
    icon: <SiUnity className="text-gray-500 group-hover:text-black" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-gray-500 group-hover:text-green-500" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-gray-500 group-hover:text-blue-500" />,
  },
];

function Tech() {
  return (
    <>
      <div className="my-4">
        <span className="text-zinc-300 text-xs px-2 rounded-md py-1 bg-zinc-700 text-start">
          Tech Stacks
        </span>
      </div>
      <div className="w-full  mx-auto grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 justify-items-center">
        {techStacks.map((tech, index) => (
          <div
            key={index}
            className="group size-24 flex flex-col items-center justify-center px-4 py-2 ring-zinc-700 ring rounded-lg transform transition-transform duration-300 hover:bg-zinc-800 hover:!cursor-pointer hover:scale-105 hover:ring-zinc-500 hover:text-white"
          >
            <div className="flex items-center justify-center w-12 h-12 text-3xl transition-transform duration-300 group-hover:-translate-y-2 hover:cursor-pointer">
              {tech.icon}
            </div>
            <p className="text-zinc-500 text-xs transition-colors duration-300 group-hover:text-white">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Tech;
