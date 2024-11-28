import React, { useState } from "react";
import Slider from "react-slick";
// import "../../css/components/hero.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Integration from "./Integration"; // Adjust the path if necessary
// import Testimonials from "./Testimonials";

// // Import images
// import wifiImage from "./media/wifi_homepage.png";
// import cloudImage from "./media/cloud2.jpg";
// import webDevImage from "./media/web_dev.jpg";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For devices smaller than 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // For devices smaller than 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="hero-container">
      <Slider {...settings}>
        <div>
          <img
            src="/images/slide1.jpg" // Replace with your image paths
            alt="Slide 1"
            className="hero-slide-image"
          />
          <div className="caption">Welcome to Our Website</div>
        </div>
        <div>
          <img
            src="/images/slide2.jpg"
            alt="Slide 2"
            className="hero-slide-image"
          />
          <div className="caption">Experience Excellence</div>
        </div>
        <div>
          <img
            src="/images/slide3.jpg"
            alt="Slide 3"
            className="hero-slide-image"
          />
          <div className="caption">Discover More</div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
