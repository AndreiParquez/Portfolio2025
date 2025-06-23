import React from "react";
import { hover, motion } from "framer-motion";
import projectPic from "../assets/project.jpg";
import projectPic2 from "../assets/p2.png";
import projectPic3 from "../assets/p3.png";
import projectPic4 from "../assets/p4.png";
import { FaGithub } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
import Footer from "./footer.jsx";
import { Helmet } from "react-helmet";

function projects() {
  const projects = [
    {
      title: "Lost Piece",
      description: "A 2d mobile game showcasing philippine art history.",
      image: projectPic,
      alt: "Andrei Parquez Web Projects PortfolioLost Piece Game",
      source: "https://github.com/AndreiParquez/Lostpiecewebsite",
      visit: "https://lostpiece.netlify.app/",
      hoverColor: "from-red-900",
    },
    {
      title: "Annabell's Closet",
      description: "A react web application for annabells ukay-ukay bussiness",
      image: projectPic2,
      alt: "Andrei Parquez Web Projects Portfolio Annabell's Closet",
      source: "https://github.com/AndreiParquez/AnnabellsCloset",
      visit: "https://annabellscloset.netlify.app/",
      hoverColor: "from-yellow-900",
    },
    {
      title: "Anime Tambayan",
      description: "Anime Streaming website using Animedex Api",
      image: projectPic4,
      alt: "Andrei Parquez Web Projects Portfolio Anime Tambayan",
      source: "https://github.com/AndreiParquez/AnimeTambayan",
      visit: "https://animetambayan.netlify.app/",
      hoverColor: "from-purple-900",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Projects | Andrei Parquez Portfolio</title>
        <meta
          name="description"
          content="Explore projects by Andrei Parquez, including web apps, mobile games, and anime streaming platforms built with React and other modern tools."
        />
        <meta
          property="og:title"
          content="Projects | Andrei Parquez Portfolio"
        />
        <meta
          property="og:description"
          content="Check out Lost Piece, Annabell's Closet, and Anime Tambayan - creative projects built with React and Netlify."
        />
        <meta
          property="og:image"
          content="https://andreidev.netlify.app/preview.png"
        />
        <meta
          property="og:url"
          content="https://andreidev.netlify.app/projects"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://andreidev.netlify.app/projects" />
      </Helmet>
      <div className="px-6">
        <div className="flex flex-col ">
          <div>
            <span className="text-zinc-100  rounded-md py-1  text-start">
              Recent Projects
            </span>
          </div>
          <div className="flex flex-col space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div
                  className={`flex flex-col w-full bg-gradient-to-b from-zinc-800 to-transparent rounded-md px-6 pt-5 overflow-hidden hover:cursor-pointer group-hover:${project.hoverColor}`}
                >
                  <motion.img
                    src={project.image}
                    alt={project.alt}
                    className="h-64 rounded-sm ring ring-zinc-700 object-cover"
                    initial={{ y: 10 }}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    loading="lazy"
                  />
                </div>
                <div className="my-4">
                  <p className="text-white">{project.title}</p>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                  <div className="flex space-x-2 text-sm mt-3 font-semibold">
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center text-white ring ring-zinc-700 p-2 px-5 rounded-md hover:cursor-pointer">
                        <FaGithub className="mr-2" />
                        Source
                      </button>
                    </a>
                    <a
                      href={project.visit}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center bg-white text-zinc-900 p-2 rounded-md px-5 hover:cursor-pointer">
                        <FiGlobe className="mr-2" />
                        Visit
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default projects;
