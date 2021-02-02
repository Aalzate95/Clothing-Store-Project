import React from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from './views/home/Home'
import Shop from './views/shop/Shop'
import Noticias from './views/noticias/Noticias'
import DevelopmentTeam from './views/developmentTeam/DevelopmentTeam'
import AboutUs from './views/aboutUs/AboutUs'
import MyFooter from './components/footer/MyFooter'
import Login from './views/login/Login'
import RedesSociales from './views/redesSociales/RedesSociales'
import Administrador from './views/Admin'
//import Cart from './views/Cart'
import ContactUs from './views/contactUs/ContactUs'
import data from './data/Cart.json'

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  const history = useHistory();
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
                  <Link to="/Tienda">Tienda</Link>
                </li>
                <li >
                  <Link to="/Desarrolladores">Desarrolladores</Link>
                </li>
                <li >
                  <Link to="/Conocenos">Conocenos</Link>
                </li>
                <li>
                  <Link to="/Contactenos">Contactenos</Link>
                </li>
                <li>
                  <Link to="/Noticias">Noticias</Link>
                </li>
                <li >
                  <Link to="/Ingresar">Ingresar</Link>
                </li>
                {/* <li>
                  <Link to="/cart"><div className="CarritoElementos"><img className = 'ICarrito'src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/20314567451554468896-512.png" alt="cart"/></div></Link>
                </li> */}
              </ul>
            </nav>
          </div>
          <Switch>
            
            <Route exact path="/">
              <Home 
                items2 = {state.items}
              />
            </Route>

            <Route exact path="/Tienda">
              <Shop 
                /* aqui se envia el state del carrito*/
                items2 = {state.items} //carrito : this.state.carrito
              />
            </Route>
            
            <Route exact path="/Desarrolladores">
              <DevelopmentTeam />
            </Route>
            <Route exact path="/Conocenos">
              <AboutUs />
            </Route>
            <Route  exact path="/Contactenos">
              <ContactUs/>
            </Route>
            <Route  exact path="/Noticias">
              <Noticias/>
            </Route>
            <Route exact path="/Ingresar">
              <Login />
            </Route>
            <Route exact path="/Redes-Sociales">
              <RedesSociales />
            </Route>

            <Route exact path="/Admin">
              <Administrador/>
            </Route>

            {/* <Route exact path="/cart">
              <Cart
                items2 = {state.items}
              />
            </Route> */}
          </Switch>

      </Router>
      <footer>
        <MyFooter/>
      </footer>
    </div>
  );
}

export default App;
