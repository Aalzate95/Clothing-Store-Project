import React,{useState} from 'react'
import './Shop.css'
import {fetchproductolista} from '../../api/Api'
//import fetchproductolista​​​​​ from '../../api/Api'
import Data from '../../data/shop.json'
import DataCategorias from '../../data/categorias.json'
import Modal from '../../components/modal/Modal';
import Pagination from '../../components/pagination/Pagination';
import NavBar from '../../components/navBar/NavBar'
import MyFooter from '../../components/footer/MyFooter'

const Shop = () => {
    const [Data, setData] = useState({})
    const [show, setShow] = useState(false);
    const [idModal,setModal] = useState(null);

    const ShowModal = (e) => {
        setShow(true)
        setModal(1)
        
      };
    
    const loadData = async () =>{
        const data = await fetchproductolista();
        const productos =  data.json()
        setData(productos)
    }

    React.useEffect(() => (
        loadData()
    ),[])

    const HideModal = () => {
        setShow(false)
      };

    const renderContenido = () => {
        let item;
        if (idModal!==null){
            item = Data[idModal]
            let descuento = item.descuento*100 +"%"
            return(
                <div className="Modal-Producto">
                    <div className="Imagen-Producto">
                        <img src={item.url} alt={item.name}/>
                    </div>
                    <div className="Descripcion-Producto"> 
                        <h2>{item.name}</h2>
                        <div className="Parrafos">
                                <p><b>Categoria:</b>{item.categorie}</p>
                                <p>Descuento del <h2>{descuento}</h2></p>
                        </div>
                        <p>{item.descripcion}</p>
                        <p><b>Cantidad:</b><input type ="text" value={1}/></p>
                        <p><b>Precio:</b>{item.precio}</p>
                    </div>
                </div>
            )
        }
    }

    return ( 
        <div>
                <NavBar/>
        <div className="Shop">
           <div className="Shop-banner">
                <img
                    alt="banner"
                    className="Shop-crop"
                    src = 'https://image.freepik.com/foto-gratis/imagen-primer-plano-programador-trabajando-su-escritorio-oficina_1098-18707.jpg'
                />
            </div>

            <div className="HistorialContenido">

                <Modal show={show} handleClose={HideModal}>
                    <div className="ModalShop">{renderContenido()}</div>
                </Modal>

                <div>
                    <Pagination
                                items = {Object.keys(Data)}
                                data = {Data}
                                ShowModal={ShowModal}
                                categorias = {DataCategorias}
                            />   
                </div>
            </div>
        </div>
        <div className="footer">
                        <MyFooter/>
                </div>
            </div>
     );    
}
 
export default Shop;

