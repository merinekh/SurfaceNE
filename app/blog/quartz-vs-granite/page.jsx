"use client";
import BlogFullArticle from "@/components/BlogFullArticle";
import React from "react";

const blogs = [
  {
    title: "Comptoir quartz ou granit? Comment choisir?",
    date: "10 mars 2023",
    imageSrc:
      "//surfacesnouvelleere.ca/cdn/shop/articles/kitchen-5075245_1920.jpg?v=1666558804&amp;width=350",
    content: [
      "Les comptoirs de quartz et de granit se distinguent comme deux des options les plus recherchées pour les surfaces de cuisine et de salle de bains. Bien qu'ils partagent certaines caractéristiques communes, ces matériaux présentent des différences significatives.",
      "Le granit, une pierre naturelle extraite de carrières du monde entier, offre une palette de couleurs, de motifs et de veines, rendant chaque dalle unique. Réputés pour leur résistance à la chaleur, aux rayures et aux taches, les comptoirs en granit ont généralement une durée de vie supérieure à leurs homologues en quartz. Cependant, un scellement régulier est essentiel pour atténuer les taches et les fissures.",
      "En revanche, le quartz est composé de quartz broyé, de résine et de pigments, ce qui lui confère un aspect uniforme disponible dans différentes couleurs et motifs. Notamment durable et résistant à la chaleur, aux rayures et aux taches, les comptoirs en quartz nécessitent peu d'entretien, car ils ne nécessitent pas de scellement régulier.",
      "En ce qui concerne les prix, les comptoirs en granit peuvent être plus coûteux en raison de leur rareté et des défis d'extraction. En revanche, choisir des options de quartz haut de gamme pourrait augmenter les dépenses globales.",
      "En termes de facilité d'installation, les comptoirs en quartz offrent généralement une configuration plus simple par rapport à leurs homologues en granit, en raison de leur composition plus légère et plus flexible.",
      "Enfin, en termes d'esthétique, les comptoirs en granit trouvent souvent leur place dans les cuisines traditionnelles, tandis que les comptoirs en quartz sont prédominants dans les cuisines modernes, en raison de leur aspect uniforme.",
      "En résumé, les comptoirs en quartz et en granit présentent chacun des avantages et des inconvénients uniques, le choix dépendant finalement des préférences personnelles en matière de style, de durabilité, de prix et d'entretien.",
    ],
  },
  // Add more blog objects with different titles, dates, and imageSrcs as needed
];

const QuartzVsGranitePage = () => <BlogFullArticle blogs={blogs} />;
export default QuartzVsGranitePage;
