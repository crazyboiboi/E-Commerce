import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Pages
import Home from "./pages/Home";

// Components
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      {/* <Home /> */}

    </Router>
    </>
  );
};

export default App;