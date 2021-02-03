import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
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
     );
}
 
export default NavBar;