import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'
import MyCard from './MyCard'

export default class Cards  extends React.Component{
    render(){
        //const filtrado = this.props.cards.filter(c => c.categoria===this.props.categoria);
            const items = this.props.cards;
            return Object.keys(items).map(indice =>
                <MyCard
                        key = {indice}
                        indice ={indice}
                        name = {items[indice].name}
                        categorie = {items[indice].categorie}
                        url = {items[indice].url}
                        precio = {items[indice].precio}
                        descuento = {items[indice].descuento}
                        isOferta ={items[indice].isOferta}//
                        items2= {this.props.items2}
                        
                /> 

            );
        
        
    }
}

Cards.propTypes = {
    cards: PropTypes.object.isRequired,
    items2:  PropTypes.object.isRequired 
}
/*
render(){
        const filtrado = this.props.cards.filter(c => c.categoria===this.props.categoria);
        console.log(filtrado);
        if(filtrado.length===0){
            return this.props.cards.map(card =>
                <Card 
                    card={card}
                    key={card.id}
                />

            );
        }else{
            return filtrado.map(card =>
                <Card 
                    card={card}
                    key={card.id}
                />
                   
            );
        }
        
    }
*/