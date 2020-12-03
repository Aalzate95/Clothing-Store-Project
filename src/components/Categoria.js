import React from 'react'
import PropTypes from 'prop-types'
import Cards from './Cards.js'
import './styles/Categoria.css'

export default class Categoria extends React.Component{
    
    render(){
        
        //aqui llega items2

        //aqui eleguir cual categoria imprimir
        if(this.props.categorie===""){
            return (
                <div className="Categoria">
                    <h2>{"PRODUCTOS"}</h2>
                    <div className="Categoria-items">
                        <Cards
                            cards = {this.props.prods}
                            items2 = {this.props.items2}
                        />
                        
                    </div>
                    
                </div>
            );
        }else{
            let filtrado ={};
            for(let it in this.props.prods){
                if(this.props.prods[it].categorie===this.props.categorie){
                    filtrado[it]=this.props.prods[it];
                }
            }
            return (
                <div className="Categoria">
                    <h2>{this.props.categorie.toUpperCase()}</h2>
                    <div className="Categoria-items">
                        <Cards
                            cards = {filtrado}
                            items2 = {this.props.items2}
                        />
                        
                    </div>
                    
                </div>
            );
            }
    }
}
Categoria.propTypes = {
    prods: PropTypes.object.isRequired,
    categorie: PropTypes.string.isRequired,
    items2: PropTypes.object.isRequired
}
