import React from 'react'
import '../components/styles/Checkin.css'

export default class Reporte extends React.Component{
    constructor(args){
        super(args)
    }
    
       
    render(){
        /*Reporte:
        -codigo
        -usuario
        -fecha
        -items
        -total
        -metodo
        */
        const reporte= this.props.reporte;
        return(
            <div className="Checkin">
                <p>{"Gracias, "+reporte[1]+ " su orden ha sido recibida"}</p>
                <ul>
                    <li>{"Numero de orden: "+reporte[0]}</li>
                    <li>{"Fecha: "+reporte[2]}</li>
                    <li>{"Total a pagar: "+reporte[4]}</li>
                    <li>{"Metodo de pago : "+reporte[5]}</li>
                    
                </ul>

            </div>
               
        )
    }
}