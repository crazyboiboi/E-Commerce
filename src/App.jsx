import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Pages
import Home from "./pages/Home";

// Components
import Navbar from "./components/Navbar";
import Footer from './components/Footer'


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Home />
      <Footer />
    </Router>
    </>
  );
};

export default App;