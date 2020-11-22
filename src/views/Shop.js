import React from 'react'
import lprods from '../sample/cards.json'
import Categoria from '../components/Categoria.js'

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class Shop extends React.Component{
    constructor(props){
        super(props);
        this.handleCasual = this.handleCasual.bind(this);
        this.handleDeportiva = this.handleDeportiva.bind(this);
        this.handleAll = this.handleAll.bind(this);
        this.state ={
            lprods: lprods,
            categories: "" 
        };
        
    }
    /*agregar aqui categorias*/
    handleCasual(){
        this.setState({categories: "Camisa casual"});
    }
    handleDeportiva(){
        this.setState({categories: "Camisa Deportiva"});
    }
    handleAll(){
        this.setState({categories: ""});
    }
    
    render() {
        let categoria;
        categoria = <Categoria
                prods = {this.state.lprods}
                categoria ={this.state.categories}
                />
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

                        {categoria}

                        <div className="Seleccion container col-12 col-sm-4 col-md-3 col-lg-2">
                            <h3>Categorias</h3>
                            <div className="op" onClick={this.handleDeportiva}>
                                <p>Camisa Deportiva</p>
                            </div>
                            <div className="op" onClick={this.handleCasual}>
                                <p>Camisa Casual</p>
                            </div>
                            <div className="op" onClick={this.handleAll}>
                                <p>Todos</p>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                   
            </div>
    )
    }
    
}
//https://image.freepik.com/foto-gratis/fila-ropa-moda-perchas_1232-3003.jpg
//https://image.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg
        