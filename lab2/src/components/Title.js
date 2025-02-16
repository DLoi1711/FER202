import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

const Title = () => {
    return (
        <Carousel>
            {[1, 2, 3].map((_, index) => (
                <Carousel.Item className="item-slide" key={index}>
                    <img className="d-block w-100" src="images/pizza.jpg" alt="Pizza" />
                    <Carousel.Caption>
                        <h3>Neapolitan Pizza</h3>
                        <p>If you are looking for a traditional Italian pizza, the Neapolitan is the best option.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Title;