import React from 'react'
import './styles/Formulario.css'

export default  class Formulario extends React.Component{

    constructor(args){
        super(args)
        this.state={
            nombre: "",
            apellido: "",
            lugar:"",
            fecha: "",
            correo:"",
            about:"",
            genero:""
        }
    }
    
    onChange(e){
        if(e.target.name==="nombre"){
            this.setState({
                nombre: e.target.value
            })
        } else if(e.target.name==="apellido"){
            this.setState({
                apellido: e.target.value
            })
        }else if(e.target.name==="lugar"){
            this.setState({
                lugar: e.target.value
            })
        } else if(e.target.name==="correo"){
            this.setState({
                correo: e.target.value
            })
        }else if(e.target.name==="about"){
            this.setState({
                about: e.target.value
            })
        }else if(e.target.name==="genero"){
            this.setState({
                genero: e.target.value
            })
        }else if(e.target.name==="fecha"){
            this.setState({
                fecha: e.target.value
            })
        }
        
    }
    
    render(){
        return(
            <div id="formulario">
            <form >          
            <label htmlFor="nombre">Nombre:</label>
            <input onChange={this.onChange.bind(this)} value={this.state.nombre} id="nombre" name="nombre" type="text"></input><br></br>
            
            <label htmlFor="apellido">Apellido:</label>
            <input onChange={this.onChange.bind(this)} value={this.state.apellido} id="apellido" name="apellido" type="text"></input><br></br>
            
            <label htmlFor="fecha">Birth:</label>
            <input onChange={this.onChange.bind(this)} value={this.state.fecha} id="fecha" name="fecha" type="date"></input><br></br>
            
            <label htmlFor="correo">Correo:</label>
            <input onChange={this.onChange.bind(this)} value={this.state.correo} id="correo" name="correo" type="email"></input><br></br>

            <label htmlFor="genero">Genero: </label><br></br>
            <input onChange={this.onChange.bind(this)} value="M" name="genero" type="radio"></input>Masculino<br></br>
            <input onChange={this.onChange.bind(this)} value="F" name="genero" type="radio"></input>Femenino<br></br>
            
            <label htmlFor="lugar">Lugar:</label>
            <select onChange={this.onChange.bind(this)} 
            id="lugar" name="lugar" value={this.state.lugar}>
            <option value="lug">Selecione un lugar</option>
            <option value="guayaquil">Guayaquil</option>
            <option value="quito">Quito</option>
            <option value="esmeraldas">Esmeraldas</option>
            <option value="cuenca">Cuenca</option>
            </select><br></br>

            <label htmlFor="about">Descripcion</label><br></br>
            <textarea id="about" name="about" value={this.state.about} 
            onChange={this.onChange.bind(this)} ></textarea><br></br>

            <label  htmlFor="enviar"></label>
            <input id="boton" onChange={this.onChange.bind(this)}  value="enviar" name="enviar" type="submit"></input><b></b> 
            </form>
            </div>
        )
    }
}