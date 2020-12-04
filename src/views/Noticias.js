import React from 'react'
import './styles/Noticias.css'
import PropTypes from 'prop-types'


export default class Shop extends React.Component{

    render() {

        return(
            <div className="Noticias">

                <div>
                    <div className="Noticias-banner">
                        <img className="Noticias-crop" src="//ae01.alicdn.com/kf/H13be6cc60f4a46968e9a3d825b853799U.png_.webp"   alt="noticias-banner"></img>
                    </div>
                </div>

                <h1>Novedades</h1>
                <div className="Noticias-body">
                            <div id="noticias1">
                            <img className="noticiasImg" src="Images/Noticias/noticia1.jpeg"   alt="noticia1"></img>
                            </div>

                            <div id="noticias2">
                            <img className="noticiasImg" src="https://image.freepik.com/foto-gratis/fila-ropa-moda-perchas_1232-3003.jpg"   alt="noticia2"></img>
                            </div>

                            <div id="noticias3">
                            <img className="noticiasImg" src="https://image.freepik.com/foto-gratis/fila-ropa-moda-perchas_1232-3003.jpg"   alt="noticia3"></img>
                            </div> 

                            <div id="oferta">
                            <img className="noticiasImg" src="https://ec.totto.com/arquivos/BANNER-SALE-2018sale.jpg"   alt="ofertas"></img>
                            </div>  
                        
                    
                </div>
                   

            </div>
    )
    }
    
}
