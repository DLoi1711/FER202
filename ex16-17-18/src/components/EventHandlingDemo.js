import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const EventHandlingDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <Card className="p-3 text-center mb-3">
      <Card.Title>Event Handling Demo</Card.Title>
      <Card.Text>Count: {count}</Card.Text>
      <Button variant="primary" onClick={() => setCount(count + 1)}>
        Increase Count
      </Button>
    </Card>
  );
};

export default EventHandlingDemo;
