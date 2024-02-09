"use client";
import React from "react";
import ImageSlider from "./ImageSlider"; // Assuming you have an ImageSlider component

const Timeline = ({ projectsData }) => {
  return (
    <section className="timeline-container">
      <div className="timeline-box">
        <h4>Timeline</h4>
        <div className="relative">
          {/* White line */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-0.5 bg-white h-full"></div>
          {/* Timeline */}
          <div className="timeline flex-column justify-between items-start">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? "order-1" : "order-2" // Alternate left and right
                } bg-white shadow-md p-8 rounded-md mb-8 transition-opacity duration-500 opacity-1 relative flex`}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-auto h-auto p-4 mb-6 bg-white rounded-full flex items-center justify-center text-black font-bold">
                  {project.dates.split(" - ")[0]} {/* Display year */}
                </div>
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                    <p className="text-gray-600 mb-2">{project.location}</p>
                    <p className="text-gray-600 mb-2">{project.dates}</p>
                    <p className="text-gray-800 mb-4">{project.description}</p>
                  </div>
                  <div className="sm:w-1/2">
                    <ImageSlider
                      beforeImageUrl={project.image_before}
                      afterImageUrl={project.image_after}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
