import React,{useState} from 'react'
import Dashboard from '../../components/dashboard/Dashboard'
import {fetchproductolista} from '../../../api/Api'
import './Productos.css'
const Productos = () => {
    const [Data, setData] = useState({})

    const loadData = async () =>{
        const data = await fetchproductolista();
        console.log(data)
        setData(data )
    }

    React.useEffect(() => (
        loadData()
    ),[])

    const renderElementos = Object.keys(Data).map((id, index) => {
        let contenido = Data[id];
        return(
            <li key={id} className="table-row">
                <div className="col1"><input type="checkbox"></input></div>
                <div className="col2" data-label={contenido.product_name}>{contenido.product_name}</div>
                <div className="col3" data-label={contenido.product_fecha}>{contenido.product_fecha}</div>
                <div className="col4" data-label={contenido.product_gender}>{contenido.product_gender}</div>
                <div className="col5" data-label={contenido.product_price}>{contenido.product_price}</div>
                <div className="col6" data-label={contenido.product_descount}>{contenido.product_descount}</div>
                <div className="col7" data-label={contenido.product_gender}>{contenido.product_gender}</div>
                <div className="col8" ><button className="btn" type="button">Edit</button></div>
                <div className="col9" ><button className="btn" type="button">X</button></div>
            </li>
            )
    })

    return ( 
        <Dashboard>
            <div className="Productos">
                <ul className="EstiloTabla">
                    <li className="table-header">
                        <div className="col1"><input type="checkbox"></input></div>
                        <div className="col2">Nombre</div>
                        <div className="col3">Fecha</div>
                        <div className="col4">Genero</div>
                        <div className="col5">Precio</div>
                        <div className="col6">Descuento</div>
                        <div className="col7">Talla</div>
                        <div className="col8">Editar</div>
                        <div className="col9">Eliminar</div>
                    </li>
                    {renderElementos}
                </ul>
            </div>
        </Dashboard>
        );
}

export default Productos;