import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const dishes = [
    { 
        id: 0, 
        name: "Uthappizza", 
        category: "mains", 
        price: "4.99", 
        label: "Hot", 
        featured: true, 
        description: "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
        image: "https://www.thatspot.city/danang/wp-content/uploads/sites/3/2022/09/pizza-art.jpeg"
    },
    { 
        id: 1, 
        name: "Zucchipakoda", 
        category: "appetizer", 
        price: "1.99", 
        label: "", 
        featured: false, 
        description: "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
        image: "https://english.ahram.org.eg/Media/News/2020/1/21/2020-637152387215158958-515.jpg"
    },
    { 
        id: 2, 
        name: "Vadonut", 
        category: "appetizer", 
        price: "1.99", 
        label: "New", 
        featured: false, 
        description: "A quintessential ConFusion experience, is it a vada or is it a donut?",
        image: "https://static.hawonkoo.vn/hwks1/images/2023/07/cach-lam-banh-donut-bang-noi-chien-khong-dau-1.jpg"
    },
    { 
        id: 3, 
        name: "ElaiCheese Cake", 
        category: "dessert", 
        price: "2.99", 
        label: "", 
        featured: false, 
        description: "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
        image: "https://www.allrecipes.com/thmb/el8Tey1fkWht9pS49LQ-HEM6CyA=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/AR-154297-Italian-Cream-Cheese-and-ricotta-cheesecake-DDMFS-4x3-837aa4be28f54ee095e556b047cbafc8.jpg"
    }
];

export const DishList = () => (
  <Container className="mt-4">
      <h2 className="text-center mb-4">Home</h2>
      <Row className="gy-4">
          {dishes.map(dish => (
              <Col md={6} lg={6} key={dish.id} className="text-center d-flex">
                  <Card className="w-100 shadow-lg d-flex flex-column" style={{ minHeight: "400px" }}>
                      <Card.Img 
                          variant="top" 
                          src={dish.image} 
                          className="img-fluid" 
                          style={{ height: "250px", objectFit: "cover" }} 
                      />
                      <Card.Body className="d-flex align-items-center justify-content-center flex-column">
                          <Card.Title>
                              <Link to={`/dishes/${dish.id}`} className="text-decoration-none text-primary">
                                  {dish.name}
                              </Link>
                          </Card.Title>
                      </Card.Body>
                  </Card>
              </Col>
          ))}
      </Row>
  </Container>
);

export const DishDetail = () => {
  let { id } = useParams();
  const dish = dishes.find(d => d.id === parseInt(id));

  return dish ? (
      <Container className="mt-4">
          <Row>
              <Col md={6}>
                  <Card>
                      <Card.Img variant="top" src={dish.image} alt={dish.name} />
                  </Card>
              </Col>
              <Col md={6}>
                  <h2>{dish.name}</h2>
                  <p><strong>Category:</strong> {dish.category}</p>
                  <p><strong>Price:</strong> ${dish.price}</p>
                  <p><strong>Description:</strong> {dish.description}</p>
                  {dish.label && <p><strong>Label:</strong> {dish.label}</p>}
                  <Link to="/dishes">
                      <Button variant="secondary">Back to Home</Button>
                  </Link>
              </Col>
          </Row>
      </Container>
  ) : <p className="text-center mt-4">Dish not found</p>;
};
