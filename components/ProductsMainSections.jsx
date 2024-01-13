import React from "react";

const ProductsMainSections = () => {
  return (
    <>
      <section className="section-container quartz-section">
        {renderSection(
          "QUARTZ",
          "Le quartz est une matière qui se démarque autant par son esthétique que sa résistance. Cette surface est facile à entretenir et durable. Le Quartz conserve une très longue durée de vie tout en conférant à votre espace un look contemporain et moderne. Consultez notre blogue sur le Quartz pour en savoir plus.",
          "/blogs/blogues-et-actualites/quartz",
          "/images/benefits-of-quartz.png"
        )}
      </section>

      <section className="section-container granite-section">
        {renderSection(
          "GRANITE",
          "Le granite est une matière première encore plus robuste que le quartz. Il est réputé pour donner un look industriel ou moderne. Cependant, il est essentiel d'entretenir régulièrement votre surface en granite en utilisant des produits d'entretien appropriés pour maintenir votre comptoir comme neuf. Consultez notre blogue sur le Granite pour en savoir plus.",
          "/blogs/blogues-et-actualites/granite",
          "/images/benefits-of-granite.png"
        )}
      </section>
    </>
  );
};

const renderSection = (title, content, link, imgsrc) => {
  return (
    <div className="py-6 flex flex-col items-center md:flex-row md:justify-center">
      <img
        src={imgsrc}
        alt=""
        className="w-full md:w-1/3 md:order-1 mb-2 md:mb-0"
      />
      <div className="max-w-3xl text-center md:text-left md:order-0">
        <div className="text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
            {title}
          </h2>
          <p className="text-sm md:text-base text-gray-300">{content}</p>
        </div>
        <div className="mt-4 md:mt-6">
          <a
            href={link}
            className="inline-block px-4 py-2 rounded-full bg-white text-black hover:bg-gray-300 transition duration-300 ease-in-out text-sm md:text-base"
          >
            POUR EN SAVOIR PLUS
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsMainSections;
