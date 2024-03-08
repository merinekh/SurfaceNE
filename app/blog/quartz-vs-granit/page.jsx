"use client";
import BlogFullArticle from "@/components/BlogFullArticle";
import React from "react";
import image from "../../../public/images/project_images/laundry-room-white-gray.png";

const blogs = [
  {
    title: "Comptoir Quartz ou Granit? Comment choisir?",
    date: "10 janvier 2024",
    imageSrc: image,
    content: [
      "Lorsqu'il s'agit de choisir entre un comptoir en quartz et un comptoir en granit, plusieurs facteurs doivent être pris en compte. Chacun de ces matériaux présente ses propres avantages et inconvénients. Examinons les principales différences pour vous aider à prendre la meilleure décision pour votre cuisine ou votre salle de bain.",
      "Avantages du comptoir en Quartz :",
      "1. **Durabilité :** Le quartz est connu pour sa résistance et sa durabilité. Composé principalement de quartz naturel et de résine synthétique, il offre une surface solide et résistante aux fissures.",
      "2. **Résistance aux taches :** Grâce à sa densité et à sa non-porosité, le quartz est moins susceptible d'absorber les liquides et est donc résistant aux taches.",
      "3. **Facilité d'entretien :** Les comptoirs en quartz sont extrêmement faciles à nettoyer et à entretenir, nécessitant simplement un chiffon humide et un détergent doux pour les garder propres.",
      "4. **Esthétique :** Disponible dans une large gamme de couleurs et de finitions, le quartz offre une esthétique moderne et peut imiter l'apparence de matériaux plus coûteux.",
      "5. **Hygiène :** Étant non poreux, le quartz empêche la croissance des bactéries et des germes, offrant ainsi un environnement plus hygiénique.",
      "6. **Valeur ajoutée à votre maison :** L'installation d'un comptoir en quartz peut augmenter la valeur de votre maison, ce qui en fait un investissement rentable pour l'avenir.",
      "Avantages du comptoir en Granit :",
      "1. **Beauté naturelle :** Le granit est une pierre naturelle avec une variété de couleurs et de motifs uniques, offrant ainsi une esthétique naturelle et luxueuse à votre espace.",
      "2. **Durabilité :** Également très durable, le granit est résistant aux rayures et aux taches, et peut supporter la chaleur des casseroles chaudes.",
      "3. **Facilité d'entretien :** Les comptoirs en granit sont faciles à nettoyer avec un chiffon doux et de l'eau savonneuse, et peuvent également être scellés pour une protection supplémentaire.",
      "4. **Augmentation de la valeur de votre maison :** Tout comme le quartz, l'ajout d'un comptoir en granit peut augmenter la valeur de votre propriété sur le marché de l'immobilier.",
      "5. **Résistance aux bactéries :** Le granit, tout comme le quartz, est non poreux, ce qui le rend résistant aux bactéries et aux germes.",
      "6. **Résistance aux rayons UV :** Le granit est également résistant aux rayons UV, ce qui en fait un choix idéal pour une utilisation en extérieur.",
      "En fin de compte, le choix entre un comptoir en quartz et un comptoir en granit dépendra de vos préférences personnelles en termes d'esthétique, de budget et de besoins en matière de durabilité et d'entretien. En considérant attentivement ces facteurs, vous pourrez choisir le comptoir qui convient le mieux à votre style de vie et à votre espace.",
    ],
  },
  // Add more blog objects with different titles, dates, and imageSrcs as needed
];

const QuartzVsGranitePage = () => <BlogFullArticle blogs={blogs} />;
export default QuartzVsGranitePage;
