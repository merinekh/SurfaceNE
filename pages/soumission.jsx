"use client";
import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Soumission = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Container className="page-width page-width--narrow section-template--16646198296894__main-padding">
      <h1 className="main-page-title page-title h0">Soumission</h1>
      <div className="rte">
        <div className="bcontact-embed bcontact-lg">
          <div className="bcontact-content bcontact-content--placeholder">
            <div className="bcontact-inner">
              <div className="bcontact-title">
                <span>Soumission gratuite</span>
              </div>
              <div className="bcontact-description">
                Pour une soumission rapide, veuillez remplir le formulaire
                suivant.
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Votre nom complet</Form.Label>
                  <Form.Control type="text" placeholder="Votre nom complet" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Votre courriel</Form.Label>
                  <Form.Control type="email" placeholder="Votre courriel" />
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                  <Form.Label>Votre numéro de téléphone</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Votre numéro de téléphone"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicCity">
                  <Form.Label>Votre ville</Form.Label>
                  <Form.Control type="text" placeholder="Votre ville" />
                </Form.Group>

                <Form.Group controlId="formBasicProjectDate">
                  <Form.Label>Date prévue du projet</Form.Label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    placeholderText="Sélectionner une date"
                    className="form-control"
                  />
                </Form.Group>

                {/* Ajoutez d'autres champs de formulaire ici */}

                <Button variant="primary" type="submit" className="w-full">
                  Envoyer
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Soumission;
