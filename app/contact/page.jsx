"use client";
import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Place your form submission logic here
  };

  return (
    <>
      <Container className="flex justify-center xl:w-screen  my-4">
        <Card className="w-screen m-2 p-6 sm:p-8 sm:w-3/4 rounded-lg shadow-lg bg-white">
          <h1 className="text-3xl font-semibold text-center mb-4">
            Contactez-nous
          </h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              id="formBasicNameEmail"
              className="flex flex-col lg:flex-row"
            >
              <Form.Control
                type="text"
                placeholder="Votre nom complet"
                className="mb-4 w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none lg:me-4"
              />
              <Form.Control
                type="email"
                placeholder="Votre courriel"
                className="mb-4 w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none"
              />
            </Form.Group>

            <Form.Group id="formBasicMessage">
              <Form.Control
                as="textarea"
                placeholder="Votre message"
                rows={4}
                className="mb-4 w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none "
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-full inline-block px-4 py-2 rounded-full bg-black text-white hover:bg-gray-300 transition duration-300 ease-in-out text-sm lg:text-base"
            >
              Envoyer
            </Button>
          </Form>
        </Card>
      </Container>
      <div className="flex flex-col items-center text-white">
        <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">
          Informations de contact
        </h2>{" "}
        <div className="py-4 px-2">
          <p className="text-base md:text-lg text-gray-300">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="mr-2 text-white"
            />
            <span className="text-white font-semibold">Adresse:</span> 12220 Rue
            April, Pointe-aux-Trembles, QC H1B 5N5
            <br />
            <FontAwesomeIcon icon={faClock} className="mr-2 text-white" />
            <span className="text-white font-semibold">
              Heures d'ouverture:
            </span>
            <ul className="flex flex-col items-center mt-2">
              <li>Lundi 8 h–16 h</li>
              <li>Mardi 8 h–16 h</li>
              <li>Mercredi 8 h–16 h</li>
              <li>Jeudi 8 h–16 h</li>
              <li>Vendredi 8 h–16 h</li>
              <li>Samedi Fermé</li>
              <li>Dimanche Fermé</li>
            </ul>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-2 text-white mt-2"
            />
            <span className="text-white font-semibold">Courriel:</span>{" "}
            <h4 className="">info@surfacesnouvelleere.ca</h4>
            <br />
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-white" />
            <span className="text-white font-semibold">Téléphone:</span> (514)
            424-3882
          </p>
        </div>{" "}
        <iframe
          className="h-80 w-full"
          src="https://storage.googleapis.com/maps-solutions-li09ynpgkz/locator-plus/pamn/locator-plus.html"
          width="100%"
          height="100%"
          //   style="border:0;"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Contact;
