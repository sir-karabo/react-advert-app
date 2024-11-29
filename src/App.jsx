//Modules
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./css/App.css";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
// Base
import Specialized from "./pages/base/Specialized";
import Hosting from "./pages/base/Hosting";
import Internet from "./pages/base/Internet";
import Partners from "./pages/base/Partners";
// Components
import Navbar from "./pages/components/Navbar";
import Hero from "./pages/components/Hero";
import Footer from "./pages/components/Footer";
// Utilities
import Modal from "./pages/util/Modal";

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleOpenModal = () => {
    setIsPopupVisible(true);
  };

  const handleCloseModal = () => {
    setIsPopupVisible(false);
  };

  return (
    <Router>
      <Navbar onOpen={handleOpenModal} />
      {/* <Hero /> */}


      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/specialized" element={<Specialized />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/internet" element={<Internet />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
      <Footer />
      {isPopupVisible && <Modal onClose={handleCloseModal} />}
    </Router>
  );
}

export default App;
