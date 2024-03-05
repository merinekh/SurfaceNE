"use client";
import React from "react";
import { Card } from "react-bootstrap";
import image1 from "../../public/images/project_images/kitchenSinkGray&Black.png";
import image2 from "../../public/images/project_images/kitchen-countertop-3.png";
import image3 from "../../public/images/project_images/kitchenSurfaceGray&Black.png";
import Image from "next/image";

const blogs = [
  {
    title: "Comptoir quartz ou granit? Comment choisir?",
    date: "10 janvier 2024",
    imageSrc: image3,
    link: "/blog/quartz-vs-granit",
    excerpt:
      "Les comptoirs de quartz et de granit sont deux des options les plus populaires pour les plans de travail de cuisine et de salle de bain. Bien qu'ils offrent des caractéristiques similaires...",
  },
  {
    title: "QUARTZ",
    date: "22 janvier 2024",
    imageSrc: image2,
    link: "/blog/quartz",
    excerpt:
      "Un comptoir de quartz est un choix populaire pour les cuisines et les salles de bains. Les avantages d'un comptoir en quartz incluent sa durabilité, sa résistance aux taches...",
  },
  {
    title: "GRANIT",
    date: "23 fevrier 2024",
    imageSrc: image1,
    link: "/blog/granit",
    excerpt:
      "Un comptoir de granit est un choix populaire pour les cuisines et les salles de bains. Il est reconnu pour sa beauté naturelle, sa durabilité exceptionnelle et sa facilité d'entretien. Voici...",
  },
];

const BlogCard = ({ title, date, imageSrc, link, excerpt }) => (
  <a href={link}>
    <div
      className="blog-article mb-6 lg:mb-0 hover:scale-105 hover:mx-2"
      href={link}
    >
      <Card className="relative rounded-lg shadow-lg bg-white lg:h-[42vh] 2xl:h-[50vh]">
        <Image
          variant="top"
          src={imageSrc}
          alt={title}
          objectFit="cover"
          className="w-full sm:h-72 object-cover object-bottom rounded-t-lg 2xl:h-96"
        />
        <Card.Body className="p-4">
          <Card.Title className="text-lg font-semibold">{title}</Card.Title>
          <Card.Text className="text-sm text-gray-600 mb-2">{date}</Card.Text>
          <Card.Text className="text-sm text-gray-700">{excerpt}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  </a>
);

const BlogPage = () => {
  return (
    <div className="py-6 px-4 flex flex-col items-center lg:justify-center">
      <h1 className="text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6 text-white">
        Blogues et actualités
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            id={blog.id}
            className={`col-span-1  ${
              index === 0
                ? "md:col-span-2 lg:col-span-1 flex justify-center"
                : "md:col-span-1"
            }`}
          >
            <BlogCard {...blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
