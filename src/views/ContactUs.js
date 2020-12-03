import React from 'react'
import data from '../data/aboutUs.json'
import './styles/AboutUs.css'
import Formulario from '../components/Formulario'
export default class ContactUs extends React.Component{
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
                        
                    </div>
                </div>
                <h1>ContactUs Us</h1>
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
/*
class Formulario extends React.Component{

    constructor(args){
        super(args)
        this.state={
            nombre: "",
            apellido: "",
            lugar:"",
            fecha: "",
            correo:"",
            about:""
        }
    }
// < >
onChange(e){
    this.setState({
        [e.target.nombre]: e.target.value
    })
}
    render(){
        return(
            <div>          
            <label htmlFor="nombre">Nombre</label>
            <input onChange={this.onChange.bind(this)} value={this.state.nombre} id="nombre" name="nombre" type="text"></input>
            
            <label htmlFor="apellido">Apellido</label>
            <input onChange={this.onChange.bind(this)} value={this.state.apellido} id="apellido" name="apellido" type="text"></input>
            
            <label htmlFor="fecha">Fecha de nacimiento</label>
            <input onChange={this.onChange.bind(this)} value={this.state.fecha} id="fecha" name="fecha" type="date"></input>
            
            <label htmlFor="correo">Correo</label>
            <input onChange={this.onChange.bind(this)} value={this.state.correo} id="correo" name="correo" type="email"></input>

            <label htmlFor="genero">Apellido</label>
            <input onChange={this.onChange.bind(this)} value={this.state.genero} value="M" name="genero" type="radio">Hombre</input>
            <input onChange={this.onChange.bind(this)} value={this.state.genero} value="F" name="genero" type="radio">Mujer</input>
            
            <label htmlFor="lugar">Lugar</label>
            <select onChange={this.onChange.bind(this)} 
            id="lugar" name="lugar" value={this.state.lugar}>
            <option value="lug">Selecione un lugar</option>
            <option value="guayaquil">Guayaquil</option>
            <option value="quito">Quito</option>
            <option value="esmeraldas">Esmeraldas</option>
            <option value="cuenca">Cuenca</option>
            </select>

            <label htmlFor="about">Descripcion</label>
            <textarea id="about" name="about" value={this.state.about} 
            onChange={this.onChange.bind(this)} ></textarea>
            
            <div>
            <spam> {JSON.stringify(this.state)} </spam>
            </div>

            </div>
        )
    }
}
*/