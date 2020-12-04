import React from 'react'
import '../components/styles/Checkin.css'
import Reporte from'../components/Reporte.js'

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
            correo:"",
            metodo:"",
            condiciones:false,
            comprado: false
        }
    }
    comprar(){
        
        let items = this.props.compra[3];
        let suma=0;
        for(const indice in items){
                suma += ((items[indice].precio)-((items[indice].precio)*items[indice].descuento))*items[indice].cantidad;
        }

        //validar que la forma de datos personales se halla llenado
        if(this.state.condiciones===false){
            alert("Acepte los Terminos!");
        }
        else if(Object.keys(items).length===0 ||suma===0){
            alert("Carrito vacio, Colóque algunos productos!!")
        }else if(this.state.metodo===""){
            alert("Escoja un metodo de Pago")
        }
        else{
            
            
            let confirmacion = window.confirm("Confirmar Compra");
            
            if(confirmacion){
                this.setState({
                        comprado: true
                });
                this.props.compra[5] =this.state.metodo;
                //muestro el reporte final  de la compra
                
                if(this.state.metodo==="Paypal"){
                    let win = window.open("https://www.paypal.com/ec/signin", '_blank');
                    win.focus();
                }
                console.log(this.props.compra);
                //aqui elimino los items del carrito para que quede vacio
                //display none para evitar ingresos nod eseados
                let desechables =document.getElementsByClassName('inv-onReport');
                for (const d of desechables){
                    d.style.display="none";
                }
                
                

            }
            
            
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
        }else if(e.target.name==="metodo"){
            this.setState({
                metodo: e.target.value
            })
        }else if(e.target.name==="condiciones"){
            this.setState({
                condiciones: e.target.checked
            })
        }
    }      
    render(){
        let report="";
        if(this.state.comprado===true){//renderizo el componente reporte
            report =<Reporte
                    reporte= {this.props.compra}
                    />
        }else{
            report= <div></div>
        }

        const compra=this.props.compra[3];//extraigo el objeto compra
        let suma=0;
        for(const indice in compra){
                suma += ((compra[indice].precio)-((compra[indice].precio)*compra[indice].descuento))*compra[indice].cantidad;
        }
        return(
            <div className="Checkin">
                <h3 className="inv-onReport">Check-Out</h3>
                <form className="inv-onReport" action="">
                    <label htmlFor="nombre">Nombre</label>
                    <input onChange={this.onChange.bind(this)} value={this.state.nombre} id="nombre" name="nombre" type="text" required></input><br></br>
                    
                    <label htmlFor="apellido">Apellido:</label>
                    <input onChange={this.onChange.bind(this)} value={this.state.apellido} id="apellido" name="apellido" type="text"    required></input><br></br>
                    
                    <label htmlFor="direccion">Direccion:</label>
                    <input onChange={this.onChange.bind(this)} value={this.state.direccion} id="direccion" name="direccion" type="text" required></input><br></br>
                    
                    <label htmlFor="correo">Correo:</label>
                    <input onChange={this.onChange.bind(this)} value={this.state.correo} id="correo" name="correo" type="email" required></input><br></br>

                    <label htmlFor="telefono">Telefono: </label><br></br>
                    <input onChange={this.onChange.bind(this)} value={this.state.telefono} id="telefono" name="telefono" type="tel" required></input><br></br>


                    <label htmlFor="lugar">Lugar:</label>
                    <select onChange={this.onChange.bind(this)} 
                    id="lugar" name="lugar" value={this.state.lugar} required>
                    <option value="lug">Selecione un lugar</option>
                    <option value="guayaquil">Guayaquil</option>
                    <option value="quito">Quito</option>
                    <option value="esmeraldas">Esmeraldas</option>
                    <option value="cuenca">Cuenca</option>
                    </select><br></br>

                    <label htmlFor="detalle">Descripcion</label><br></br>
                    <textarea id="detalle" name="detalle" required value={this.state.about} 
                    onChange={this.onChange.bind(this)} ></textarea><br></br>

                    <label htmlFor="enviar"></label>
                    <input onChange={this.onChange.bind(this)}  value={this.state.enviar} value="Comprobar" name="enviar" type="submit"></input><b></b> 
                

                </form>
                
                
                <div>
                
                </div>
                {/*tabla con resumen de la compra*/}
                <h3 className="inv-onReport">Resumen de Compra:</h3>
                <table className="Totals inv-onReport">
                    <tbody>
                        <tr>
                            <th>Producto</th>
                            <th>Subtotal </th>
                        </tr>
                        {Object.keys(compra).map((indice)=>{
                            return(
                                <tr key={indice} id={indice}>
                                    <td className="item-nombre">{compra[indice].name+" X "+compra[indice].cantidad}</td>
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
                    
                </table >
                <div className="metodosPago inv-onReport">
                    <h3>Métodos de Pago:</h3>

                    <label htmlFor="metodo">Opciones disponibles </label><br></br>
                    <input onChange={this.onChange.bind(this)} value={this.state.metodo} value="Paypal" name="metodo" type="radio"></input>Paypal<br></br>
                    <img width="80px" height="auto" src="https://www.flaticon.es/svg/static/icons/svg/196/196566.svg" alt="paypal.icon"></img> <br></br>
                    <input onChange={this.onChange.bind(this)} value={this.state.metodo} value="Transferencia Directa" name="metodo" type="radio"></input>Transferencia Directa<br></br>
                    <img width="60px" height="auto" src="https://www.flaticon.es/svg/static/icons/svg/2535/2535076.svg" alt="directa.icon"></img> <br></br>
                    <input onChange={this.onChange.bind(this)} value={this.state.metodo} value="Pago en Entrega" name="metodo" type="radio"></input>Pago en Entrega<br></br>
                    <img width="60px" height="auto" src="https://www.flaticon.es/svg/static/icons/svg/1570/1570917.svg" alt="pagoEntrega.icon"></img> <br></br>


                    <label htmlFor="condiciones"> </label><br></br>
                    <input onChange={this.onChange.bind(this)}   name="condiciones" type="checkbox" required></input>He leído y acepto los terminos y condiciones de este sitio Web <br></br>
                    <p> {JSON.stringify(this.state.condiciones)} </p><br></br>
                    <button onClick={()=>this.comprar()}>Realizar Compra</button>
                </div>
                {report}
            </div>
               
        )
    }
}