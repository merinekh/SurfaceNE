"use client";
import BlogFullArticle from "@/components/BlogFullArticle";
import React from "react";

const blogs = [
  {
    title: "GRANIT",
    date: "23 octobre 2022",
    imageSrc:
      "https://surfacesnouvelleere.ca/cdn/shop/articles/home-5835289_1920.jpg?v=1666558753&width=1920",
    content: [
      "Un comptoir de granit est un choix populaire pour les cuisines et les salles de bains. Il est apprécié pour sa beauté naturelle, sa durabilité et sa facilité d'entretien. Voici quelques avantages d'un comptoir de granit :",
      "Beauté naturelle : Le granit est une pierre naturelle avec une variété de couleurs et de motifs. Chaque comptoir de granit est unique, ce qui signifie que vous pouvez avoir un design exclusif pour votre cuisine ou salle de bain.",
      "Durabilité : Le granit est une pierre dure et résistante aux rayures et aux taches. Il peut résister à la chaleur des casseroles chaudes et à la pression exercée lors de la coupe des aliments. Un comptoir de granit peut durer de nombreuses années avec un entretien approprié.",
      "Facilité d'entretien : Les comptoirs de granit sont faciles à entretenir. Il suffit de les nettoyer régulièrement avec un chiffon doux et de l'eau savonneuse. Vous pouvez également utiliser des produits de nettoyage spécialement conçus pour les comptoirs de granit.",
      "Augmente la valeur de votre maison : Les comptoirs de granit sont très recherchés sur le marché de l'immobilier. Si vous envisagez de vendre votre maison, l'ajout d'un comptoir de granit peut augmenter la valeur de votre propriété.",
      "Résistance aux bactéries : Le granit est un matériau non poreux, ce qui signifie qu'il est résistant aux bactéries et aux germes. Cela en fait un choix idéal pour les zones de préparation des aliments.",
      "Résistance aux rayons UV : Le granit est résistant aux rayons UV, ce qui signifie que sa couleur ne se décolore pas avec le temps. Cela signifie également que vous pouvez l'utiliser à l'extérieur pour les barbecues et autres activités de plein air.",
      "En somme, un comptoir de granit offre de nombreux avantages pour votre maison. Il est beau, durable, facile à entretenir, résistant aux bactéries et augmente la valeur de votre propriété. Avec un investissement initial, vous pouvez profiter d'un comptoir de granit pour de nombreuses années à venir.",
    ],
  },
  // You can add more blog objects here if needed
];

const QuartzVsGranitePage = () => <BlogFullArticle blogs={blogs} />;
export default QuartzVsGranitePage;
