import React from "react";
import { Card, Button } from "react-bootstrap";

const StudentCard = ({ student }) => {
  return (
    <Card className="m-3" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={student.image} />
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>ID: {student.id}</Card.Text>
        <Card.Text>Location: {student.location}</Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;