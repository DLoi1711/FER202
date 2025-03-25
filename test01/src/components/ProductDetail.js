import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Card, Button, Container } from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/Products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <Container className="mt-4">
      <Card className="p-3 shadow">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="img-fluid"
          style={{ maxHeight: "300px", objectFit: "contain" }}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
          <Card.Text><strong>Price:</strong> {product.price}</Card.Text>
          <Card.Text><strong>Stock:</strong> {product.stock}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Link to="/products">
            <Button variant="primary">Back to Products</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetail;
