"use client";

import React, { useState, useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slides = [
    {
      image: "home-caroussel-hero-3.png",
      text: "Slide 3 Description",
      buttonLink: "/link-to-slide3",
    },
    {
      image: "home-caroussel-hero-1.jpg",
      text: "Slide 1 Description",
      buttonLink: "/link-to-slide1",
    },
    {
      image: "home-caroussel-hero-2.png",
      text: "Slide 2 Description",
      buttonLink: "/link-to-slide2",
    },
    // Add more slides as needed
  ];

  useEffect(() => {
    let intervalId;

    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }, 3000); // Change the interval duration as needed
    }

    return () => clearInterval(intervalId);
  }, [currentSlide, isPlaying, slides]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handlePausePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slideshow">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img
              src={`/images/${slide.image}`}
              alt={`Slide ${index + 1}`}
              className={
                !slide.image.includes("hero-1") ? "-translate-y-10" : ""
              }
            />
            {/* <div className="slide-text">
              <p>{slide.text}</p>
              <a href={slide.buttonLink}>Link</a>
            </div> */}
          </div>
        ))}
      </div>
      <div className="controls flex align-baseline py-3">
        <button onClick={goToPrevSlide}>
          <ChevronLeftIcon />
        </button>
        <div className="dots px-4">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
        <button onClick={goToNextSlide}>
          <ChevronRightIcon />
        </button>

        <button onClick={handlePausePlay}>
          {isPlaying ? (
            <PauseIcon className="text-white" />
          ) : (
            <PlayArrowIcon className="text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
