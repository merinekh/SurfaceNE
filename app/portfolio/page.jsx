"use client";
import React, { useRef, useEffect } from "react";
import "../globals.scss";
import Slideshow from "@/components/SlideShow";

// Kitchen
import image1 from "../../public/images/project_images/kitchen-black-white.png";
import image2 from "../../public/images/project_images/kitchen-white-wood-2.png";
import image3 from "../../public/images/project_images/kitchen-gray-2.png";
import image4 from "../../public/images/project_images/kitchenSurfaceGray&Black.png";
import image5 from "../../public/images/project_images/kitchen-black-white-2.png";
import image6 from "../../public/images/project_images/kitchen-gray-white.png";

// Commun spaces
import image7 from "../../public/images/project_images/counter-coffe.jpg";
import image8 from "../../public/images/project_images/wine-countertop.jpg";
import image9 from "../../public/images/project_images/ilot-14inch-1.jpg";
import image10 from "../../public/images/project_images/kitchen-countertop-wine.jpg";
import image11 from "../../public/images/project_images/living-room-white.png";
import image12 from "../../public/images/project_images/space-white-wood.png";

// Bathroom
import image13 from "../../public/images/project_images/bathroom-1.jpg";
import image14 from "../../public/images/project_images/bathroom-sink.jpg";
import image15 from "../../public/images/project_images/bathroom-sink-bath.jpg";
import image16 from "../../public/images/project_images/bathroom-1.jpg";
import image17 from "../../public/images/project_images/laundry-room-white-gray.png";

const Portfolio = () => {
  const realisationsData = [
    {
      title: "Cuisine",
      description: [
        "Transformez votre cuisine en un espace à la fois fonctionnel et esthétique avec nos comptoirs en quartz et en granit sur mesure.",
        "Du design contemporain au traditionnel, nous réalisons vos visions avec une attention méticuleuse aux détails pour un résultat durable et élégant.",
      ],
      slides: [
        {
          image: image1,
        },
        {
          image: image2,
        },
        {
          image: image3,
        },
        {
          image: image4,
        },
        {
          image: image5,
        },
        {
          image: image6,
        },
        // Add more slides as needed
      ],
    },
    {
      title: "Espace Commun",
      description: [
        "Les espaces communs sont le cœur de votre maison. Notre équipe d'experts conçoit des solutions sur mesure pour votre îlot de cuisine, votre bar ou votre cheminée, en ajoutant une touche de sophistication à chaque coin de rassemblement.",
      ],
      slides: [
        {
          image: image7,
        },
        {
          image: image8,
        },
        {
          image: image9,
        },
        {
          image: image10,
        },
        {
          image: image11,
        },
        {
          image: image12,
        },
        // Add more slides as needed
      ],
    },
    {
      title: "Salle de Bain",
      description: [
        "Offrez à votre salle de bain une touche de luxe et de confort avec nos comptoirs en quartz et en granit.",
        "Résistants à l'humidité et faciles à entretenir, nos installations sur mesure ajoutent une sophistication durable à chaque coin d'eau de votre maison.",
      ],
      slides: [
        {
          image: image13,
        },
        {
          image: image14,
        },
        {
          image: image15,
        },
        {
          image: image16,
        },
        {
          image: image17,
        },
        // Add more slides as needed
      ],
    },
  ];

  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4 text-white">
        Nos réalisations
      </h1>
      <div className="sm:mx-2 flex flex-col items-center 2xl:flex-row 2xl:justify-around">
        {realisationsData.map((realisation, index) => (
          <div
            key={index}
            className=" lg:order-1 m-2 sm:mb-8 rounded-2xl border-yellow-500 border-2 shadow-lg"
          >
            <div className="max-w-3xl text-center sm:px-3 lg:order-0 px-6 py-4 rounded-xl shadow-lg">
              <div className="text-white">
                <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">
                  {realisation.title}
                </h2>

                {realisation.description.map((paragraph, idx) => (
                  <>
                    <p
                      key={idx}
                      className="text-sm lg:text-lg font-light text-white py-2"
                    >
                      {paragraph}
                    </p>
                    {idx === 0 && (
                      <Slideshow slides={realisation.slides} isSmall />
                    )}
                  </>
                ))}
              </div>
              <div className="mt-4 lg:mt-6">
                <a
                  href="/#steps"
                  className="inline-block px-4 py-2 rounded-full bg-white text-black hover:bg-gray-300 transition duration-300 ease-in-out text-sm lg:text-base"
                >
                  POUR EN SAVOIR PLUS
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Portfolio;
