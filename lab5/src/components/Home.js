import React from "react";
import {Container, Row, Col, Image, Carousel } from "react-bootstrap";

function Home() {
  return (
    <Container fluid className="text-center p-0">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/images/slide1.jpg" alt="Banner 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/images/slide2.jpg" alt="Banner 2" />
        </Carousel.Item>
      </Carousel>

      <Row className="my-4 justify-content-center">
        {["menu-01.jpg", "menu-02.jpg", "menu-03.jpg", "menu-04.jpg", "menu-05.jpg", "menu-06.jpg"].map((img, index) => (
          <Col key={index} xs={6} md={2}>
            <Image src={`/images/images/${img}`} roundedCircle fluid />
          </Col>
        ))}
      </Row>

      <h2 className="text-danger">This is Home Page</h2>
    </Container>
  );
}

export default Home;
