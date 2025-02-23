import React, { useState } from "react";
import { Form, Card, Container, Row, Col } from "react-bootstrap";

const SearchFilter = () => {
  const [query, setQuery] = useState("");
  const items = ["VinFast", "BMW", "Mazda", "Ford", "Honda"];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container className="mt-3">
      <h3>Search Filter</h3>
      <Form.Control
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Row className="mt-3">
        {filteredItems.map((item, index) => (
          <Col key={index} md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{item}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchFilter;