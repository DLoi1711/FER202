import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const RenderAndCommitDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <Card className="p-3 text-center mb-3">
      <Card.Title>Render and Commit Demo</Card.Title>
      <Card.Text>Count: {count}</Card.Text>
      <Button variant="primary" size="sm" onClick={() => setCount(count + 1)}>
        Increase Count
      </Button>
    </Card>
  );
};

export default RenderAndCommitDemo;
