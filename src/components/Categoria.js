import React from 'react'
import PropTypes from 'prop-types'
import Cards from './Cards.js'

export default class Categoria extends React.Component{
    
    render(){
        //hacer aqui el filtrado, para mostrar numero de resultados por categoria
        return (
            <div className="Categoria container col-12 col-sm-8  col-md-9 col-lg-10"  >
                <h2>{this.props.categoria}</h2>
                <div className="row">
                    <Cards
                        cards ={this.props.prods}
                        categoria={this.props.categoria}
                    />
                    
                </div>
                
            </div>
        );
    }
}
Categoria.propTypes = {
    prods: PropTypes.array.isRequired,
    categoria: PropTypes.string.isRequired
}
