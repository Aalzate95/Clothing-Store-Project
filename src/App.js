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
            <nav id = "NavegationBar">
              <ul>
                
                <li >
                  <Link to="/Comprar">Comprar</Link>
                </li>
                <li >
                  <Link to="/Desarrolladores">Desarrolladores</Link>
                </li>
                <li >
                  <Link to="/Conocenos">Conocenos</Link>
                </li>
                <li>
                  <Link to="/Contactanos">Contactanos</Link>
                </li>
                <li>
                  <Link to="/noticias">Noticias</Link>
                </li>
                <li >
                  <Link to="/Ingresar">Ingresar</Link>
                </li>
                <li>
                  <Link to="/cart"><div className="CarritoElementos"><img className = 'ICarrito'src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/20314567451554468896-512.png" alt="cart"/></div></Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            
            <Route exact path="/">
              <Home 
                items2 = {state.items}
              />
            </Route>

            <Route exact path="/Comprar">
              <Shop 
                /* aqui se envia el state del carrito*/
                items2 = {state.items} //carrito : this.state.carrito
              />
            </Route>
            
            <Route exact path="/Desarrolladores">
              <DevelopmentTeam />
            </Route>
            <Route exact path="/noticias">
              <Noticias />
            </Route>
            <Route exact path="/Conocenos">
              <AboutUs />
            </Route>
            <Route  exact path="/Contactanos">
              <ContactUs/>
            </Route>
            <Route  exact path="/noticias">
              <Noticias/>
            </Route>
            <Route exact path="/Ingresar">
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
