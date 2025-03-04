import React, { useContext, useState } from "react"; 
import { CartContext } from "./CartContext"; 
import { Button, Card, ListGroup, Alert } from "react-bootstrap";

const Cart = () => { 
  const { cartItems, removeFromCart, clearCart, totalValue } = useContext(CartContext);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleOrder = () => {
    if (cartItems.length === 0) {
      alert("Giỏ hàng của bạn đang trống!");
      return;
    }
    setOrderConfirmed(true);
    setTimeout(() => {
      setOrderConfirmed(false);
      clearCart();
    }, 3000);
  };

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>🛒 Giỏ hàng</Card.Title>
        {cartItems.length === 0 ? (
          <p>Giỏ hàng của bạn đang trống.</p>
        ) : (
          <div>
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id} className="d-flex justify-content-between">
                  {item.name} - ${item.price}
                  <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Xóa</Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <div className="mt-3">
              <p><strong>Tổng số món:</strong> {cartItems.length}</p>
              <p><strong>Tổng giá trị:</strong> ${totalValue}</p>
              <Button variant="primary" className="me-2" onClick={handleOrder}>Xác nhận Đơn hàng</Button>
              <Button variant="outline-danger" onClick={clearCart}>Xóa Giỏ hàng</Button>
            </div>
          </div>
        )}
        {orderConfirmed && <Alert variant="success" className="mt-3">Đơn hàng của bạn đã được xác nhận!</Alert>}
      </Card.Body>
    </Card>
  );
};

export default Cart;
