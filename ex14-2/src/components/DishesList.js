import React, { useContext } from "react"; 
import { CartContext } from "./CartContext"; 
import PropTypes from "prop-types"; 
import { Card, Button, Row, Col } from "react-bootstrap";

const DishesList = ({ dishes }) => { 
  const { addToCart } = useContext(CartContext);
  
  return (
    <Row className="dishes">
      {dishes.map((dish) => (
        <Col key={dish.id} md={3}>
          <Card className="dish-item">
            <Card.Img variant="top" src={dish.image} alt={dish.name} />
            <Card.Body>
              <Card.Title>{dish.name}</Card.Title>
              <Card.Text>{dish.description}</Card.Text>
              <Card.Text className="fw-bold">Price: ${parseFloat(dish.price).toFixed(2)}</Card.Text>
              <Button variant="success" onClick={() => addToCart(dish)}>Thêm vào giỏ hàng</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

DishesList.propTypes = { 
  dishes: PropTypes.arrayOf(
    PropTypes.shape({ 
      id: PropTypes.number.isRequired, 
      name: PropTypes.string.isRequired, 
      image: PropTypes.string.isRequired, 
      price: PropTypes.string.isRequired, 
      description: PropTypes.string.isRequired,
    }) 
  ).isRequired, 
}; 

export default DishesList;
