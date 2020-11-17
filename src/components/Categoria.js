import React from 'react'
import PropTypes from 'prop-types'
import Cards from './Cards.js'

export default class Categoria extends React.Component{
    
    render(){
        return (
            <div className="Categoria container">
                <h3>Categoria-Nombre</h3>
                <select name="subcat">
                    <option value="val1">Val1</option>
                    <option value="val2">Val2</option>
                    <option value="val3">Val3</option>
                </select><br/>
                <div className="Cards">
                    <Cards
                        cards ={this.props.prods}
                    />
                    
                </div>
                
            </div>
        );
    }
}
Categoria.propTypes = {
    prods: PropTypes.array.isRequired
}