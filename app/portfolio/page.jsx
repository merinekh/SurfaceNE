"use client";
import React, { useRef, useEffect } from "react";
import "../globals.scss";
import Timeline from "@/components/Timeline";

const Portfolio = () => {
  const projectsData = [
    {
      title: "Kitchen Renovation",
      location: "123 Main St, Cityville",
      dates: "June 2021 - August 2021",
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
      dates: "June 2023 - August 2023",
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
      dates: "June 2024 - August 2024",
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
      dates: "June 2025 - August 2025",
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
      <div className="max-w-screen-lg mx-auto mt-8">
        <h2 className="text-3xl text-white text-center font-semibold mb-6">
          Nos Réalisations
        </h2>
        <Timeline projectsData={projectsData} />
      </div>
    </>
  );
};
export default Portfolio;
