import React from 'react'
import { motion } from 'framer-motion'
import projectPic from '../assets/p1.png';
import projectPic2 from '../assets/p2.png';
import projectPic3 from '../assets/p3.png';
import projectPic4 from '../assets/p4.png';
import { FaGithub } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
import Footer from './footer.jsx';

function projects() {
  return (
    <>
    <div className='flex flex-col space-y-16 px-6' >
        <div className='group'>
            <div className='flex flex-col w-full bg-gradient-to-b from-zinc-800 to-transparent rounded-md px-6 pt-5 overflow-hidden hover:cursor-pointer group-hover:from-blue-900'>
                <motion.img 
                src={projectPic} 
                alt="mypic" 
                className="h-64 rounded-sm ring ring-zinc-700 object-cover" 
                initial={{ y: 10 }} 
                whileHover={{ y: -5 }} 
                transition={{ type: 'spring', stiffness: 300 }}
                />
            </div>
            <div className='my-4'>
                <p className='text-white'>Lost Piece</p>
                <p className='text-gray-400 text-sm'> A 2d mobile game showcasing philippine art history.</p>
                <div className='flex space-x-2 text-sm mt-1 font-semibold'>
                    <a href="https://github.com/AndreiParquez/Lostpiecewebsite" target="_blank" rel="noopener noreferrer">
                      <button className='flex items-center text-white ring ring-zinc-700 p-2 px-5 rounded-md hover:cursor-pointer'><FaGithub className='mr-2'/>Source</button>
                    </a>
                    <a href="https://lostpiece.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <button className='flex items-center bg-white text-zinc-900 p-2 rounded-md px-5 hover:cursor-pointer'><FiGlobe className='mr-2'/>Visit</button>
                    </a>
                </div>
            </div>
        </div>

        <div className='group'>
            <div className='flex flex-col w-full bg-gradient-to-b from-zinc-800 to-transparent rounded-md px-6 pt-5 overflow-hidden hover:cursor-pointer group-hover:from-green-900'>
                <motion.img 
                src={projectPic2} 
                alt="mypic" 
                className="h-64 rounded-sm ring ring-zinc-700 object-cover" 
                initial={{ y: 10 }} 
                whileHover={{ y: -5 }} 
                transition={{ type: 'spring', stiffness: 300 }}
                />
            </div>
            <div className='my-4'>
                <p className='text-white'>Annabell's Closet</p>
                <p className='text-gray-400 text-sm'>A react web application for annabells ukay-ukay bussiness</p>
                <div className='flex space-x-2 text-sm mt-1 font-semibold'>
                    <a href="https://github.com/AndreiParquez/Annabel" target="_blank" rel="noopener noreferrer">
                      <button className='flex items-center text-white ring ring-zinc-700 p-2 px-5 rounded-md hover:cursor-pointer'><FaGithub className='mr-2'/>Source</button>
                    </a>
                    <a href="https://annabellscloset.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <button className='flex items-center bg-white text-zinc-900 p-2 rounded-md px-5 hover:cursor-pointer'><FiGlobe className='mr-2'/>Visit</button>
                    </a>
                </div>
            </div>
        </div>

        <div className='group'>
            <div className='flex flex-col w-full bg-gradient-to-b from-zinc-800 to-transparent rounded-md px-6 pt-5 overflow-hidden hover:cursor-pointer group-hover:from-yellow-900'>
                <motion.img 
                src={projectPic4} 
                alt="mypic" 
                className="h-64 rounded-sm ring ring-zinc-700 object-cover" 
                initial={{ y: 10 }} 
                whileHover={{ y: -5 }} 
                transition={{ type: 'spring', stiffness: 300 }}
                />
            </div>
            <div className='my-4'>
                <p className='text-white'>Anime Tambayan</p>
                <p className='text-gray-400 text-sm'>Anime Streaming website using Animedex Api</p>
                <div className='flex space-x-2 text-sm mt-1 font-semibold'>
                    <a href="https://github.com/AndreiParquez/anime" target="_blank" rel="noopener noreferrer">
                      <button className='flex items-center text-white ring ring-zinc-700 p-2 px-5 rounded-md hover:cursor-pointer'><FaGithub className='mr-2'/>Source</button>
                    </a>
                    <a href="https://animetambayan.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <button className='flex items-center bg-white text-zinc-900 p-2 rounded-md px-5 hover:cursor-pointer'><FiGlobe className='mr-2'/>Visit</button>
                    </a>
                </div>
            </div>
        </div>

    </div>
    <Footer />
    </>
  )
}

export default projects