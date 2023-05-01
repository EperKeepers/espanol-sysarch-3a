import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './variables.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './webpages/Home';
import About from './webpages/About';
import Contact from './webpages/Contact';
import Login from './webpages/Login';
import Register from './webpages/Register';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
