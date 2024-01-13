"use client";
import React from "react";
import StepComponent from "./StepsComponent";
import ProductsBanner from "./ProductsHomeBanner";

const HomeMain = () => {
  return (
    <>
      <ProductsBanner />
      <main className="flex flex-col items-center mx-4 sm:mx-8 lg:mx-24 px-4 sm:px-8">
        <div className="card bg-white flex flex-col lg:flex-row rounded-xl my-4 sm:my-8">
          <div className="image-content relative h-auto">
            <img
              src={`/images/project_images/ilot-14inch-2.jpg`}
              alt={`Image Home Card`}
              className="w-full h-full object-cover rounded-t-sm lg:rounded-l-lg"
            />
          </div>
          <div className="text-content p-4 sm:p-8 flex flex-col items-center">
            <h2 className="h2 text-2xl font-bold mb-4 sm:mb-6">
              Votre comptoir en 5 étapes
            </h2>
            <div className="body text-base text-gray-600 mb-4 sm:mb-6">
              <StepComponent
                stepNumber="1"
                title="Soumission en ligne"
                description={`Remplissez le formulaire sous l'onglet "Soumission".`}
              />
              <StepComponent
                stepNumber="2"
                title="Retour de notre part"
                description="Un membre de notre équipe communiquera avec vous 24 heures après avoir soumis le formulaire."
              />
              <StepComponent
                stepNumber="3"
                title="Prise des mesures"
                description="Un membre de notre équipe se rendra à votre domicile pour prendre les mesures nécessaires."
              />
              <StepComponent
                stepNumber="4"
                title="Conception"
                description="Ça y est! La création de votre comptoir s'amorce."
              />
              <StepComponent
                stepNumber="5"
                title="Contact & Installation"
                description="Nous vous contacterons pour procéder à l'installation de votre comptoir. Il est maintenant l'heure de profiter de votre nouvelle surface!"
              />
            </div>
            <a
              href="/pages/contact"
              className="btn-primary text-center px-6 py-3 rounded-full text-white bg-black hover:bg-gray transition duration-300 ease-in-out"
            >
              SOUMISSION GRATUITE
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeMain;
