import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'
import {Card, Button} from 'react-bootstrap'
export default class CardP  extends React.Component{
    render(){
        /*almacena la instancia */
        const {cardp} =this.props;
        return  <Card >
                    <Card.Img src={cardp.image}/>
                    <Card.Body>
                        <Card.Title>{cardp.nombre +cardp.id}</Card.Title>
                        <Card.Text>{cardp.detalle}</Card.Text>
                        <Button variant="secondary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            
            
               
        
    }
}
CardP.propTypes = {
    cardp: PropTypes.object.isRequired
}
