import React from 'react'
import HomeBanner from '../../components/HomeBanner'
import dataPrincipal from '../../data/principal.json'
import MyCard from '../../components/MyCard'
import './Home.css'
import NavBar from '../../components/navBar/NavBar'
import MyFooter from '../../components/footer/MyFooter'

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            banner : dataPrincipal.banner,
            tendencias: dataPrincipal.tendencias
        }
    }
   
    render(){
        const {banner,tendencias} = this.state;
        return(
            <div className = "Home">
                <NavBar/>
                <div name= "Cabecera">
                    <HomeBanner
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
                
                <div className="anuncios">
                    <img alt= "anuncio" src="https://www.deportesapalategui.com/blog/wp-content/uploads/2014/03/asics-compresion.jpg"></img>
                </div>
                
                <div className="footer">
                <MyFooter/>
                </div>
            </div>
        )
    }
}