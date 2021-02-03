import React,{useState, useEffect} from 'react'
import {Redirect } from 'react-router-dom';

const usuarios = {
    "001":{"user":"admin","pass":"admin","isAdmin":true},
    "002":{"user":"alex","pass":"123","isAdmin":false}
}

const Redireccion = ({id}) => {

    const [accesoAdmin,setAccesoAdmin] = useState(usuarios[id]["isAdmin"])

    return (
        accesoAdmin ?<Redirect to='/admin/'/> : <Redirect to='/' />
     );
}
 
export default Redireccion;