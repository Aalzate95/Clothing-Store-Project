import React, {useState} from 'react';
import './Pagination.css'


const Pagination = (props) => {

    const items = props.items
    const [paginaActual,setPagActual] = useState(1);
    const [cantPorPag,setCantPorPag] =  useState(14);

    const handleClick =(e)=>{
        setPagActual(e)
      }
    /* const handleCantPorPag = (e) =>{
      setCantPorPag(e)
    } */
    const handleCategoria = (e) =>{
      let cards = document.getElementsByClassName('Card');
      for(let card of cards){
        if (props.data[card.id].categorie===e){
          card.style["display"] = "grid";
        }else{
          card.style["display"] = "none";
        }
      }
    }
    const indiceDelFinal = paginaActual * cantPorPag;
    const indiceDelInicio = indiceDelFinal - cantPorPag;

    const elementos = items.slice(indiceDelInicio, indiceDelFinal);

    const renderElementos = elementos.map((id, index) => {
        let contenido = props.data[id];
        let descuento =  contenido.descuento*100+"%";
        let precioAntes = "$"+contenido.precio;
        let precioAhora = "$"+ (contenido.precio - contenido.precio*contenido.descuento)
        const showHideDescuento = contenido.descuento!==0 ? {display: "block"} : {display:"none"};
        return (
          <div key={index} className="Card" id={id}>
            <div className="price-container" style={showHideDescuento}>
                <div className="price">
                    <span className="number">{descuento}</span>
                </div>
            </div>

              <div className="MyCardImage">
                    <img src={contenido.url} alt={contenido.name}/>
                    <div id="Overlay">
                        <div className="Añadir">
                            <button >Añadir al carrito</button>
                        </div>
                        <div className="VistaRapida" >
                            <button id = {id} type="button" onClick={(e)=>{props.ShowModal(id,e)}}>Vista Rapida</button>
                        </div>
                    </div>
              </div>
              <div className="Descripcion">
                <h4 id="titulo">{contenido.name}</h4>
                <div className="Precios">
                    <p><b>Antes:</b><s>{precioAntes}</s></p>
                    <p><b>Ahora:</b> {precioAhora}</p>
                </div>
              </div>
              
          </div>
        );
      });

    const numeroPaginas = [];

    for (let i = 1; i <= Math.ceil(items.length / cantPorPag); i++) {
        numeroPaginas.push(i);
    }

    const renderNumeroPaginas = numeroPaginas.map(numero => {
        return (
          
          <li
            key={numero}
            id={numero}
            onClick={(e)=>handleClick(numero,e)}
          >
            <p>{numero}</p>
          </li>
        );
      });

     const renderCategorias = props.categorias.map(categoria => {
       return ( 
        <li
          key={categoria}
          id={categoria}
          onClick={(e)=>handleCategoria(categoria,e)}
        >{categoria}</li>

        );
      })
    

      return (
        <div className="Pagination">
        <div className="left-grid">
            <ul id="numeroPaginas">
                {renderNumeroPaginas}
                <p>...</p>
            </ul>   
            <div className="Elementos">
                {renderElementos}
            </div>
          
        </div>
        <div className="right-grid">
            <p>Filtros:</p>
            <ul className="Categorias">
              <li>
                Tipo:
                  <ul>
                    {renderCategorias}
                  </ul>
              </li>
            </ul>
        </div>
        </div>
      );
    
}
 
export default Pagination;