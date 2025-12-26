import React from 'react'
import About from './About'
import Home from './Home'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return ( <div>
      <Router>
        <Link to="/home">Home</Link>|
        <Link to="/about">About</Link>|
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </Router>           
  </div> );
}

export default App



