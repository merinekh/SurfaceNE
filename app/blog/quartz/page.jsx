"use client";
import BlogFullArticle from "@/components/BlogFullArticle";
import React from "react";

const blogs = [
  {
    title: "Quartz",
    date: "23 octobre 2022",
    imageSrc:
      "//surfacesnouvelleere.ca/cdn/shop/articles/Sans_titre_12.png?v=1666558843",
    content: [
      "Un comptoir de quartz est un choix populaire pour les cuisines et les salles de bains. Les avantages d'un comptoir en quartz sont nombreux, notamment sa durabilité, sa résistance aux taches et sa facilité d'entretien. Voici quelques-uns des principaux avantages d'un comptoir de quartz :",
      "Durabilité : Le quartz est un matériau très résistant. Il est composé à environ 93% de quartz naturel et 7% de résine synthétique. Cette combinaison crée un matériau solide et résistant qui est moins susceptible de se fissurer ou de se casser que d'autres matériaux de comptoir.",
      "Résistance aux taches : Les comptoirs de quartz sont résistants aux taches. Le matériau est dense et non poreux, ce qui signifie qu'il est moins susceptible d'absorber les liquides qui peuvent causer des taches. Si vous renversez du vin ou du café sur votre comptoir, il suffit de l'essuyer avec un chiffon humide.",
      "Facilité d'entretien : Les comptoirs de quartz sont très faciles à entretenir. Il suffit de les nettoyer avec un chiffon humide et un détergent doux pour les garder propres. Il n'y a pas besoin de sceller le comptoir, contrairement à d'autres matériaux de comptoir comme le granit.",
      "Esthétique : Les comptoirs de quartz sont disponibles dans une variété de couleurs et de finitions. Vous pouvez choisir un comptoir de quartz qui s'harmonise parfaitement avec le reste de votre décoration intérieure. Les comptoirs en quartz peuvent également imiter l'apparence de matériaux plus coûteux, comme le marbre ou le granit, mais à un prix plus abordable.",
      "Hygiène : Les comptoirs de quartz sont considérés comme hygiéniques car ils ne sont pas poreux et ne permettent donc pas aux bactéries et aux germes de s'y installer.",
      "Valeur ajoutée à votre maison : Un comptoir de quartz peut ajouter de la valeur à votre maison. Si vous décidez de vendre votre maison, un comptoir en quartz peut être un atout pour les acheteurs potentiels.",
    ],
  },
];

const QuartzVsGranitePage = () => <BlogFullArticle blogs={blogs} />;
export default QuartzVsGranitePage;
