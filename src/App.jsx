
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ParticleBg from './components/particlebg';
import Nav from './components/nav';
import Home from './components/home';
import Project from './components/projects';



function App() {
  return (
    <Router>
      <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:1/3  mx-auto">
        <ParticleBg id="particles" />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/projects" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;