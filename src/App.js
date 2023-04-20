import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from './About';
import Mycenae from './Mycenae';
import Akrotiri from './Akrotiri';

function App() {
  return (
    <div className="App">
      <Router>
        <div className = "topnav">
          <div className="webname">
            Aegean Bronze Age Travel
          </div>
          <div className="a">
            <Link to="/"> About </Link>
            <Link to="/mycenae"> Mycenae </Link>
            <Link to="/akrotiri"> Akrotiri </Link>
          </div>
        </div>
        <Routes>
          <Route path = "/" element={<About/>} />
          <Route path = "/mycenae" element={<Mycenae/>} />
          <Route path = "/akrotiri" element={<Akrotiri/>} />
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
