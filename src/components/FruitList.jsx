import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

function FruitList({ onAddToCart }) {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFruits();
  }, []);

  const fetchFruits = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/fruits/', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Please login to view fruits');
        }
        throw new Error('Failed to fetch fruits');
      }
      
      const data = await response.json();
      setFruits(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-danger">{error}</div>;

  return (
    <div className="fruit-list">
      <h2 className="mb-4">Available Fruits</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {fruits.map((fruit) => (
          <Col key={fruit.id}>
            <Card>
              <Card.Body>
                <Card.Title>{fruit.name}</Card.Title>
                <Card.Text>
                  Price: ${fruit.price}<br />
                  Stock: {fruit.quantity}
                </Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => onAddToCart(fruit)}
                  disabled={fruit.quantity === 0}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FruitList; 