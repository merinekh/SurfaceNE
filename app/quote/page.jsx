"use client";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "../globals.scss";
import { Container, Card, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    projectDate: null,
    color: "",
    counterSize: "",
    counterThickness: "",
    details: "",
  });
  const [selectedDate, setSelectedDate] = useState(null); // Add this line to declare selectedDate state variable
  const [material, setMaterial] = useState(""); // Add this line to declare material state variable
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, formRef.current, userId).then(
      (result) => {
        console.log(result.text);
        setFormSubmitted(true); // Set formSubmitted to true after successful submission
      },
      (error) => {
        console.log(error.text);
        // You can add any error handling logic here
      }
    );

    // Reset form fields after submission if needed
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      projectDate: null,
      color: "",
      counterSize: "",
      counterThickness: "",
      details: "",
    });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormData({ ...formData, projectDate: date });
  };

  const handleMaterialChange = (e) => {
    // Add this function to handle material change
    setMaterial(e.target.value);
    setFormData({ ...formData, material: e.target.value });
  };

  return (
    <>
      <div className="flex items-center justify-center py-4 bg-black">
        <Container className="flex justify-center xl:w-screen">
          <Card className="mx-2 p-4 sm:p-8 rounded-lg shadow-lg bg-white">
            <h1 className="text-3xl font-semibold text-center mb-4">
              Soumission Gratuite{" "}
            </h1>
            {formSubmitted ? (
              <div className="my-12">
                <p className="text-center text-green-500">
                  Votre demande de soumission pour le comptoir a été envoyée
                  avec succès.
                </p>{" "}
                <p className="text-center text-black">
                  Un membre de notre équipe vous contactera dans les 24
                  prochaines heures. Merci !
                </p>
              </div>
            ) : (
              <>
                <h3 className="py-2 text-sm">
                  {" "}
                  Pour une soumission rapide, veuillez remplir le formulaire
                  suivant.
                </h3>

                <Form ref={formRef} onSubmit={handleSubmit}>
                  <div className="sm:flex justify-between">
                    <Form.Group id="formBasicName" className="mr-2 sm:w-1/2">
                      <Form.Control
                        type="text"
                        placeholder="Votre nom complet"
                        name="name"
                        onChange={handleChange}
                        className="w-full px-3 py-1 border border-gray-300 rounded bg-white mb-4 text-base focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                      />
                    </Form.Group>

                    <Form.Group id="formBasicEmail" className="sm:w-1/2">
                      <Form.Control
                        type="email"
                        placeholder="Votre courriel"
                        name="email"
                        onChange={handleChange}
                        className="w-full px-3 py-1 border border-gray-300 rounded bg-white mb-4 text-base focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                      />
                    </Form.Group>
                  </div>

                  <Form.Group id="formBasicPhone">
                    <Form.Control
                      type="tel"
                      placeholder="Votre numéro de téléphone"
                      name="phone"
                      onChange={handleChange}
                      className="mb-4  w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                    />
                  </Form.Group>

                  <Form.Group id="formBasicCity">
                    <Form.Control
                      type="text"
                      placeholder="Votre ville"
                      name="city"
                      onChange={handleChange}
                      className="mb-4  w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                    />
                  </Form.Group>

                  <Form.Group id="formBasicProjectDate">
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      placeholderText="Sélectionner une date"
                      className="form-control mb-4 w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                    />
                  </Form.Group>

                  <Form.Group id="formBasicMaterial">
                    <Form.Label className="font-bold">
                      Matériel recherché
                    </Form.Label>
                    <div className="mb-3">
                      <div className="flex align-middle pb-1">
                        <Form.Check
                          type="radio"
                          id="quartz-radio"
                          name="material"
                          value="quartz"
                          checked={material === "quartz"}
                          onChange={handleMaterialChange}
                        />
                        <Form.Label htmlFor="quartz-radio" className="ps-1">
                          Quartz
                        </Form.Label>
                      </div>
                      <div className="flex pb-1">
                        <Form.Check
                          type="radio"
                          id="granite-radio"
                          name="material"
                          value="granite"
                          checked={material === "granite"}
                          onChange={handleMaterialChange}
                        />
                        <Form.Label htmlFor="granite-radio" className="ps-1">
                          Granit
                        </Form.Label>
                      </div>
                      <div className="flex pb-1">
                        <Form.Check
                          type="radio"
                          id="other-radio"
                          name="material"
                          value="other"
                          checked={material === "other"}
                          onChange={handleMaterialChange}
                        />
                        <Form.Label htmlFor="other-radio" className="ps-1">
                          Autre
                        </Form.Label>
                      </div>
                    </div>
                  </Form.Group>

                  <Form.Group id="formBasicColor">
                    <Form.Label>Couleur de comptoir souhaitée</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Entrez la couleur de comptoir souhaitée"
                      name="color"
                      onChange={handleChange}
                      className="mb-4 w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                    />
                  </Form.Group>

                  <Form.Group id="formBasicCounterSize">
                    <Form.Label>
                      Mesure de votre comptoir en pied carré
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Entrez la mesure de votre comptoir en pied carré"
                      name="counterSize"
                      onChange={handleChange}
                      className="mb-4 w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                    />
                  </Form.Group>

                  <Form.Group id="formBasicCounterThickness">
                    <Form.Label className="font-bold">
                      Épaisseur de comptoir désirée
                    </Form.Label>
                    <div className="mb-3">
                      <div className="flex items-center mb-2">
                        <Form.Check
                          type="radio"
                          id="thickness-2cm"
                          name="counterThickness"
                          value="2 cm"
                          className="mr-2"
                          checked={formData.counterThickness === "2 cm"}
                          onChange={handleChange}
                        />
                        <Form.Label
                          htmlFor="thickness-2cm"
                          className="radio-label"
                        >
                          2 cm
                        </Form.Label>
                      </div>
                      <div className="flex items-center">
                        <Form.Check
                          type="radio"
                          id="thickness-3cm"
                          name="counterThickness"
                          value="3 cm"
                          className="mr-2"
                          checked={formData.counterThickness === "3 cm"}
                          onChange={handleChange}
                        />
                        <Form.Label
                          htmlFor="thickness-3cm"
                          className="radio-label"
                        >
                          3 cm
                        </Form.Label>
                      </div>
                    </div>
                  </Form.Group>

                  <Form.Group id="formBasicDetails">
                    <Form.Label>Détails à propos de votre projet</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Entrez les détails à propos de votre projet"
                      rows={4}
                      name="details"
                      onChange={handleChange}
                      className="mb-4 w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
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
              </>
            )}
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Quote;
