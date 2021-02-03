import React from 'react'
import './MyFooter.css'

export default class MyFooter extends React.Component{
    renderList = (value) => {
       
    }
    render(){
        return(
            <footer>
            <div className="Footer"> 
                <div className="MyFooter">
                    <div className="CardFooter" >
                            <h5>Recursos</h5>
                            <ul>
                                <li key="contactenos" ><a href="Contactenos">Contactenos</a></li> 
                                <li key="tienda"><a href="Tienda">Tienda</a></li> 
                            </ul>  
                    </div>
                    <div className="CardFooter" >
                            <h5>Acerca de nosotros</h5>
                            <ul>
                                <li key="Conocenos" ><a href="NuestraEmpresa">Nuestra Empresa</a></li> 
                                <li key="Noticias"><a href="Noticias">Noticias</a></li> 
                                <li key="redesSociales"><a href="Redes-Sociales">Redes Sociales</a></li> 
                            </ul>  
                    </div>
                    <div className="CardFooter" >
                            <h5>Detalles de Contacto</h5>
                            <ul>
                                <li key="mail" >pedidos@ssport.com</li> 
                                <li key="ubicacion">Ecuador, Guayaquil</li> 
                                <li key="telefono">Telf: 0965845896</li>
                                <li key="Instagram">Instagram: <a href="https://www.instagram.com/speedsport.ec/">@Speedsport.ec</a></li>
                            </ul>  
                    </div>
                </div>
                <div className="RegistroOfertas">
                    <h5>Registro para ofertas</h5>
                    <div>
                        <input type="email" placeholder="ejemplo@ssport.com"></input>
                        <input className= "btnSuscribirse" type="submit" value="Suscribirse"></input>
                    </div>
                    <p>¡Entérate de nuestras promociones aquí!</p>
                </div>
            </div>
            </footer>
        )
    }

}