import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import animals from "./components/AnimalData";
import AnimalCard from "./components/AnimalCard";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <Container className="text-center my-4">
      <h1 className="mb-4">Animals</h1>
      <Row className="justify-content-center">
        {animals.map((animal, index) => (
          <Col key={index} md={4} className="d-flex justify-content-center">
            <AnimalCard {...animal} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;