import React from 'react';

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-6 text-white text-sm">
      <div className="text-xl font-bold">andrei</div>
      <ul className="flex space-x-4">
        <li>
          <a href="/projects" className="text-gray-400 hover:text-gray-500">projects</a>
        </li>
        <li>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-100 font-bold hover:text-blue-600"
          >
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
