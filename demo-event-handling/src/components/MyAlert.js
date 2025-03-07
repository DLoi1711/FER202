import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

function MyAlert() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setShow(true)}>Show Alert</Button>

      {show && (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Success!</Alert.Heading>
          <p>This is a success alert—check it out!</p>
        </Alert>
      )}
    </div>
  );
}

export default MyAlert;