import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { commerce } from './lib/commerce.js'

// Pages
import Home from "./pages/Home"
import Shop from './pages/Shop'
import Item from './pages/Item'
import Error from './pages/Error'
import Cart from './pages/Cart.jsx'

// Components
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import ScrollToTop from './ScrollToTop'


let headers = {
  "X-Authorization": process.env.REACT_APP_CHEC_PRIVATE_KEY,
  "Accept": "application/json",
  "Content-Type": "application/json",
};

const url = new URL(
  "https://api.chec.io/v1/"
);

const App = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState({})

  // Fetch all items from the API
  const fetchItems = async () => {
    const { data } = await commerce.products.list();

    try {
      if (data) {
        const allItems = data.map((item) => {
          const { id, name, categories, price, description, media } = item;
          return { id, name, categories, price, description, media, discounted_price: price };
        })

        setItems(allItems);
      } else {
        setItems({});
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Returns cart tracked by the customer's browser
  const fetchCart = async () => {
    const data = await commerce.cart.retrieve();

    try {
      if (Object.keys(data).length !== 0) {
        setCart(data);
      } else {
        setCart({});
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Adds an item to the current cart
  const handleAddToCart = async (productID, quantity) => {
    const res = await commerce.cart.add(productID, quantity);
    setCart(res.cart);
  }

  // Remove item from the cart
  const handleRemoveFromCart = async (productID) => {
    const res = await commerce.cart.remove(productID);
    setCart(res.cart);
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  }

  useEffect(() => {
    fetchItems();
    fetchCart();
  }, []);


  return (
    <Router>
      <ScrollToTop />
      <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Home items={items} />
          </Route>
          <Route path="/shop">
            <Shop items={items} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} refreshCart={refreshCart} />
          </Route>
          <Route path="/item/:id">
            <Item onAddToCart={handleAddToCart} />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      <Footer />
    </Router>
  );
};

export default App;
