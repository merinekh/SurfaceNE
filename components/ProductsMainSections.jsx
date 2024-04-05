import React from "react";
import Image from "next/image";
import image1 from "../public/images/benefits-of-quartz.png";
import image2 from "../public/images/benefits-of-granite.png";

const ProductsMainSections = () => {
  return (
    <>
      <section className="section-container quartz-section">
        {renderSection(
          "QUARTZ",
          "Le quartz est une matière qui se démarque autant par son esthétique que sa résistance. Cette surface est facile à entretenir et durable. Le Quartz conserve une très longue durée de vie tout en conférant à votre espace un look contemporain et moderne. Consultez notre blogue sur le Quartz pour en savoir plus.",
          "/blog/quartz",
          image1
        )}
      </section>

      <section className="section-container granite-section">
        {renderSection(
          "GRANITE",
          "Le granite est une matière première encore plus robuste que le quartz. Il est réputé pour donner un look industriel ou moderne. Cependant, il est essentiel d'entretenir régulièrement votre surface en granite en utilisant des produits d'entretien appropriés pour maintenir votre comptoir comme neuf. Consultez notre blogue sur le Granit pour en savoir plus.",
          "/blog/granit",
          image2
        )}
      </section>
    </>
  );
};

const renderSection = (title, content, link, imgsrc) => {
  return (
    <div className="py-6 sm:mx-8 sm:px-2 flex flex-col items-center lg:flex-row lg:justify-center">
      <div className="w-full lg:w-1/3 lg:order-1 mb-2 lg:mb-0 sm:rounded-2xl overflow-hidden">
        <Image
          src={imgsrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-3xl text-center px-2 sm:px-3 lg:text-left lg:order-0">
        <div className="text-white">
          <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">
            {title}
          </h2>
          <p className=" text-gray-300">{content}</p>
        </div>
        <div className="mt-4 lg:mt-6">
          <a
            href={link}
            className="inline-block px-4 py-2 rounded-full bg-white text-black hover:bg-gray-300 transition duration-300 ease-in-out text-sm lg:text-base"
          >
            POUR EN SAVOIR PLUS
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsMainSections;
