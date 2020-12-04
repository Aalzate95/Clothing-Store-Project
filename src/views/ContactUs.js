import React from 'react'
import data from '../data/aboutUs.json'
import './styles/ContactUs.css'
import Formulario from '../components/Formulario'
export default class ContactUs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            general :data
        }
    }
    render(){
        return(
            <div className="About">
                <div>
                    <div className="About-banner">
                        <img className="About-crop" src="https://image.freepik.com/foto-gratis/imagen-primer-plano-programador-trabajando-su-escritorio-oficina_1098-18707.jpg"   alt="banner-about"></img>
                    </div>
                </div>
                <h1>Contactenos</h1>
                <div className="About-body">
                    <Formulario
                    nombre= ""
                    apellido= ""
                    lugar=""
                    fecha=""
                    correo=""
                    about=""
                    />
                    
                </div>
            </div>
        )
    }
}
