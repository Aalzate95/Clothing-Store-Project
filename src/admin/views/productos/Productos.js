import React,{useState} from 'react'
import Dashboard from '../../components/dashboard/Dashboard'
import {fetchproductolista, fetchCrearProducto,fetchEliminarProducto} from '../../../api/Api'
import './Productos.css'
import Modal from '../../../components/modal/Modal';


const Productos = () => {
    const [Data, setData] = useState({})
    const [show, setShow] = useState(false);
    const [idModal,setModal] = useState(null);

    const [idProd,setIdProd] = useState("")
    const [nombreProd,setNombreProd] = useState("")
    const [descripcionProd, setDescripcionProd] = useState("")
    const [precioProd, setPrecioProd] = useState("")
    const [descuentoProd,setDescuentoProd] = useState("")
    const [stockProd,setStockProd] = useState("")
    const [ofertaProd,setOfertaProd] = useState(false)
    const [generoProd,setGeneroProd] = useState("M")
    const [colorProd,setColorProd] = useState()
    const [tallaProd,setTallaProd] = useState("S")

    const ShowModal = (e) => {
        setShow(true)
        setModal(1)
      };

    const HideModal = () => {
        setShow(false)
    }; 

    const loadData = async () =>{
        const data = await fetchproductolista();
        console.log(data)
        setData(data )
    }

    React.useEffect(() => (
        loadData()
    ),[])

    const handleAñadir = async (e) =>{
        return  fetchCrearProducto(idProd, nombreProd, descripcionProd, parseFloat(precioProd), parseFloat(descuentoProd), parseInt(stockProd), ofertaProd, false, generoProd, colorProd, tallaProd, "00001")
    }

    const renderContenido = () => {
        let item;
        if (idModal!==null){
            return(
                <div className="renderContenido">
                    <form className="añadirProducto">
                        <div className="fila" >
                            <label>Id:</label>
                            <input type="text" onChange={(e)=>setIdProd(e.target.value)}/>

                            <label>Nombre:</label>
                            <input type="text" onChange={(e)=>setNombreProd(e.target.value)}/>
                        
                            <label>Descripcion:</label>
                            <input type="text" onChange={(e)=>setDescripcionProd(e.target.value)}/>
                        </div>
                        <div className="fila">
                            <label>precio:</label>
                            <input type="text" onChange={(e)=>setPrecioProd(e.target.value)}/>

                            <label>Descuento (0-1):</label>
                            <input type="text" onChange={(e)=>setDescuentoProd(e.target.value)}/>
                        </div>
                        <div className="fila">
                            <label>Stock:</label>
                            <input type="text" onChange={(e)=>setStockProd(e.target.value)}/>

                            <label>oferta:</label>
                            <input type="checkbox" onChange={(e)=>setOfertaProd(e.target.value)}/>

                            <label>genero:</label>
                            <select type="text" onChange={(e)=>console.log(e.target.value)}>
                                <option value="M">M</option>
                                <option value="F">F</option>
                            </select>
                        </div>
                        <div className="fila">
                            <label>Color:</label>
                            <input type="text" onChange={(e)=>setColorProd(e.target.value)}/>

                            <label>Talla:</label>
                            <select type="text" onChange={(e)=>setTallaProd(e.target.value)}>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>

                        <div className="button-añadir" onClick={(e)=>handleAñadir(e)}>
                            <button>Añadir</button>
                        </div>
                        
                        
                    </form>
                </div>
            )
        }
    }

    const handleDeleteProd = async (e,id) =>{
        await fetchEliminarProducto(id)
    }

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
                <div className="col9" ><button className="btn" type="button" onClick={(e)=>handleDeleteProd(e,Data[id].product_id)}>X</button></div>
            </li>
            )
    })


    return ( 
        <Dashboard>
            <div className="Productos">
                <Modal show={show} handleClose={HideModal}>
                    <div className="ModalShop">{renderContenido()}</div>
                </Modal>
                <div className="acciones">
                    <button onClick={(e) => ShowModal()}>Añadir</button>
                </div>
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