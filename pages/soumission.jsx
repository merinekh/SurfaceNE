"use client";
import React, { useState } from "react";
import "../app/globals.scss";
import { Container, Card, Form, Button, FormGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

const Soumission = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [material, setMaterial] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleMaterialChange = (e) => {
    setMaterial(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Place your form submission logic here
  };

  return (
    <>
      {" "}
      <Header />
      <div className="flex items-center justify-center py-4 bg-black">
        <Container className="flex justify-center xl:w-screen">
          <Card className="p-8 rounded-lg shadow-lg bg-white">
            <h1 className="text-3xl font-semibold text-center mb-4">
              Soumission Gratuite{" "}
            </h1>
            <h3 className="py-2 text-sm">
              {" "}
              Pour une soumission rapide, veuillez remplir le formulaire
              suivant.
            </h3>
            <Form>
              <div className="sm:flex justify-between">
                <Form.Group controlId="formBasicName" className="mr-2 sm:w-1/2">
                  <Form.Control
                    type="text"
                    placeholder="Votre nom complet"
                    className="w-full px-3 py-1 border border-gray-300 rounded bg-white mb-4 text-base focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className="sm:w-1/2">
                  <Form.Control
                    type="email"
                    placeholder="Votre courriel"
                    className="w-full px-3 py-1 border border-gray-300 rounded bg-white mb-4 text-base focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                  />
                </Form.Group>
              </div>

              <Form.Group controlId="formBasicPhone">
                <Form.Control
                  type="tel"
                  placeholder="Votre numéro de téléphone"
                  className="mb-4  w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                />
              </Form.Group>

              <Form.Group controlId="formBasicCity">
                <Form.Control
                  type="text"
                  placeholder="Votre ville"
                  className="mb-4  w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                />
              </Form.Group>

              <Form.Group controlId="formBasicProjectDate">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  placeholderText="Sélectionner une date"
                  className="form-control mb-4 w-full px-3 py-1 border border-gray-300 rounded bg-white mb-4 text-base focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                />
              </Form.Group>

              {/* Autres champs de formulaire */}
              {/* New form fields based on your requirements */}
              <Form.Group controlId="formBasicMaterial">
                <Form.Label className="font-bold">
                  Matériel recherché
                </Form.Label>
                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    id="quartz-radio"
                    label="Quartz"
                    name="material"
                    value="quartz"
                    checked={material === "quartz"}
                    onChange={handleMaterialChange}
                    className="mb-2"
                  />
                  <Form.Check
                    type="radio"
                    id="granite-radio"
                    label="Granite"
                    name="material"
                    value="granite"
                    checked={material === "granite"}
                    onChange={handleMaterialChange}
                    className="mb-2"
                  />
                  <Form.Check
                    type="radio"
                    id="other-radio"
                    label="Autre"
                    name="material"
                    value="other"
                    checked={material === "other"}
                    onChange={handleMaterialChange}
                    className="mb-2"
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="formBasicColor">
                <Form.Label>Couleur de comptoir souhaitée</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez la couleur de comptoir souhaitée"
                  className="mb-4 w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                />
              </Form.Group>

              <Form.Group controlId="formBasicCounterSize">
                <Form.Label>Mesure de votre comptoir en pied carré</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez la mesure de votre comptoir en pied carré"
                  className="mb-4 w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                />
              </Form.Group>

              <Form.Group controlId="formBasicCounterThickness">
                <Form.Label>Épaisseur de comptoir désirée</Form.Label>
                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    label="2 cm"
                    name="counter-thickness"
                    // Assurez-vous de lier la sélection à une variable d'état
                  />
                  <Form.Check
                    type="radio"
                    label="3 cm"
                    name="counter-thickness"
                    // Assurez-vous de lier la sélection à une variable d'état
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="formBasicDetails">
                <Form.Label>Détails à propos de votre projet</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Entrez les détails à propos de votre projet"
                  rows={4}
                  className="mb-4 w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                />
              </Form.Group>
              {/* <Form.Group controlId="formBasicFile">
                <Form.Label>Télécharger image/document nécessaire</Form.Label>
                <Form.File
                  id="custom-file"
                  label="Choisir un fichier"
                  className="mb-4 w-full"
                  custom
                  // Ajoutez une variable d'état et une fonction de gestion du changement si nécessaire
                />
              </Form.Group> */}

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
      </div>{" "}
      <Footer />
    </>
  );
};

export default Soumission;
