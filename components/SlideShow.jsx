"use client";

import React, { useState, useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "next/image";

const Slideshow = ({ slides, isSmall = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(currentSlide - 1);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isPlaying) {
      intervalId = setInterval(() => {
        setPrevSlide(currentSlide);
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
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slideshow">
      <div
        className={`slides relative w-full ${
          isSmall ? "h-[25vh] sm:h-[30vh] rounded" : "h-80 sm:h-[70vh]"
        } bg-cover `}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""} ${
              index === prevSlide ? "prev" : ""
            } ${
              currentSlide - prevSlide === -1 ||
              currentSlide - prevSlide === slides.length - 1
                ? "reverse"
                : ""
            }`}
          >
            <Image
              src={slide.image}
              alt={`Realisation/Projet ${index + 1}`}
              objectFit="cover"
              fill
              sizes="100vw"
              // quality={75}
            />
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
