import React from 'react'
import './styles/Noticias.css'


export default class Shop extends React.Component{

    render() {

        return(
            <div className="Noticias">

                <div className="Shop-banner">
                    <img
                        alt="banner"
                        className="Shop-crop"
                        src = 'https://images.dailyhive.com/20161123144615/Serpentine-Toronto-1.jpg'
                    />
                </div>

                <h1>Novedades</h1>
                <div className="Noticias-body">
                            <div id="noticias1">
                            <img className="noticiasImg" src="https://i.cbc.ca/1.5356695.1574106962!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/common-sort.jpg"   alt="noticia1"></img>
                            </div>

                            <div id="noticias2">
                            <img className="noticiasImg" src="https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/kroger-dip-fashion-brand.gif?itok=RhVgHR6y"   alt="noticia2"></img>
                            </div>

                            <div id="noticias3">
                            <img className="noticiasImg" src="https://www.shoplo.com/blog/wp-content/uploads/2016/05/9_tips_for_promoting_your-900x400.jpg"   alt="noticia3"></img>
                            </div> 

                            <div id="oferta">
                            <img className="noticiasImg" src="https://ec.totto.com/arquivos/BANNER-SALE-2018sale.jpg"   alt="ofertas"></img>
                            </div>  
                        
                    
                </div>
                   

            </div>
    )
    }
    
}
