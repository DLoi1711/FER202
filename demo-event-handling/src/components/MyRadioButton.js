import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";

function MyRadioButton() {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setShowAlert(true);
  };

  return (
    <div>
      <Form.Check
        type="radio"
        label="Option 1"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
      />
      <Form.Check
        type="radio"
        label="Option 2"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
      />

      {showAlert && (
        <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
          You selected: {selectedValue}
        </Alert>
      )}
    </div>
  );
}

export default MyRadioButton;
