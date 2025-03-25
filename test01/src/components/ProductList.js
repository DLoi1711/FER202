import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, Button, Container, Row, Col, Spinner, Alert, ListGroup } from "react-bootstrap";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setLoading(true);
    axios.get("http://localhost:5000/Products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {
        setError("Failed to load products. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add products before checking out.");
      return;
    }
    setCart([]);
    setSuccessMessage("Thank you for your purchase!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const totalAmount = cart.reduce((total, item) => total + parseFloat(item.price.replace("$", "")), 0).toFixed(2);

  return (
    <Container className="mt-4">
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Row>
        {/* Product List Section */}
        <Col md={8}>
          <h2 className="mb-4 text-center">Product List</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <Row className="g-4">
              {products.map((product) => (
                <Col key={product.id} md={6} lg={4}>
                  <Card className="h-100 shadow">
                    <div style={{ height: "200px", overflow: "hidden" }}>
                      <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text className="flex-grow-1">{product.description}</Card.Text>
                      <h5 className="text-primary">${product.price.replace("$", "")}</h5>
                      <div className="mt-auto d-flex justify-content-between">
                        <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                        <Link to={`/product/${product.id}`}>
                          <Button variant="info">View Details</Button>
                        </Link>
                      </div>
                      <div className="mt-2 d-flex justify-content-between">
                        <Link to={`/edit-product/${product.id}`}>
                          <Button variant="warning">Edit</Button>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>

        {/* Shopping Cart Section */}
        <Col md={4}>
          <h3 className="mb-4">Shopping Cart</h3>
          {cart.length === 0 ? (
            <p>No items in the cart.</p>
          ) : (
            <>
              <ListGroup>
                {cart.map((item) => (
                  <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                    {item.name} - ${item.price.replace("$", "")}
                    <Button variant="danger" size="sm" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <h5 className="mt-3">Total: ${totalAmount}</h5>
              <Button variant="success" className="mt-2 w-100" onClick={handleCheckout}>Pay Now</Button>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;