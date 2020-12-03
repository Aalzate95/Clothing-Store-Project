import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home'
import Shop from './views/Shop'
import DevelopmentTeam from './views/DevelopmentTeam'
import AboutUs from './views/AboutUs'
import MyFooter from './components/MyFooter'
import Login from './views/Login'
import Cart from './views/Cart'
import ContactUs from './views/ContactUs'

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
                <Link to="/developmentTeam">DevelopmentTeam</Link>
              </li>
              <li >
                <Link to="/aboutUs">AboutUs</Link>
              </li>
              <li>
                <Link to="/contactUs">ContactUs</Link>
              </li>
              <li >
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
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
            
            <Route exact path="/developmentTeam">
              <DevelopmentTeam />
            </Route>

            <Route exact path="/aboutUs">
              <AboutUs />
            </Route>
            <Route>
              <ContactUs/>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/cart">
              <Cart/>
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
