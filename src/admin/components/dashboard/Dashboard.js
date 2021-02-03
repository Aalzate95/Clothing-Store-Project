import React,{useState} from 'react'
import { Link, Redirect } from 'react-router-dom';
import './Dashboard.css'
import { MdSettings,MdFace,MdExitToApp,MdPeople,MdShoppingBasket,MdDashboard } from "react-icons/md";

const Dashboard = ({children}) => {
    const [salir,setSalir] = useState(false)
    const Logout = (e) =>{
        setSalir(true)
    }

    return ( 
        <div className="Dashboard">
            {salir? <Redirect to = "/"/>:null}
            <div className="Topbar">
                <button type="submit" onClick={(e)=>Logout(e)}><MdExitToApp/> Logout</button>
            </div>
            <div className = "Sidebar">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul className="menu">
                    <li><Link to="/admin/"><MdDashboard/> Dashboard</Link></li>
                    <li><Link to="/admin/Clientes/"><MdPeople/> Clientes</Link></li>
                    <li><Link to="/admin/Productos/"><MdShoppingBasket/> Productos</Link></li>
                    <li><Link to="/admin/Cuenta/"><MdFace/> Cuenta</Link></li>
                    <li><Link to="/admin/Configuracion/"><MdSettings/> Configuración</Link></li>
                </ul>
            </div>
            {children}
        </div> 
    );
}
export default Dashboard;