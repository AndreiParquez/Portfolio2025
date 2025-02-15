import React from 'react'
import projectPic from '../assets/image.png';
import projectPic2 from '../assets/project.jpg';
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function ProjectsHome() {
  const navigate = useNavigate();

  return (
    <div className='mt-10'>
        <div className='my-4'>
        <span className='text-zinc-300 text-xs px-2 rounded-md py-1 bg-zinc-700 text-start'>Recent Projects</span>
        </div>
        
        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
            <motion.a 
                href='https://lostpiece.netlify.app/' 
                target="_blank" 
                rel="noopener noreferrer"
                className='flex flex-col w-full md:w-1/2 ring ring-zinc-700 rounded-lg p-4 hover:cursor-pointer'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <img src={projectPic2} alt="mypic" className="h-32 rounded-md ring ring-zinc-700 object-cover" />
                <p className='text-white text-sm my-2'>LostPiece</p>
                <p className='text-gray-300 text-xs'>Capstone project: A 2d mobile game showcasing philippine art history.</p>
            </motion.a>
            <motion.a 
                href='https://annabellscloset.netlify.app/' 
                target="_blank" 
                rel="noopener noreferrer"
                className='flex flex-col w-full md:w-1/2 ring ring-zinc-700 rounded-lg p-4 hover:cursor-pointer'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <img src={projectPic} alt="mypic2" className="h-32 rounded-md ring ring-zinc-700 object-cover" />
                <p className='text-white text-sm my-2'>Annabell's Closet</p>
                <p className='text-gray-300 text-xs'>A simple ecommerce ukay - ukay website using react and firebase. </p>
            </motion.a>
        </div>
        <div>
            <button 
                className='text-white px-2 py-1 rounded-md text-sm my-2 flex justify-center items-center hover:cursor-pointer'
                onClick={() => navigate('/projects')}
            >
                More projects 
                <motion.div whileHover={{ x: 5 }}>
                    <MdArrowRightAlt className='text-2xl'/>
                </motion.div>
            </button>
        </div>
    </div>
  )
}

export default ProjectsHome