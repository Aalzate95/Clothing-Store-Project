import React from 'react'
import data from '../data/aboutUs.json'

export default class AboutUs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            general :data
        }
    }
    render(){
        const general = this.state.general;
        return(
            <div className="About">
                <div>
                    <div className="About-banner">
                        <img className="About-crop" src="https://image.freepik.com/foto-gratis/imagen-primer-plano-programador-trabajando-su-escritorio-oficina_1098-18707.jpg"   alt="banner-about"></img>
                        <h1>About Us</h1>
                    </div>
                </div>
                <div className="About-body">
                    <div>
                        <h3>¿Quiénes Somos?</h3>
                        <p>{general.resumen}</p>
                        <h3>¿Dónde Encontrarnos?</h3>
                        <p>{"Encuentrenos "+general.horarios}</p>
                        <p>{general.detalle}</p>
                        <div>
                            <iframe src={general.mapa}  title="Punto-Fiec" width="100%" height="500px" ></iframe>
                        </div>

                    </div>
                    
                </div>
            </div>
        )
    }
}