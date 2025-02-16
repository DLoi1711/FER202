import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

const Header = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#" className="fs-3">Pizza House</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    {["Home", "About Us", "Contact"].map((item, index) => (
                        <Nav.Link key={index} href="#">{item}</Nav.Link>
                    ))}
                </Nav>
                <Form className="ms-auto d-flex ms-3">
                    <Form.Control type="text" placeholder="Search" className="me-2" />
                    <Button className="px-2" style={{ width: 45, height: 40 }} variant="danger">🔎</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;