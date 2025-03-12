import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const AnimalCard = ({ name, scientificName, size, diet, additional, image }) => {
  const showAdditionalData = () => {
    if (!additional) {
      alert("No additional information available.");
      return;
    }
    const details = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    alert(details);
  };

  return (
    <Card className="shadow-sm" style={{ borderRadius: "10px", overflow: "hidden" }}>
      <Card.Img variant="top" src={image} alt={name} style={{ height: "200px", objectFit: "cover" }} />
      <Card.Body className="text-center" style={{ backgroundColor: "#FFC107" }}>
        <Card.Title className="fw-bold" style={{ color: "#D84315" }}>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Scientific Name: {scientificName}</Card.Subtitle>
        <div className="p-2 bg-white rounded">
          <Card.Text className="mb-1">{size} kg</Card.Text>
          <Card.Text>{diet.join(", ")}</Card.Text>
        </div>
        <Button variant="danger" className="mt-2" onClick={showAdditionalData}>
          More Info
        </Button>
      </Card.Body>
    </Card>
  );
};

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  additional: PropTypes.shape({
    notes: PropTypes.string,
    link: PropTypes.string,
  }),
};

AnimalCard.defaultProps = {
  additional: {
    notes: "No Additional Information",
  },
};

export default AnimalCard;
