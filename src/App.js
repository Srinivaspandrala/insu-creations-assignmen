// App.js
import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home'
import Features from './components/Features'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'
import StudentReview from './components/StudentReview';
import FooterHomepage from './components/FooterHomepage';



import './App.css'

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  
    <StudentReview />
    <FooterHomepage/>
  </Router>
)

const Navbar = () => (
  <div className="navbar">
    <div className="nav-links">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/features" className="nav-link">
        Features
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
      <Link to="/about" className="nav-link">
        About Us
      </Link>
    </div>
  </div>
)

export default App
