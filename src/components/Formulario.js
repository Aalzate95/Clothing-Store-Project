import React from 'react'
export default  class Formulario extends React.Component{

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
            <input onChange={this.onChange.bind(this)} value={this.state.genero} value="M" name="genero" type="radio"></input>
            <input onChange={this.onChange.bind(this)} value={this.state.genero} value="F" name="genero" type="radio"></input>
            
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