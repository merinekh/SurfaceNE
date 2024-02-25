"use client";
import React from "react";
import { Card } from "react-bootstrap";

const blogs = [
  {
    title: "Comptoir quartz ou granit? Comment choisir?",
    date: "10 mars 2023",
    imageSrc:
      "//surfacesnouvelleere.ca/cdn/shop/articles/kitchen-5075245_1920.jpg?v=1666558804&amp;width=533",
    link: "/blog/quartz-vs-granite",
    excerpt:
      "Les comptoirs de quartz et de granit sont deux des options les plus populaires pour les plans de travail de cuisine et de salle de bain. Bien qu'ils partagent certaines...",
  },
  {
    title: "QUARTZ",
    date: "23 octobre 2022",
    imageSrc:
      "//surfacesnouvelleere.ca/cdn/shop/articles/Sans_titre_12.png?v=1666558843&amp;width=533",
    link: "/blog/quartz",
    excerpt:
      "Un comptoir de quartz est un choix populaire pour les cuisines et les salles de bains. Les avantages d'un comptoir en quartz sont nombreux, notamment sa durabilité, sa résistance aux...",
  },
  {
    title: "GRANIT",
    date: "23 octobre 2022",
    imageSrc:
      "//surfacesnouvelleere.ca/cdn/shop/articles/home-5835289_1920.jpg?v=1666558753&amp;width=533",
    link: "/blog/granite",
    excerpt:
      "Un comptoir de granit est un choix populaire pour les cuisines et les salles de bains. Il est apprécié pour sa beauté naturelle, sa durabilité et sa facilité d'entretien. Voici...",
  },
];

const BlogCard = ({ title, date, imageSrc, link, excerpt }) => (
  <a href={link}>
    <div
      className="blog-article mb-6 lg:mb-0 hover:scale-105 hover:mx-2"
      href={link}
    >
      <Card className="rounded-lg shadow-lg bg-white lg:h-42vh">
        <Card.Img
          variant="top"
          src={imageSrc}
          alt={title}
          className="w-full sm:h-72 object-cover object-bottom"
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
      <h1 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-white">
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
