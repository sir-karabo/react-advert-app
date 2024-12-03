import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMPORTING IMAGES - Updated to import each image individually instead of destructuring from an array
import slide1 from "../../media/assets/slide-01.jpg"; // Correct image import
import slide2 from "../../media/assets/slide-02.jpg"; // Correct image import
import slide3 from "../../media/assets/slide-03.jpg"; // Correct image import

const Hero = () => {
  // Settings for React Slick
  const settings = {
    dots: true, // Enable the indicators (dots for navigation)
    infinite: true, // Infinite loop
    speed: 500, // Speed of transition (500ms)
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed (3 seconds)
    arrows: true, // Show default previous/next arrows
    prevArrow: (
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-opacity-50 p-2 rounded-full shadow-lg hover:bg-opacity-70 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    ),
    nextArrow: (
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-opacity-50 p-2 rounded-full shadow-lg hover:bg-opacity-70 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    ),
  };

  return (
    <div className="relative w-full">
      {/* Carousel Container with React-Slick */}
      <Slider {...settings}>
        {/* SLIDE 1 */}
        <div className="relative w-full h-[500px]">
          <img
            src={slide1} // UPDATED to use the imported variable `slide1` instead of hardcoding the path
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* SLIDE 2 */}
        <div className="relative w-full h-[500px]">
          <img
            src={slide2} // UPDATED to use the imported variable `slide2` instead of hardcoding the path
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* SLIDE 3 */}
        <div className="relative w-full h-[500px]">
          <img
            src={slide3} // UPDATED to use the imported variable `slide3` instead of hardcoding the path
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
