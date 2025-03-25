import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const LaptopManagement = () => {
    const { id } = useParams();
    const [laptop, setLaptop] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLaptopDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/Laptops/${id}`);
                setLaptop(response.data);
            } catch (error) {
                console.error("Error fetching laptop details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLaptopDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!laptop) {
        return <div>Laptop not found.</div>;
    }

    return (
        <Card>
            <Card.Img variant="top" src={laptop.image} />
            <Card.Body>
                <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                <Card.Text>
                    <strong>Year:</strong> {laptop.year}<br />
                    <strong>Price:</strong> {laptop.price}<br />
                </Card.Text>
                <Button variant="primary">Edit Laptop</Button>
            </Card.Body>
        </Card>
    );
};

export default LaptopManagement;