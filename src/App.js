import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home'
import Shop from './views/Shop'
import Clothing from './views/Clothing'
import DevelopmentTeam from './views/DevelopmentTeam'
import AboutUs from './views/AboutUs'
import MyFooter from './components/MyFooter'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  //crear un estado con un  dict, 
  return (
    <div className="container-flex">
        <Router>
          <div  id = "NavegationBar">
            <ul>
              <li >
                <Link to="/">Home</Link>
              </li>
              <li >
                <Link to="/shop">Shop</Link>
              </li>
              <li >
                <Link to="/Clothing">Clothing</Link>
              </li>
              <li >
                <Link to="/developmentTeam">DevelopmentTeam</Link>
              </li>
              <li >
                <Link to="/aboutUs">AboutUs</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/shop">
              <Shop 
                /* aqui se envia el state del carrito*/
              />
            </Route>
            <Route exact path="/Clothing">
              <Clothing />
            </Route>
            <Route exact path="/developmentTeam">
              <DevelopmentTeam />
            </Route>
            <Route exact path="/aboutUs">
              <AboutUs />
            </Route>
          </Switch>

      </Router>
    <footer>
      <MyFooter/>
    </footer>
    </div>
  );
}

export default App;
