import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'
import Card from './Card'

export default class Cards  extends React.Component{
    /* filtro por categoria*/
    render(){
        const filtrado = this.props.cards.filter(c => c.categoria===this.props.categoria);
        console.log(filtrado);
        return filtrado.map(card =>
            <Card 
                card={card}
                key={card.id}
            />
               
        );
    }
}
Cards.propTypes = {
    cards: PropTypes.array.isRequired,
    categoria: PropTypes.string.isRequired
}