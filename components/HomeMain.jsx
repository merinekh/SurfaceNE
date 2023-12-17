"use client";
import React from "react";
import StepComponent from "./StepsComponent";

const HomeMain = () => {
  return (
    <main className="flex justify-center mx-24 px-20">
      <div className="card bg-white flex rounded-xl mx-20 my-4">
        <div className="text-content p-28">
          <h2 className="h2 text-2xl font-bold">Votre comptoir en 5 étapes</h2>
          <div className="body text-base text-gray-600">
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
            <a
              href="/pages/contact"
              className="btn-primary inline-block mt-4 px-6 py-3 rounded-full text-white bg-black hover:bg-gray transition duration-300 ease-in-out"
            >
              SOUMISSION GRATUITE
            </a>
          </div>
        </div>
        <div className="image-content flex justify-center items-center">
          <div className="relative h-full">
            <img
              src={`/images/home-caroussel-hero-3.png`}
              alt={`Image Home Card`}
              className="w-auto h-full object-cover rounded-r-xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeMain;
