"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const faqData = [
  {
    question:
      "Combien de temps faut-il pour obtenir un retour suite à la soumission du formulaire?",
    answer:
      "Dès que vous soumettez votre formulaire, notre équipe s'engage à vous contacter dans les 24 heures suivantes pour discuter des détails de votre projet et répondre à toutes vos questions.",
  },
  {
    question: "Comment puis-je obtenir une soumission?",
    answer:
      "Pour obtenir une soumission, rendez-vous simplement sur notre site web et accédez à la section 'Soumission'. Remplissez le formulaire en fournissant autant de détails que possible. Une fois soumis, notre équipe vous contactera pour discuter des options disponibles et vous fournir une estimation précise.",
  },
  {
    question:
      "Quelle est la différence entre un comptoir en Quartz et en Granite?",
    answer:
      "Le Quartz et le Granite sont deux matériaux populaires pour les comptoirs, chacun avec ses propres caractéristiques. BREAK Le Quartz est un matériau fabriqué principalement à partir de cristaux de Quartz, de résines polymères et de pigments. Il offre une variété de couleurs et de motifs, ainsi qu'une grande durabilité et une résistance aux taches et aux rayures. BREAK Le Granite, quant à lui, est une pierre naturelle extraite de carrières. Il est apprécié pour son aspect unique et sa durabilité exceptionnelle. Bien que tous deux soient d'excellents choix, le choix entre Quartz et Granite dépend souvent des préférences esthétiques et des besoins individuels.",
  },
  {
    question: "Est-ce que la prise de mesure à domicile est gratuite?",
    answer:
      "Oui, la prise de mesure à domicile est entièrement gratuite. Un de nos experts se rendra chez vous pour prendre des mesures précises et discuter des détails de votre projet, le tout sans frais supplémentaires.",
  },
  {
    question:
      "Quels sont les délais habituels pour la réalisation d'un projet?",
    answer:
      "Les délais peuvent varier en fonction de la complexité de votre projet et de notre charge de travail actuelle. En règle générale, vous pouvez vous attendre à ce que votre projet soit complété dans un délai de 7 à 14 jours à compter de la confirmation de votre commande.",
  },
  {
    question:
      "Quelles sont les recommandations d'entretien pour les comptoirs en Quartz?",
    answer:
      "L'entretien des comptoirs en Quartz est relativement simple. BREAK Pour le nettoyage quotidien, utilisez un chiffon doux et de l'eau savonneuse. BREAK Évitez les produits abrasifs ou les nettoyants à base d'acide, car ils pourraient endommager la surface du Quartz. BREAK De plus, évitez de placer des objets chauds directement sur le comptoir, car cela pourrait provoquer des dommages permanents. BREAK Pour une protection supplémentaire, envisagez d'appliquer un scellant tous les ans.",
  },
  {
    question: "Quelle est la durée de vie d'un comptoir en Quartz?",
    answer:
      "Avec les soins appropriés, un comptoir en Quartz peut durer toute une vie. Ces comptoirs sont réputés pour leur durabilité et leur résistance aux taches, aux rayures et à la chaleur.",
  },
  {
    question: "Y a-t-il une garantie sur les comptoirs?",
    answer:
      "Oui, tous nos comptoirs sont couverts par une garantie à vie. Cela vous assure une tranquillité d'esprit et une protection contre les défauts de fabrication.",
  },
  {
    question: "Que comprend la soumission?",
    answer:
      "Notre soumission comprend une estimation détaillée des coûts, la prise de mesure à domicile, la fabrication sur mesure du comptoir, la livraison et l'installation complète, y compris les éviers. Nous veillons à ce que tous les aspects de votre projet soient pris en compte pour une expérience sans souci.",
  },
  {
    question:
      "Est-il possible de commander uniquement la découpe du comptoir, sans la prise de mesure et l'installation?",
    answer:
      "Oui, nous proposons un service de découpe sur mesure pour répondre à vos besoins spécifiques. Contactez-nous pour discuter des détails de votre projet et obtenir un devis personnalisé.",
  },
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const renderAnswerWithParagraphs = (answer) => {
    return answer.split("BREAK").map((paragraph, index) => (
      <>
        {" "}
        <p key={index} className="text-md">
          {paragraph}
        </p>
        <br />
      </>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-center text-white text-2xl lg:text-3xl font-semibold my-8">
        Foire Aux Questions
      </h1>
      <div className="space-y-4">
        <p className="text-gray-300 text-md font-semibold my-6">
          Consultez les questions les plus fréquemment posées.
        </p>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg border bg-white border-gray-200 overflow-hidden ${
              expandedIndex === index ? "" : ""
            }`}
          >
            <div
              className="flex items-center justify-between px-4 py-3 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="text-md font-semibold">{item.question}</div>
              <motion.div
                key={expandedIndex === index ? "minus" : "plus"}
                initial={{
                  rotate: expandedIndex === index ? -90 : 90,
                }}
                animate={{
                  zIndex: 1,
                  rotate: 0,
                  transition: {
                    type: "tween",
                    duration: 0.15,
                    ease: "circOut",
                  },
                }}
                exit={{
                  zIndex: 0,
                  rotate: expandedIndex === index ? -90 : 90,
                  transition: {
                    type: "tween",
                    duration: 0.15,
                    ease: "circIn",
                  },
                }}
              >
                {expandedIndex === index ? (
                  <FontAwesomeIcon icon={faMinus} />
                ) : (
                  <FontAwesomeIcon icon={faPlus} />
                )}
              </motion.div>
            </div>
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  className="bg-gray-100 px-4 py-2"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="text-md">
                    {renderAnswerWithParagraphs(item.answer)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
