import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import { books } from "./data";

function App() {
  const [cart, setCart] = useState([]);

  function addItemToCart(book) {
    const existing = cart.find(item => item.id === book.id);
    setCart(existing
      ? cart.map(item =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cart, { ...book, quantity: 1 }]
    );
  }

  function updateCart(item, quantity) {
    setCart(cart.map(cartItem =>
      cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
    ));
  }

  function removeItem(item) {
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
  }

  function numberOfItems() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  function calcPrices() {
    const total = cart.reduce(
      (sum, item) => sum + (item.salePrice || item.originalPrice) * item.quantity,
      0
    );
    return {
      subtotal: total * 0.9,
      tax: total * 0.1,
      total,
    };
  }

  return (
    <Router>
      <Nav numberOfItems={numberOfItems()} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} addItemToCart={addItemToCart} />} />
        <Route path="/cart" render={() => <Cart cart={cart} updateCart={updateCart} removeItem={removeItem} totals={calcPrices()} />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;



