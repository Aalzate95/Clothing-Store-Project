import React from 'react'
import Categoria from '../components/Categoria.js'
import './styles/Shop.css'
import dataPrincipal from '../data/shop.json'
import PropTypes from 'prop-types'


export default class Shop extends React.Component{
    constructor(props){
        super(props);
        this.setCategorie = this.setCategorie.bind(this);
        this.state ={
            items: dataPrincipal.productos,
            categories:  dataPrincipal.categories,
            categorie: "",
            items2: props.items2 //Carrito, borrar llamar  aprops
        };
        
    }
    setCategorie(cat) {
        this.setState({categorie: cat})
    }
    render() {
        const items =this.state.items;
        const categories =this.state.categories;
        const categorie = this.state.categorie;
        
        
        //items2 si llega aqui

        //posiblemente borrar
        let categoria;
        categoria = <Categoria
                prods = {items}
                categorie ={categorie}
                items2 ={this.state.items2}//
        />
        
        return(
            <div className="Shop">

                <div>
                    <div className="Shop-banner">
                        <img className="Shop-crop" src="https://image.freepik.com/foto-gratis/fila-ropa-moda-perchas_1232-3003.jpg"   alt="banner-shop"></img>
                        
                    </div>
                </div>

                <h1>Catálogo</h1>
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
Shop.propTypes = {
    items2: PropTypes.object.isRequired
}