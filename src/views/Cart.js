import React from 'react'
import data from '../data/Cart.json'
import HomeBanner from '../components/HomeBanner'
import './styles/Cart.css'
import PropTypes from 'prop-types'
import Checkin from '../components/Checkin'

export default class Cart extends React.Component{
    constructor(props){
        super(props);
        this.actualizar = this.actualizar.bind(this);
        this.borrarItem = this.borrarItem.bind(this);
        this.comprar = this.comprar.bind(this);
        this.cantidad =this.cantidad.bind(this);
        this.state = {
            items : data, /*state con todos los items (ignorar, no se usaxd)*/
            items2 : props.items2,/*State que viene desde app*/
            user : "rogwi",//viene desde app
            compra : []
        }

    }
    
    borrarItem(key){
        //busco el tr con el id Key, key es el id del item en el .json
        
        let trs= document.getElementById(key);
        //elimino de 'TABLA'
        //document.getElementsByClassName('T-body')[0].removeChild(trs[Number(key)]);
        document.getElementsByClassName('T-body')[0].removeChild(trs);
        //borro del state
        delete this.state.items2[key];//
        
    }
    cantidad(key){
        let trs=document.getElementById(key);
        //obtemgp el value
        let c =trs.getElementsByClassName('cantidad')[0].value;
        console.log(c);
        this.state.items2[key].cantidad=c;
    }
    actualizar(){

        //Actualizar Tabla de prods
        //referencia a los subtotales, precio y cantidad
        let sub = document.getElementsByClassName('item-subtotal');
        let cantidad =document.getElementsByClassName('cantidad');
        let precio = document.getElementsByClassName('item-precio');
        //Recorro y calculo los precios
        let total =document.getElementsByClassName("Totals-tot")[0];
        let suma=0;
        for(let i=0;i<cantidad.length ; i++){//cambiar para que se trabaje con el objeto carro
            let calculo = Number(precio[i].textContent)*cantidad[i].value;
            sub[i].innerText= calculo;
            suma+=calculo;
        }
        //Actualizar Tabla de totales
        total.innerText = suma;
        let subtotal = document.getElementsByClassName('Totals-sub')[0];
        subtotal.innerText =suma;
    }
    comprar(){/* Genera reporte del cart y se envia al siguiente paso checkout */
        /*Reporte:
        -codigo
        -usuario
        -fecha
        -items
        -total
        */
        let reporte=[];
        let items = this.state.items2;
        let suma=0;
        for(const indice in items){
                suma += ((items[indice].precio)-((items[indice].precio)*items[indice].descuento))*items[indice].cantidad;
        }
        if(this.state.user==="NA"){
            alert("Solo usuarios Registrados puede realizar una Compra!!");
        }
        else if(Object.keys(items).length===0 ||suma===0){
            alert("Carrito vacio, Colóque algunos productos!!")
        }else{
            
            let codigo = Date.now();
            let usuario =this.state.user;
            let fecha =new Date();
            
            reporte.push(codigo);
            reporte.push(usuario);
            reporte.push(fecha);
            reporte.push(items);
            reporte.push(suma);

            let confirmacion = window.confirm("¿Avanzar a Checkout?");
            
            console.log(reporte);
            //agrego el reporte si confirmacion es true
            if(confirmacion){
                this.setState({
                    compra :reporte
                });
                //hago display none
                document.getElementsByClassName('Tabla')[0].style.display="none";
                document.getElementsByClassName('btndiv')[0].style.display="none";
                document.getElementsByClassName('p')[0].style.display="none";
                document.getElementsByClassName('Totals')[0].style.display="none";
                document.getElementsByClassName('btndiv2')[0].style.display="none";

            }
            
            
        }


    }
    
    render(){
        const items=this.state.items2;
        const total= calcularTotal();
        
        //console.log(items);//
        
        function calcularTotal(){
            let suma=0;
            for(const indice in items){
                suma += (items[indice].precio)-((items[indice].precio)*items[indice].descuento);
            }
            return suma;
        }
        let checkout =""; 
        if(this.state.compra.length===0){
            checkout=<div>
                        <h1></h1>
                    </div>
        }else{
            checkout=<Checkin
                        compra= {this.state.compra}
                    />
        }

        return(
            <div className="Cart">
                <HomeBanner
                    url = 'https://image.freepik.com/foto-gratis/imagen-primer-plano-programador-trabajando-su-escritorio-oficina_1098-18707.jpg'
                />
                <h1>Carrito</h1>
                
                <div className="Cart-Body">
                    <table className="Tabla">
                        <tbody className="T-body">
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                        </tr>
                        {/*aqui empiezo a crear filas por cada item*/}
                        {
                        Object.keys(items).map((indice)=>{
                            return(
                                <tr key={indice} id={indice}>
                                    <td className="item-remove"><a onClick={() => this.borrarItem(indice)} className="remove">X</a></td>
                                    <td className="item-miniatura"><img src={items[indice].url}/></td>
                                    <td className="item-nombre">{items[indice].name}</td>
                                    <td className="item-precio">{(items[indice].precio)-((items[indice].precio)*items[indice].descuento)}</td>
                                    <td className="item-cantidad"><input onChange={()=> this.cantidad(indice)} type="Number" min="1" placeholder="1"  className="cantidad" /></td>
                                    <td className="item-subtotal">{(items[indice].precio)-((items[indice].precio)*items[indice].descuento)}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                    </table>
                    <div className="btndiv">
                            <button className="btn-actualizar" onClick={() =>this.actualizar()}>Actualizar Carrito</button>
                    </div>
                    <p className="p">Total</p>
                    <table className="Totals">
                    <tbody>
                        <tr>
                            <th>Subtotals</th>
                            <td className="Totals-sub">{total}</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td className="Totals-tot">{total}</td>
                        </tr>
                    </tbody>
                    </table>
                    <div className="btndiv2">
                            <button className="btn-comprar" onClick={() => this.comprar()}>Checkout</button>
                    </div>
                    {checkout}
                    {/*aqui mando state.compra, no lo hago pues me da error si el checkin estaa qui
                    <Checkin
                        compra= {this.state.items2}
                    />
                    */}
                </div>
            </div>
        )
    }
}

Cart.propTypes = {
    items2: PropTypes.object.isRequired
}
