import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Pages
import Home from "./pages/Home";
import Shop from './pages/Shop';
import Item from './pages/Item';
import Error from './pages/Error';

// Components
import Navbar from "./components/Navbar";
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
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