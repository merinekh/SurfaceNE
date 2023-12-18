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
    <div className="py-12 flex justify-center items-center">
      <img src={imgsrc} alt="" width="30%" className="px-8" />
      <div className="max-w-3xl">
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-base text-gray-300">{content}</p>
        </div>
        <div className="mt-8">
          <a
            href={link}
            className="inline-block px-6 py-3 rounded-full bg-white text-black hover:bg-gray-300 transition duration-300 ease-in-out"
          >
            POUR EN SAVOIR PLUS
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsMainSections;
