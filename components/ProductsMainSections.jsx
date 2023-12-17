import React from "react";

const ProductsMainSections = () => {
  return (
    <>
      <section className="section-container quartz-section">
        {renderSection(
          "QUARTZ",
          "Le quartz est une matière qui se démarque autant par son esthétique que sa résistance. C'est une surface qui est facile d'entretien et durable. Le Quartz conservera une très longue durée de vie et donnera à votre espace un look contemporain et moderne. Consultez notre blogue sur le Quartz pour en savoir plus.",
          "/blogs/blogues-et-actualites/quartz"
        )}
      </section>

      <section className="section-container granite-section">
        {renderSection(
          "GRANITE",
          "Le granite est une matière première encore plus robuste que le quartz. Il est reconnu pour donner un look industriel ou moderne. Par contre, il est essentiel d'entretenir annuellement votre surface de Granite en utilisant des produits d'entretiens adéquats pour garder votre surface de comptoir comme neuve. Consultez notre blogue sur le Granite pour en savoir plus.",
          "/blogs/blogues-et-actualites/granite"
        )}
      </section>
    </>
  );
};

const renderSection = (title, content, link) => {
  return (
    <div className="py-12">
      <div className="text-center max-w-3xl mx-auto">
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
