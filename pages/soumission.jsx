"use client";
import React from "react";
import "../app/globals.scss";
import { Container, Card, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Soumission = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Container className="flex">
        <Card className="p-8 rounded-lg shadow-lg bg-white">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Soumission pour Comptoirs
          </h1>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Votre nom complet"
                className="mb-4"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Votre courriel"
                className="mb-4"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Control
                type="tel"
                placeholder="Votre numéro de téléphone"
                className="mb-4"
              />
            </Form.Group>

            <Form.Group controlId="formBasicCity">
              <Form.Control
                type="text"
                placeholder="Votre ville"
                className="mb-4"
              />
            </Form.Group>

            <Form.Group controlId="formBasicProjectDate">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                placeholderText="Sélectionner une date"
                className="form-control mb-4"
              />
            </Form.Group>

            {/* Autres champs de formulaire */}

            <Button variant="primary" type="submit" className="w-full">
              Envoyer
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Soumission;
