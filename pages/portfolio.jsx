"use client";
import React from "react";
import "../app/globals.scss";
import ImageSlider from "@/components/ImageSlider";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

const Portfolio = () => {
  const projectsData = [
    {
      title: "Kitchen Renovation",
      location: "123 Main St, Cityville",
      dates: "June 2022 - August 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus augue. Proin et justo non metus ullamcorper congue at vitae elit. In hac habitasse platea dictumst.",
      image_before:
        "https://www.progressivecountertop.com/wp-content/uploads/2022/02/Before-1-scaled-e1643813208551.jpg",
      image_after:
        "https://www.progressivecountertop.com/wp-content/uploads/2022/02/After-2-crop-scaled.jpg",
    },
    {
      title: "Kitchen Renovation",
      location: "123 Main St, Cityville",
      dates: "June 2022 - August 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus augue. Proin et justo non metus ullamcorper congue at vitae elit. In hac habitasse platea dictumst.",
      image_before:
        "https://www.progressivecountertop.com/wp-content/uploads/2022/02/Before-1-scaled-e1643813208551.jpg",
      image_after:
        "https://www.progressivecountertop.com/wp-content/uploads/2022/02/After-2-crop-scaled.jpg",
    },
    {
      title: "Kitchen Renovation",
      location: "123 Main St, Cityville",
      dates: "June 2022 - August 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus augue. Proin et justo non metus ullamcorper congue at vitae elit. In hac habitasse platea dictumst.",
      image_before:
        "https://www.progressivecountertop.com/wp-content/uploads/2022/02/Before-1-scaled-e1643813208551.jpg",
      image_after:
        "https://www.progressivecountertop.com/wp-content/uploads/2022/02/After-2-crop-scaled.jpg",
    },
    {
      title: "Kitchen Renovation",
      location: "123 Main St, Cityville",
      dates: "June 2022 - August 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus augue. Proin et justo non metus ullamcorper congue at vitae elit. In hac habitasse platea dictumst.",
      image_before:
        "https://www.progressivecountertop.com/wp-content/uploads/2022/02/Before-1-scaled-e1643813208551.jpg",
      image_after:
        "https://www.progressivecountertop.com/wp-content/uploads/2022/02/After-2-crop-scaled.jpg",
    },
    {
      title: "Kitchen Renovation",
      location: "123 Main St, Cityville",
      dates: "June 2022 - August 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus augue. Proin et justo non metus ullamcorper congue at vitae elit. In hac habitasse platea dictumst.",
      image_before:
        "https://www.progressivecountertop.com/wp-content/uploads/2022/02/Before-1-scaled-e1643813208551.jpg",
      image_after:
        "https://www.progressivecountertop.com/wp-content/uploads/2022/02/After-2-crop-scaled.jpg",
    },
    {
      title: "Kitchen Renovation",
      location: "123 Main St, Cityville",
      dates: "June 2022 - August 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus augue. Proin et justo non metus ullamcorper congue at vitae elit. In hac habitasse platea dictumst.",
      image_before:
        "https://www.progressivecountertop.com/wp-content/uploads/2022/02/Before-1-scaled-e1643813208551.jpg",
      image_after:
        "https://www.progressivecountertop.com/wp-content/uploads/2022/02/After-2-crop-scaled.jpg",
    },
    // Add more projects as needed
    // {
    //   title: 'Project Title',
    //   location: 'Project Location',
    //   dates: 'Project Dates',
    //   description: 'Project Description',
    //   image_before: 'URL for before image',
    //   image_after: 'URL for after image',
    // },
    // ... (repeat for each project)
  ];

  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto mt-8">
        <h2 className="text-3xl text-white text-center font-semibold mb-6">
          Nos Réalisations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white shadow-md p-8 rounded-md mb-8">
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <p className="text-gray-600 mb-2">{project.location}</p>
              <p className="text-gray-600 mb-2">{project.dates}</p>
              <p className="text-gray-800 mb-4">{project.description}</p>

              <ImageSlider
                beforeImageUrl={project.image_before}
                afterImageUrl={project.image_after}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Portfolio;
