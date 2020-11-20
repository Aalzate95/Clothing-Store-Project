import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'
//import {Card, Button} from 'react-bootstrap'
export default class Card  extends React.Component{
    render(){
        /*almacena la instancia */
        //<img className="col-12 " alt="producto" src={card.image}></img>
        const {card} =this.props;
        return  <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <img className="col-12" alt="producto" src={card.image}></img>
                    <div className={"card-data col-12"}>
                        <div className="col-12 card-boton"><p>Agregar al carrito</p></div>
                        <h5 className="card-nombre">{card.id + " - " +card.nombre}</h5>
                        <div className="card-detalle">
                            <p>{card.detalle }</p> 
                            <p >{"$"+card.valor}</p>
                        </div>
                        
                    </div>
                </div>
            
            
               
        
    }
}
Card.propTypes = {
    card: PropTypes.object.isRequired
}
