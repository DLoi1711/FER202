import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, ListGroup, Dropdown } from "react-bootstrap";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.item.id ? action.item : item
        ),
      };
    case "SORT_ITEMS":
      return {
        ...state,
        items: [...state.items].sort(action.compareFunction),
      };
    default:
      return state;
  }
}

const initialState = { items: [] };

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [filterText, setFilterText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");

  const handleAddItem = () => {
    if (newItemName.trim()) {
      const newItem = { id: Date.now(), name: newItemName };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const handleEditItem = (id, name) => {
    setEditingId(id);
    setEditedName(name);
  };

  const handleSaveEdit = (id) => {
    dispatch({ type: "EDIT_ITEM", item: { id, name: editedName } });
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleSort = (type) => {
    if (type === "name") {
      dispatch({
        type: "SORT_ITEMS",
        compareFunction: (a, b) => a.name.localeCompare(b.name),
      });
    } else {
      dispatch({
        type: "SORT_ITEMS",
        compareFunction: (a, b) => a.id - b.id,
      });
    }
  };

  const filteredItems = state.items.filter((item) =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="offset-md-3">
          <Form>
            <Form.Group controlId="formItem">
              <Form.Label className="fw-bold">Enter Item:</Form.Label>
              <Form.Control
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item name"
              />
            </Form.Group>
            <div className="d-flex justify-content-center mt-2">
              <Button variant="primary" onClick={handleAddItem}>
                Add Item
              </Button>
            </div>
          </Form>

          <Form.Group controlId="filterItem" className="mt-3">
            <Form.Control
              type="text"
              placeholder="Filter items..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </Form.Group>

          <Dropdown className="mt-2">
            <Dropdown.Toggle variant="secondary">Sort Items</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleSort("name")}>
                Sort by Name
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort("time")}>
                Sort by Created Time
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h3 className="mt-4">Item List:</h3>
          <ListGroup>
            {filteredItems.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                {editingId === item.id ? (
                  <>
                    <Form.Control
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                    <Button
                      variant="success"
                      onClick={() => handleSaveEdit(item.id)}
                    >
                      Save
                    </Button>
                    <Button variant="secondary" onClick={handleCancelEdit}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    {item.name}
                    <div>
                      <Button
                        variant="warning"
                        onClick={() => handleEditItem(item.id, item.name)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;
