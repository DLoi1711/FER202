import React from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

const MenuItem = ({ img, title, price, salePrice, infor }) => {
    return (
        <Card style={{ width: "18rem" }} className="me-3">
            <Card.Img variant="top" className="item-img" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {salePrice ? (
                        <>
                            <span className="text-decoration-line-through">${price}</span>
                            <span className="text-warning ms-2">${salePrice}</span>
                        </>
                    ) : (
                        <span>${price}</span>
                    )}
                </Card.Text>
                <Button variant="dark">Buy</Button>
            </Card.Body>
            {infor && <div className="bg-warning text-center p-2 new"><strong>{infor}</strong></div>}
        </Card>
    );
};

const Menu = () => {
    return (
        <Container className="text-white py-5 bg-dark">
            <h2 className="mb-4">Our Menu</h2>
            <Row className="justify-content-center">
                {[
                    { img: "images/pizza1.jpg", title: "Margherita Pizza", price: "40.00", salePrice: "24.00", infor: "Sale" },
                    { img: "images/pizza2.jpg", title: "Pepperoni Pizza", price: "45.00" },
                    { img: "images/pizza3.jpg", title: "Veggie Pizza", price: "38.00", infor: "New" },
                    { img: "images/pizza4.jpg", title: "BBQ Chicken Pizza", price: "50.00", salePrice: "35.00", infor: "Sale" },
                ].map((item, index) => (
                    <Col key={index} md={4} lg={3} className="mb-4">
                        <MenuItem {...item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Menu;