import React,{useState} from 'react'
import Dashboard from '../../components/dashboard/Dashboard'
import {fetchproductolista} from '../../../api/Api'

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

    return ( 
        <Dashboard>
            <div className="Productos">
                <div className="tableTitle">
                    <p></p>
                    <p>Nombre</p>
                    <p>Fecha</p>
                    <p>Genero</p>
                    <p>Precio</p>
                    <p>Descuento</p>
                    <p>Talla</p>
                </div>
            </div>
        </Dashboard>
        );
}

export default Productos;