import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import PortFolio from './components/PortFolio/PortFolio';


function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/portfolio">
          <PortFolio></PortFolio>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
