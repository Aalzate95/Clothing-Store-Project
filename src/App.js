import React from 'react';
import './App.css';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from './views/Home'
import Shop from './views/Shop'
import Noticias from './views/Noticias'
import DevelopmentTeam from './views/DevelopmentTeam'
import AboutUs from './views/AboutUs'
import MyFooter from './components/MyFooter'
import Login from './views/Login'
import Cart from './views/Cart'
import ContactUs from './views/ContactUs'
import data from './data/Cart.json'

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  //crear un estado con un  dict, 
  let state ={
    items: data //items que van al carrito, carrito: 
  }
  return (
    <div className="App">
        <Router>
          <div className="NavBar">
            <ul>
              <li >

                  <Link to="/"><img className = 'LogoHome'src="https://i.ibb.co/fn1M1VL/logo.png" alt="Home"/></Link>

              </li>
            </ul>
            <div id = "NavegationBar">
              <ul>
                
                <li >
                  <Link to="/shop">Comprar</Link>
                </li>
                <li >
                  <Link to="/developmentTeam">Desarrolladores</Link>
                </li>
                <li >
                  <Link to="/aboutUs">Conocenos</Link>
                </li>
                <li>
                  <Link to="/contactUs">Contactanos</Link>
                </li>
                <li >
                  <Link to="/login">Ingresar</Link>
                </li>
                <li>
                  <Link to="/cart"><div className="CarritoElementos"><img className = 'ICarrito'src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/20314567451554468896-512.png" alt="cart"/></div></Link>
                </li>
              </ul>
            </div>
          </div>
          <Switch>
            
            <Route exact path="/">
              <Home 
                items2 = {state.items}
              />
            </Route>

            <Route exact path="/shop">
              <Shop 
                /* aqui se envia el state del carrito*/
                items2 = {state.items} //carrito : this.state.carrito
              />
            </Route>
            
            <Route exact path="/developmentTeam">
              <DevelopmentTeam />
            </Route>
            <Route exact path="/noticias">
              <Noticias />
            </Route>
            <Route exact path="/aboutUs">
              <AboutUs />
            </Route>
            <Route  exact path="/contactUs">
              <ContactUs/>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/cart">
              <Cart
                items2 = {state.items}
              />
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
