import React, { useState } from "react";
import { Dropdown, DropdownButton, Container, Card } from "react-bootstrap";

function MyDropdown() {
  const [selectedItem, setSelectedItem] = useState("Select an item");

  const handleSelect = (eventKey) => {
    setSelectedItem(`Item ${eventKey}`);
  };

  return (
    <Container>
      <Card className="mt-3">
        <Card.Body>
          <DropdownButton
            id="dropdown-basic-button"
            title={selectedItem}
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="1">Item 1</Dropdown.Item>
            <Dropdown.Item eventKey="2">Item 2</Dropdown.Item>
            <Dropdown.Item eventKey="3">Item 3</Dropdown.Item>
          </DropdownButton>

          {selectedItem !== "Select an item" && (
            <div className="mt-2">
              <p>You selected: {selectedItem}</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MyDropdown;
