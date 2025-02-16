import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

const Footer = () => (
    <Container className="text-white py-5">
        <h1 className="text-center">Book Your Table</h1>
        <Row className="mb-3">
            {["Your Name", "Your Email"].map((placeholder, index) => (
                <Col key={index} md={4}>
                    <Form.Control type={index === 0 ? "text" : "email"} placeholder={placeholder} />
                </Col>
            ))}
            <Col md={4}>
                <Form.Select defaultValue="">
                    <option disabled value="">Select a Service</option>
                    {["Service 1", "Service 2", "Service 3"].map((service, index) => (
                        <option key={index}>{service}</option>
                    ))}
                </Form.Select>
            </Col>
        </Row>
        <Row className="mt-4 mb-3">
            <Col><Form.Control as="textarea" rows={7} placeholder="Please write your comment" /></Col>
        </Row>
        <Row>
            <Col className="text-center">
                <Button variant="warning" className="fs-4 fw-bold">Send Message</Button>
            </Col>
        </Row>
    </Container>
);

export default Footer;