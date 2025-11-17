import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Services from "./components/Services";


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} /> {/* Add more routes as needed */}
      </Routes>
    
  );
}

export default App;
