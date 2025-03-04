import React, { useState } from "react"; 
import { CartProvider } from './components/CartContext';
import DishesList from './components/DishesList';
import Cart from './components/Cart';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

const dishes = [ 
  { id: 0, name: "Uthappizza", image: "images/uthappizza.png", price: "4.99", description: "A unique combination of Indian Uthappam and Italian pizza." }, 
  { id: 1, name: "Zucchipakoda", image: "images/zucchipakoda.png", price: "1.99", description: "Deep fried Zucchini with chickpea batter." }, 
  { id: 2, name: "Vadonut", image: "images/vadonut.png", price: "1.99", description: "A combination of vada and donut." }, 
  { id: 3, name: "ElaiCheese Cake", image: "images/elaicheesecake.png", price: "2.99", description: "New York Style Cheesecake with Indian cardamoms." }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filteredDishes = dishes.filter(dish => 
    dish.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    dish.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CartProvider>
      <Container className={`App ${darkMode ? "dark-mode" : ""}`}>
        <h1 className="my-4 text-center">Danh sách món ăn</h1>
        <Form.Group className="mb-3 d-flex justify-content-center">
          <Form.Control 
            type="text"
            placeholder="Tìm món ăn..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "300px" }}
          />
          <Button variant="secondary" className="ms-2" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Chế độ Sáng" : "Chế độ Tối"}
          </Button>
        </Form.Group>
        <DishesList dishes={filteredDishes} />
        <Cart />
      </Container>
    </CartProvider>
  );
}

export default App;
