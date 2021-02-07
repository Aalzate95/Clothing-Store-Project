import React, {useState} from 'react';
import Dashboard from '../../components/dashboard/Dashboard'
import './Clientes.css'
import items from '../../data/clientes.json'

console.log(items)

const Clientes = ({id}) => {
    const [paginaActual,setPagActual] = useState(1);
    const [cantPorPag,setCantPorPag] =  useState(10);
    
    const handleClick =(e)=>{
        setPagActual(e)
      }

    const indiceDelFinal = paginaActual * cantPorPag;
    const indiceDelInicio = indiceDelFinal - cantPorPag;

    const elementos = Object.keys(items).slice(indiceDelInicio, indiceDelFinal);

    const renderElementos = elementos.map((id, index) => {
        return (
          <div key={index} className="filaTabla" id={id}>
            <p><input type="checkbox"/></p>
            <p>{items[id]["nombre"]+' '+items[id]["apellido"]}</p>
            <p>{items[id]["usuario"]}</p>
            <p>{items[id]["correo"]}</p>
            <p>{items[id]["ciudad"]}</p>
            <p>{items[id]["telefono"]}</p>
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
    return ( 
        <Dashboard>
            <div className="Clientes">
                <div className="acciones">
                    <button>editar</button>
                    <button>eliminar</button>
                    <button>añadir</button>
                </div>
                <div className="Card-filtro">
                    <input type="text" placeholder="Buscar Cliente"/>
                </div>
                <div className="Card-listado">

                    <div className="tablaClientes">
                        <div className="tituloTabla">
                            <p><input type="checkbox"/></p>
                            <p>Nombre</p>
                            <p>Usuario</p>
                            <p>Correo electrónico</p>
                            <p>Ciudad</p>
                            <p>Telefono</p>
                        </div>
                        {renderElementos}
                    </div>

                    <ul id="numeroPaginas">
                        {renderNumeroPaginas}
                        <p>...</p>
                    </ul> 
                </div>
            </div>
        </Dashboard>
        );
}
 
export default Clientes;