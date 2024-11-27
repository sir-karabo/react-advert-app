//Modules
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
//Res (Resources)
import logo from "./logo.svg";
import "./css/App.css";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

//Content Routes
function App() {
  // Popup visibility state
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  //Routes
  return (
    <Router>
      <Navbar />

      {/* Popup Form */}
      {isPopupVisible && (
        <ContactFormPopup onClose={() => setIsPopupVisible(false)} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
