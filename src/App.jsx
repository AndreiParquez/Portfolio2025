
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ParticleBg from './components/particlebg';
import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <div className="w-full lg:w-1/3 mx-auto">
        <ParticleBg id="particles" />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;