import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';

function Cart({ cartItems, onUpdateQuantity, onRemoveItem }) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Card className="cart">
      <Card.Header>
        <h2 className="mb-0">Shopping Cart</h2>
      </Card.Header>
      <Card.Body>
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-0">{item.name}</h6>
                  <small className="text-muted">${item.price} each</small>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center">
                    <Button 
                      variant="outline-secondary" 
                      size="sm"
                      onClick={() => onUpdateQuantity(item.id, -1)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button 
                      variant="outline-secondary" 
                      size="sm"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                    >
                      +
                    </Button>
                  </div>
                  <span className="text-end" style={{ minWidth: '80px' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <Button 
                    variant="outline-danger" 
                    size="sm"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card.Body>
      {cartItems.length > 0 && (
        <Card.Footer className="text-end">
          <h5 className="mb-0">Total: ${total.toFixed(2)}</h5>
        </Card.Footer>
      )}
    </Card>
  );
}

export default Cart; 