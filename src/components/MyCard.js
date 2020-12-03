import React from 'react'
import './styles/MyCard.css'
import './styles/MyModal.css'
export default class MyCard extends React.Component{
          
    componentDidMount(){
        
        // Get the modal
        var modals = document.getElementsByClassName("myModal");
        var btns = document.getElementsByClassName("myBtn");
        var spans = document.getElementsByClassName("close");


        for(let m=0; m<modals.length; m++){
            let modal =modals[m];
            let btn = btns[m];
            let span =spans[m];
            btn.onclick = function() {
            modal.style.display = "block";
            }
            span.onclick = function() {
            modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            }

        }
    }
    
    render(){
        //agregar el dict 
        const {url,categorie,precio,descuento,name, isOferta,items2} = this.props

        const item ={"name": name, "categorie": categorie, "url": url, "descuento":descuento, "precio":precio, "isOferta": isOferta};
        
        //items2 llega aqui, ahora agregar onclick a agregar al carrito para que sea agregado a items2
        return(
            
                <div className="MyCard">
                    <div id="myModal" className="modal myModal">
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <div className="modal-layout">
                                <div className="modal-img">
                                    <img src={url} alt="imagen" />
                                </div>
                                <div className="modal-descripcion">
                                    <h2>Descripcion:</h2>
                                    <h3>{name}</h3>
                                    <p>{categorie}</p>
                                    <p>{precio} -- {descuento} </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="MyCardImage">
                        <img src={url} alt={name}/>
                        <div id="Overlay">
                            <div className="Añadir">
                                <button onClick={() =>this.props.items2[this.props.indice]=item}>Añadir al carrito</button>
                            </div>
                            <div className="VistaRapida" >
                                <button id="myBtn" className="myBtn">Vista Rapida</button>
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