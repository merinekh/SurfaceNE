import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageComparisonSlider = ({ beforeImageUrl, afterImageUrl }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseDown = (e) => {
    e.preventDefault(); // Disable text selection on drag
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const sliderRect = e.currentTarget.getBoundingClientRect();
      const newPosition =
        ((e.clientX - sliderRect.left) / sliderRect.width) * 100;
      setSliderPosition(Math.min(100, Math.max(0, newPosition)));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative overflow-hidden border rounded-lg shadow-md cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Images Container */}
      <div className="relative">
        {/* Before Image */}
        <img
          src={beforeImageUrl}
          alt="Before"
          className="w-full h-auto max-h-50vh object-cover select-none"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
          onMouseDown={handleMouseDown}
        />

        {/* After Image */}
        <img
          src={afterImageUrl}
          alt="After"
          className="w-full h-auto max-h-50vh object-cover absolute top-0 left-0 select-none"
          style={{
            clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
          }}
          onMouseDown={handleMouseDown}
        />

        {/* Slider Line and Handle */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full bg-gray-300 w-px"
          style={{ height: "80vh", left: `${sliderPosition}%` }}
        />

        <div
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `calc(${sliderPosition}% - 6px)` }} // Adjust -6px based on your design
          onMouseDown={handleMouseDown}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-gray-700" />
          <FontAwesomeIcon icon={faChevronRight} className="text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default ImageComparisonSlider;
