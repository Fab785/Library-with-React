import './index.css';
import Nav from './components/Nav'
import Footer from './components/Footer.jsx'
import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books.jsx'
import { books } from './data';
import BookInfo from './pages/BookInfo.jsx'
import Cart from "./pages/Cart"
 
function App() {
  const [cart, setCart] = useState([]); 

  function addToCart(book) {
    setCart([...cart, book])
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])
   

  useEffect(() => {
    console.log(cart);
  }, [cart])
  return (
    <Router>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/books" exact render={() => <Books books={books}  />}/>
          <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart}/>} 
          />
          <Route path="/cart" render={() => <Cart books={books} />} />  
          <Footer />
        </div>
    </Router>
  );
}

export default App;
