import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { commerce } from './lib/commerce.js'

// Pages
import Home from "./pages/Home"
import Shop from './pages/Shop'
import Item from './pages/Item'
import Error from './pages/Error'

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
  const [discounts, setDiscounts] = useState([]);


  // Fetch all items from the API
  const fetchItems = async () => {
    const { data } = await commerce.products.list();

    try {
      if (data) {
        const allItems = data.map((item) => {
          const { id, name, categories, price, description, media } = item;
          return { id, name, categories, price, description, media };
        })
        setItems(allItems);
      } else {
        setItems([]);
      }
    } catch (error) {
      console.log(error);
    }

  }

  // Fetch all discounts from the API
  const fetchDiscounts = async () => {
    try {
      const res = await fetch(url + 'discounts', {
        method: "GET",
        headers: headers,
      });

      const { data } = await res.json();

      if (data) {
        setDiscounts(data);
      } else {
        setDiscounts([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    fetchDiscounts();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home items={items} />
        </Route>
        <Route path="/shop">
          <Shop items={items} />
        </Route>
        <Route path="/item/:id">
          <Item />
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