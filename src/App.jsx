// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FruitList from './components/FruitList';
import Cart from './components/Cart';
import Login from './components/Login';
import NavigationBar from './components/Navbar';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (token) => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setCartItems([]);
  };

  const handleAddToCart = (fruit) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === fruit.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === fruit.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...fruit, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="app">
      <NavigationBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Container fluid className="px-4 py-4">
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <Row className="g-4">
            <Col lg={8} md={7}>
              <FruitList onAddToCart={handleAddToCart} />
            </Col>
            <Col lg={4} md={5}>
              <Cart
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
              />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default App;
