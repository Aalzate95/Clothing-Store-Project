import React,{ useState } from 'react';
import './App.css';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from './views/home/Home'
import Shop from './views/shop/Shop'
import Noticias from './views/noticias/Noticias'
import DevelopmentTeam from './views/developmentTeam/DevelopmentTeam'
import AboutUs from './views/aboutUs/AboutUs'
import Login from './views/login/Login'
import RedesSociales from './views/redesSociales/RedesSociales'
import Dashboard from './admin/Admin'
import Clientes from './admin/views/clientes/Clientes'
import Productos from './admin/views/productos/Productos'
import Configuracion from './admin/views/configuracion/Configuracion'
//import Cart from './views/Cart'
import ContactUs from './views/contactUs/ContactUs'
import data from './data/Cart.json'
import Redireccion from './components/redireccion/Redireccion'

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [id,setId] = useState()
  const [usuario,setUsuario] = useState('')
  const [contraseña,setContraseña] = useState('')
  //crear un estado con un  dict, 
  let state ={
    items: data //items que van al carrito, carrito: 
  }
  return (
    <div className="App">
        <Router>
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

            <Route path="/Ingresar">
              <Login
                setId = {setId}
                usuario = {usuario}
                setUsuario = {setUsuario}
                contraseña = {contraseña}
                setContraseña = {setContraseña}
              />
            </Route>

            <Route exact path="/Redes-Sociales">
              <RedesSociales />
            </Route>

            <Route exact path="/Redireccion">
              <Redireccion 
                id = {id}
               />
            </Route>

            <Route exact path="/admin/">
              <Dashboard
                id = {id}
              />
            </Route>

            <Route exact path="/admin/Clientes/">
                <Clientes 
                    id={id}
                />
            </Route>

            <Route exact path="/admin/Productos">
                <Productos 
                    id={id}
                />
            </Route>

            <Route exact path="/admin/Configuracion">
                <Configuracion 
                    id={id}
                />
            </Route> 

          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
