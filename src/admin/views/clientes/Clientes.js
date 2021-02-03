import React from 'react'
import Dashboard from '../../components/dashboard/Dashboard'
import './Clientes.css'

const Clientes = ({id}) => {
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

                </div>
            </div>
        </Dashboard>
        );
}
 
export default Clientes;