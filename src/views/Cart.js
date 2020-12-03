import React from 'react'
import data from '../data/Cart.json'
import Banner from '../components/Banner'
import './styles/Cart.css'
import PropTypes from 'prop-types'

export default class Cart extends React.Component{
    constructor(props){
        super(props);
        this.actualizar = this.actualizar.bind(this);
        this.borrarItem = this.borrarItem.bind(this);
        this.state = {
            items : data, /*state con todos los items*/
            items2 : props.items2/*State que viene desde app*/
        }

    }
    borrarItem(key){
        //busco el tr con ese key
        
        let trs= document.getElementsByClassName('Tabla-item');
        //elimino de 'TABLA'
        document.getElementsByClassName('T-body')[0].removeChild(trs[Number(key)]);//probar Number
        //borro del state
        delete this.state.items2[key];//
        console.log(this.state.items2);
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
        for(let i=0;i<cantidad.length ; i++){
            let calculo = Number(precio[i].textContent)*cantidad[i].value;
            sub[i].innerText= calculo;
            suma+=calculo;
        }
        //Actualizar Tabla de totales
        total.innerText = suma;
        let subtotal = document.getElementsByClassName('Totals-sub')[0];
        subtotal.innerText =suma;
    }
    render(){
        const items=this.state.items2;
        const total= calcularTotal();
        
        console.log(items);//
        
        function calcularTotal(){
            let suma=0;
            for(const indice in items){
                suma += (items[indice].precio)-((items[indice].precio)*items[indice].descuento);
            }
            return suma;
        } 

        return(
            <div className="Cart">
                <Banner
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
                                <tr key={indice} className="Tabla-item">
                                    <td className="item-remove"><a onClick={() => this.borrarItem(indice)} className="remove">X</a></td>
                                    <td className="item-miniatura"><img src={items[indice].url}/></td>
                                    <td className="item-nombre">{items[indice].name}</td>
                                    <td className="item-precio">{(items[indice].precio)-((items[indice].precio)*items[indice].descuento)}</td>
                                    <td className="item-cantidad"><input type="Number" className="cantidad" placeholder="1"/></td>
                                    <td className="item-subtotal">{(items[indice].precio)-((items[indice].precio)*items[indice].descuento)}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                    </table>
                    <div>
                            <button className="btn-actualizar" onClick={() =>this.actualizar()}>Actualizar Carrito</button>
                    </div>
                    <p>Total</p>
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
                    <div>
                            <button className="btn-comprar">Comprar</button>
                    </div>
                </div>
            </div>
        )
    }
}

Cart.propTypes = {
    items2: PropTypes.object.isRequired
}
