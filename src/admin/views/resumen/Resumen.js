import React,{useState} from 'react'
import Dashboard from '../../components/dashboard/Dashboard'
import './Resumen.css'
import { MdPeopleOutline,MdAttachMoney,MdShoppingCart } from "react-icons/md";
import AnyChart from 'anychart-react'

const UltimosProductos = {
    "0029":{"name":"producto1","stock":3,"url":"http://www.pequenomundo.cl/wp-content/themes/childcare/images/default.png"},
    "0030":{"name":"producto1","stock":3,"url":"http://www.pequenomundo.cl/wp-content/themes/childcare/images/default.png"},
    "0031":{"name":"producto1","stock":3,"url":"http://www.pequenomundo.cl/wp-content/themes/childcare/images/default.png"},
    "0032":{"name":"producto1","stock":3,"url":"http://www.pequenomundo.cl/wp-content/themes/childcare/images/default.png"},
    "0033":{"name":"producto1","stock":3,"url":"http://www.pequenomundo.cl/wp-content/themes/childcare/images/default.png"}
}


const Resumen = ({id}) => {
    const [totClientes, setTotClientes] = useState(10)
    const [gananciaReal, setGananciaReal] = useState(38000)
    const [totProductos, setTotProductos] = useState(30)
    const [gananciaEstimada, setGananciaEstimada] = useState(100000)
    
    
    const renderProductos = Object.keys(UltimosProductos).map((item)=>{
        return(
            <div className="row" key={item}>
                <div className="Imagen-Producto">
                    <img src ={UltimosProductos[item]["url"]}/>
                </div>
                <div className="Descripcion-productos">
                    <h4>{UltimosProductos[item]["name"]}</h4>
                    <p>cantidad ingresada: {UltimosProductos[item]["stock"]}</p>
                </div>
            </div>
            )
    })
    let complexSettings = {
        width: 800,
        height: 600,
        type: 'column',
        data: "Octubre,5\nNoviembre,3\nDiciembre,12\nEnero,4", 
        title: 'Ventas totales por mes',
        yAxis: [1, {
          orientation: 'right',
          enabled: true,
          labels: {
            format: '{%Value}{decimalPoint:\\,}',
            fontColor: 'black'
          }
        }],
        legend: {
          background: 'lightgreen 0.4',
          padding: 0
        },
        lineMarker: {
          value: 4.5
        }
    };
    return ( 
            <Dashboard>
                <div className="Resumen">
                    <div className="miniCards-grid">
                        <div className="miniCards-align">
                            <div className="miniCard">
                                <div className="top">
                                    <div>
                                        <h3>Total Clientes</h3>
                                        <h2>{totClientes}</h2>
                                    </div>
                                    <div className="esfera" style={{background:'#43A047'}}>
                                        <div><MdPeopleOutline/></div>
                                    </div>
                                </div>
                                <div>
                                    <p>Desde el mes pasado...</p>
                                </div>
                            </div>
                        </div>
                        <div className="miniCards-align">
                            <div className="miniCard">
                                <div className="top">
                                    <div>
                                        <h3>Ganancia Real</h3>
                                        <h2>$ {gananciaReal}</h2>
                                    </div>
                                    <div className="esfera" style={{background:'#E53935'}}>
                                        <div><MdAttachMoney/></div>
                                    </div>

                                </div>
                                    <p>Desde el mes pasado...</p>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className="miniCards-align">
                            <div className="miniCard" >
                                <div className="top">
                                    <div>
                                        <h3>Total Productos</h3>
                                        <h2>{totProductos}</h2>
                                    </div>
                                    <div className="esfera" style={{background:'#FB8C00'}}>
                                        <div><MdShoppingCart/></div>
                                    </div>
                                </div>
                                <div>
                                    <p>Desde el mes pasado...</p>
                                </div>
                            </div>
                        </div>
                        <div className="miniCards-align">
                            <div className="miniCard" >
                                <div className="top">
                                    <div>
                                        <h3>Ganancia Estimada</h3>
                                        <h2>$ {gananciaEstimada}</h2>
                                    </div>
                                    <div className="esfera" style={{background:'#3949AB'}}>
                                        <div><MdAttachMoney/></div>
                                    </div>
                                </div>
                                <div>
                                    <p>Desde el mes pasado...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "bigCard-grid">
                        <div className="miniCards-align">
                            <div className = "bigCard">
                                <AnyChart
                                    {...complexSettings}
                                />
                            </div>
                        </div>

                        <div className="miniCards-align">
                            <div className="mediumCard">
                                <h3>Ultimos Productos</h3>
                                <div >
                                    {renderProductos}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Dashboard>
    );
}
 
export default Resumen;


