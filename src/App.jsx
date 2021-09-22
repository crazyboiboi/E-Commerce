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


const App = () => {
  const [items, setItems] = useState([]);

  // Fetch all items from the API
  const fetchItems = async () => {
    const { data } = await commerce.products.list();

    if (data) {
      const allItems = data.map((item) => {
        const { id, name, categories, price, description, media } = item;
        return { id, name, categories, price, description, media };
      })
      setItems(allItems);
    } else {
      setItems([]);
    }
  }



  useEffect(() => {
    fetchItems();
  }, []);


  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home items={items} />
          </Route>
          <Route path="/shop">
            <Shop items={items} />
          </Route>
          <Route path="/item">
            <Item />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;