import React from 'react'
import lprods from '../sample/cards.json'
import Categoria from '../components/Categoria.js'
export default class Shop extends React.Component{
    state ={
        lprods: lprods,
        categories: ['Camisa casual','Camisa Deportiva'] 
    }
    render() {
        //https://image.freepik.com/foto-gratis/fila-ropa-moda-perchas_1232-3003.jpg
        //https://image.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg
        
        return(
            <div className="Shop">
                <div>
                    <div className="Shop-banner">
                        <img className="Shop-crop" src="https://image.freepik.com/foto-gratis/fila-ropa-moda-perchas_1232-3003.jpg"   alt="banner-shop"></img>
                        <h1>Catálogo</h1>
                    </div>
                </div>
                <div className="Shop-body col-12">
                    <div className="row">
                        <Categoria
                            prods = {this.state.lprods}
                            categoria ={this.state.categories[1]}
                        />
                        <div className="Seleccion container col-12 col-sm-4 col-md-3 col-lg-2">
                            <h3>Categorias</h3>
                            <div className="op">
                                <p>Camisa casual</p>
                            </div>
                            <div className="op">
                                <p>Camisa Deportiva</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                   
            </div>
    )
    }
}
/**
 * <Categoria
                        prods = {this.state.lprods}
                        categoria ={this.state.categories[1]}
                    />
                    <div className="Categoria container col-6 col-md-2">
                        <div className="op">
                            <p>Camisa casual</p>
                        </div>
                        <div className="op">
                            <p>Camisa Deportiva</p>
                        </div>
                    </div>
 */