import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">Contact Us</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    {/* First Name */}
                    <Col md="4">
                        <Form.Group controlId="firstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" placeholder="Mark" required />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    {/* Last Name */}
                    <Col md="4">
                        <Form.Group controlId="lastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" placeholder="Otto" required />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    {/* Username */}
                    <Col md="4">
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="@Username" required />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    {/* City */}
                    <Col md="4">
                        <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    {/* State */}
                    <Col md="4">
                        <Form.Group controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    {/* Zip */}
                    <Col md="4">
                        <Form.Group controlId="zip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Terms & Conditions */}
                <Form.Group className="mb-3">
                    <Form.Check 
                        required 
                        label="Agree to terms and conditions" 
                        feedback="You must agree before submitting."
                        feedbackType="invalid" 
                    />
                </Form.Group>

                {/* Submit Button */}
                <Button type="submit" variant="primary">Submit form</Button>
            </Form>
        </Container>
    );
}

export default Contact;
