"use client";
import React, { useState, useRef } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    details: "",
  });
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

    // Email validation check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }

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

    // Réinitialisation du formulaire après la soumission
    setFormData({ name: "", email: "", phone: "", city: "", details: "" });
  };

  return (
    <>
      <Container className="flex justify-center xl:w-screen  my-4">
        <Card className="w-screen m-2 p-6 sm:p-8 sm:w-3/4 rounded-lg shadow-lg bg-white">
          <h1 className="text-3xl font-semibold text-center mb-4">
            Contactez-nous
          </h1>
          {formSubmitted ? (
            <div className="my-12">
              <p className="text-center text-green-500">
                Votre demande a été envoyée avec succès.
              </p>{" "}
              <p className="text-center text-black">
                Un membre de notre équipe vous contactera dans les 24 prochaines
                heures. Merci !
              </p>
            </div>
          ) : (
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Form.Group
                id="formBasicNameEmail"
                className="flex flex-col lg:flex-row"
              >
                <Form.Control
                  type="text"
                  placeholder="Votre nom complet"
                  className="mb-4 w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none lg:me-4"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Form.Control
                  type="email"
                  placeholder="Votre courriel"
                  className="mb-4 w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" // Email validation pattern
                  title="Veuillez entrer une adresse email valide."
                  required
                />
              </Form.Group>
              <Form.Group
                id="formBasicPhoneCity"
                className="flex flex-col lg:flex-row"
              >
                <Form.Control
                  type="text"
                  placeholder="Votre numéro de téléphone"
                  className="mb-4 w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none lg:me-4"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Form.Control
                  type="text"
                  placeholder="Votre ville"
                  className="mb-4 w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group id="formBasicMessage">
                <Form.Control
                  as="textarea"
                  placeholder="Votre message"
                  rows={4}
                  className="mb-4 w-full px-3 py-1 border border-gray-300 rounded bg-white text-base focus:outline-none "
                  name="details"
                  value={formData.message}
                  onChange={handleChange}
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
          )}
        </Card>
      </Container>
      <div className="flex flex-col items-center text-white">
        <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">
          Informations de contact
        </h2>{" "}
        <div className="py-4 px-2">
          <div className="text-base md:text-lg text-gray-300">
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
            info@surfacesnouvelleere.ca
            <br />
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-white" />
            <span className="text-white font-semibold">Téléphone:</span> (514)
            424-3882
          </div>
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
