//Modules
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
//base (baseources)
import logo from "./logo.svg";
import "./css/App.css";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Specialized from "./pages/base/Specialized";
import Hosting from "./pages/base/Hosting";
import Internet from "./pages/base/Internet";
import Partners from "./pages/util/Partners";
//Component
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";

//Content Routes
function App() {
  // Popup visibility state
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  //Routes
  return (
    <Router>
      <Navbar />
      {isPopupVisible && (
        <ContactFormPopup onClose={() => setIsPopupVisible(false)} />
      )}

      <Routes>
        {/* Menu Routes */}        
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
        {/* Dropdown */}
        <Route path="/specialized" element={<Specialized />} />
        {/* Dropdown Routes */}
        <Route path="/partners" element={<Partners />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/internet" element={<Internet />} />
      </Routes>

      {/* Content */}
      <Home />

      {/* Footer */}
      <Footer />
      
    </Router>
  );
}

export default App;
