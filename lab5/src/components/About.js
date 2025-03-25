import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4 text-primary">About Us</h2>
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="shadow-sm p-4 text-center">
                        <Card.Body>
                            <Card.Title>Welcome to Our Website</Card.Title>
                            <Card.Text>
                                We are dedicated to providing you with the latest news, trends, and insights on various topics. 
                                Our goal is to keep you informed and entertained with high-quality content.
                            </Card.Text>
                            <Card.Text>
                                Whether you're looking for the latest in food trends, lifestyle, or holiday meal inspirations, 
                                we have something for everyone. Stay connected and explore with us!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
