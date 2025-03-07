import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const SnapshotDemo = () => {
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  return (
    <Card className="p-3 text-center mb-3">
      <Card.Title>State as a Snapshot Demo</Card.Title>
      <Card.Text>Count: {count}</Card.Text>
      <div className="d-flex justify-content-center gap-2">
        <Button variant="info" onClick={() => setCount(count + 1)}>
          Increment
        </Button>
        <Button variant="warning" onClick={() => setSnapshot(count)}>
          Take Snapshot
        </Button>
        <Button variant="danger" onClick={() => snapshot !== null && setCount(snapshot)}>
          Restore Snapshot
        </Button>
      </div>
    </Card>
  );
};

export default SnapshotDemo;
