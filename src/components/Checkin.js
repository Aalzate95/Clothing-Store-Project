import React from 'react'
import '../components/styles/Checkin.css'

export default class Checkin extends React.Component{
    constructor(args){
        super(args)
        this.state={
            nombre: "",
            apellido: "",
            lugar:"",
            direccion:"",
            detalle:"",
            telefono:"",
            correo:""
        }
    }
    // < >
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
        }else if(e.target.name==="direccion"){
            this.setState({
                direccion: e.target.value
            })
        }else if(e.target.name==="detalle"){
            this.setState({
                detalle: e.target.value
            })
        }else if(e.target.name==="correo"){
            this.setState({
                correo: e.target.value
            })
        }else if(e.target.name==="telefono"){
            this.setState({
                telefono: e.target.value
            })
        }
        
    }      
    render(){
        const compra=this.props.compra[3];//extraigo el objeto compra
        let suma=0;
        for(const indice in compra){
                suma += ((compra[indice].precio)-((compra[indice].precio)*compra[indice].descuento))*compra[indice].cantidad;
        }
        return(
            <div className="Checkin">
                <h3>Check-Out</h3>
                <label htmlFor="nombre">Nombre</label>
                <input onChange={this.onChange.bind(this)} value={this.state.nombre} id="nombre" name="nombre" type="text"></input><br></br>
                
                <label htmlFor="apellido">Apellido:</label>
                <input onChange={this.onChange.bind(this)} value={this.state.apellido} id="apellido" name="apellido" type="text"></input><br></br>
                
                <label htmlFor="direccion">Fecha de nacimiento:</label>
                <input onChange={this.onChange.bind(this)} value={this.state.direccion} id="direccion" name="direccion" type="text"></input><br></br>
                
                <label htmlFor="correo">Correo:</label>
                <input onChange={this.onChange.bind(this)} value={this.state.correo} id="correo" name="correo" type="email"></input><br></br>

                <label htmlFor="telefono">Telefono: </label><br></br>
                <input onChange={this.onChange.bind(this)} value={this.state.telefono} id="telefono" name="telefono" type="tel"></input><br></br>


                <label htmlFor="lugar">Lugar:</label>
                <select onChange={this.onChange.bind(this)} 
                id="lugar" name="lugar" value={this.state.lugar}>
                <option value="lug">Selecione un lugar</option>
                <option value="guayaquil">Guayaquil</option>
                <option value="quito">Quito</option>
                <option value="esmeraldas">Esmeraldas</option>
                <option value="cuenca">Cuenca</option>
                </select><br></br>

                <label htmlFor="detalle">Descripcion</label><br></br>
                <textarea id="detalle" name="detalle" value={this.state.about} 
                onChange={this.onChange.bind(this)} ></textarea><br></br>

                <label htmlFor="enviar"></label>
                <input onChange={this.onChange.bind(this)} value={this.state.enviar} value="enviar" name="enviar" type="submit"></input><b></b> 
                
                
                <div>
                <p> {JSON.stringify(this.state)} </p>
                </div>
                {/*tabla con resumen de la compra*/}
                <h4>Resumen de Compra:</h4>
                <table className="Totals">
                    <tbody>
                        <tr>
                            <th>Producto</th>
                            <th>Subtotal </th>
                        </tr>
                        {Object.keys(compra).map((indice)=>{
                            return(
                                <tr key={indice} id={indice}>
                                    <td className="item-nombre">{compra[indice].name+"X"+compra[indice].cantidad}</td>
                                    <td className="item-subtotal">{((compra[indice].precio)-((compra[indice].precio)*compra[indice].descuento))*Number(compra[indice].cantidad)}</td>
                                </tr>
                            )
                        })
                        }
                        <tr>
                            <th>Total</th>
                            <td>{suma}</td>
                        </tr>
                    </tbody>
                    
                    </table>
                    <div className="metodosPago">
                        
                    </div>
            </div>
               
        )
    }
}