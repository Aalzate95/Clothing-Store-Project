import React from 'react'
import data from '../../data/developmentTeam.json'
import Developer from '../../components/Developer'


export default class DevelopmentTeam extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            desarrolladores : data
        }
    }
    
    render(){
        const devs=this.state.desarrolladores;
        return(
            <div className="DevTeam">
                <div className="Shop-banner">
                    <img
                        alt="banner"
                        className="Shop-crop"
                        src = 'https://image.freepik.com/foto-gratis/imagen-primer-plano-programador-trabajando-su-escritorio-oficina_1098-18707.jpg'
                    />
                </div>
                
                <h1>DevelopmentTeam</h1>
                
                <div className="Dev-body">
                    {
                        Object.keys(devs).map((indice)=>{
                            return(
                                <Developer
                                    key ={indice}
                                    nombre={devs[indice].nombre}
                                    edad = {devs[indice].edad}
                                    origen = {devs[indice].origen}
                                    detalle = {devs[indice].detalle}
                                    skills = {devs[indice].skills}
                                    redes = {devs[indice].redes}
                                    url = {devs[indice].url}
                                    img ={devs[indice].img}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}