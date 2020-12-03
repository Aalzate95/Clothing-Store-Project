import React from 'react'
import Categoria from '../components/Categoria.js'

import dataPrincipal from '../data/shop.json'


export default class Shop extends React.Component{
    constructor(props){
        super(props);
        this.setCategorie = this.setCategorie.bind(this);
        this.state ={
            items: dataPrincipal.productos,
            categories:  dataPrincipal.categories,
            categorie: ""
        };
        
    }
    setCategorie(cat) {
        this.setState({categorie: cat})
    }
    render() {
        const items =this.state.items;
        const categories =this.state.categories;
        const categorie = this.state.categorie;
                     
        //posiblemente borrar
        let categoria;
        categoria = <Categoria
                prods = {items}
                categorie ={categorie}
        />
        
        return(
            <div className="Shop">
                <div>
                    <div className="Shop-banner">
                        <img className="Shop-crop" src="https://image.freepik.com/foto-gratis/fila-ropa-moda-perchas_1232-3003.jpg"   alt="banner-shop"></img>
                        <h1>Catálogo</h1>
                    </div>
                </div>
                <div className="Shop-body">
                        {categoria}

                        <div id="Seleccion">
                            <h3>Categorias</h3>
                            <div className="op" onClick={() =>this.setCategorie("")}>
                                <p>Todas</p>
                            </div>
                            {
                                Object.keys(categories).map((indice) => {
                                    return(
                                        <div className="op" key={indice}  onClick={() =>this.setCategorie(categories[indice].title)}>
                                            <p>{categories[indice].title}</p>
                                        </div>
                                        
                                    )
                                }

                                )
                            }
                            
                            
                        </div>
                    
                </div>
                   
            </div>
    )
    }
    
}
/*
{
                                Object.keys(categories).map((indice) => {
                                    return(
                                        <div className="op" >
                                            <p className="cat">{categories[indice].title}</p>
                                        </div>
                                    )
                                }

                                )
                            }
*/
//https://image.freepik.com/foto-gratis/fila-ropa-moda-perchas_1232-3003.jpg
//https://image.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg
/**
 * <div className="op" onClick={this.handleDeportiva}>
                                <p>Camisa Deportiva</p>
                            </div>
                            <div className="op" onClick={this.handleCasual}>
                                <p>Camisa Casual</p>
                            </div>
                            <div className="op" onClick={this.handleAll}>
                                <p>Todos</p>
                            </div>
 */