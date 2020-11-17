import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'
import CardP from './CardP'

export default class Cards  extends React.Component{
    render(){
        return this.props.cards.map(card =>
            <CardP 
                cardp={card}
                key={card.id}
            />
               
        );
    }
}
Cards.propTypes = {
    cards: PropTypes.array.isRequired
}