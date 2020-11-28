import React from 'react'
import './styles/MyCard.css'

export default class MyCard extends React.Component{
    render(){
        const {url,categorie,precio,descuento,name} = this.props
        return(
            
                <div className="MyCard" >
                    <div className="MyCardImage">
                        <img src={url} alt={name}/>
                        <div id="Overlay">
                            <div className="Añadir">
                                <button>Añadir al carrito</button>
                            </div>
                            <div className="VistaRapida">
                                <button>Vista Rapida</button>
                            </div> 
                        </div>
                        
                    </div>

                    <div className="MyCardDescription">
                        
                        <ul>
                            <li>{categorie}</li>
                            <li>{name}</li>
                        </ul>
                        <div>
                            <p><s>${precio}</s> - ${precio - (precio*descuento)}</p>
                        </div>
                    </div>
                </div>
            
                
            )
    }
}

/*<div name="MyCardDescription">
                        
                    </div> */