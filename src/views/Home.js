import React from 'react'
import Banner from '../components/Banner'
import dataPrincipal from '../data/principal.json'
import MyCard from '../components/MyCard'

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            banner : dataPrincipal.banner,
            tendencias: dataPrincipal.tendencias
        }
    }

    
    renderTendencias = () =>{
        const {tendencias} = this.state;
        
        
    }
   
    render(){
        const {banner,tendencias} = this.state;
        return(
            
            <div className="Home">
                <div name= "Cabecera">
                    <Banner 
                        titulo = {banner.title}
                        subtitulo = {banner.subtitle}
                        url = {banner.url}
                    />
                </div>
                <p name="TxtTendencias">Tendencias</p>
                <div className="principalTendencias">
                    {
                        Object.keys(tendencias).map((indice)=>{
                            return(
                                    <MyCard
                                    key = {indice}
                                    indice ={indice}
                                    name = {tendencias[indice].name}
                                    categorie = {tendencias[indice].categorie}
                                    url = {tendencias[indice].url}
                                    precio = {tendencias[indice].precio}
                                    descuento = {tendencias[indice].descuento}
                                    isOferta ={tendencias[indice].isOferta}//
                                    items2= {this.props.items2}
                                    /> 
                                )
                        })
                    }
                    
                </div>
            </div>
        )
    }
}