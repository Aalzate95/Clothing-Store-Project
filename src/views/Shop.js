import React from 'react'
import lprods from '../sample/cards.json'
import Categoria from '../components/Categoria.js'
export default class Shop extends React.Component{
    state ={
        lprods: lprods
    }
    render() {
        return(
            <div className="Shop">
                <div>
                    <div className="Shop-banner">
                        <img className="Shop-crop" src="https://image.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg"   alt="banner-shop"></img>
                        <h1>Catálogo</h1>
                    </div>
                </div>
                <div className="Shop-body">
                    <Categoria
                        prods = {this.state.lprods}
                    />
                </div>    
            </div>
    )
    }
}