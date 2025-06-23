import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function footer() {
  return (
    <div className='flex justify-between'>
        <div className='flex  items-center justify-center py-4 space-x-2'>
            <a 
                href='https://github.com/AndreiParquez' 
                className='text-zinc-400 text-sm flex items-center justify-center'
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FaGithub className='text-lg mr-2 text-zinc-400'/> Github
            </a>
            <a 
                href='mailto:jackparquez1@gmail.com' 
                className='text-zinc-400 text-sm flex items-center justify-center '
            >
                <MdEmail className='text-lg mr-2 text-zinc-400'/> Email
            </a>
        </div>
        <div className='flex items-center justify-center py-4 text-zinc-400 text-sm'>
            <p>© {new Date().getFullYear()} Andrei Parquez</p>
        </div>
    </div>
  )
}

export default footer