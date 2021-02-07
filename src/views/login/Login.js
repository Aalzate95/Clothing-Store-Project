import React,{useState} from 'react'
import './Login.css'
import {Redirect } from 'react-router-dom';
import NavBar from '../../components/navBar/NavBar'
import MyFooter from '../../components/footer/MyFooter'
import {fetchlogin} from '../../api/Api'

const usuarios = {
    "001":{"user":"admin","pass":"admin","isAdmin":true},
    "002":{"user":"alex","pass":"123","isAdmin":false}
}

const Login = ({usuario,contraseña,setUsuario,setContraseña,setId}) => {

    const [accesoAdmin,setAccesoAdmin] = useState(false)
    const [isSuccess,setSuccess] = useState(false)
    const [message,setMessage] = useState('')

    const ingresarUsuario = (e) =>{
        setUsuario(e.target.value)
    }

    const ingresarContraseña = (e) =>{
        setContraseña(e.target.value)
    }
// esto hay que cambiarlo solo por la respuesta del api
    const validarUsuario = async (usuario, contraseña) =>{
        const resultado = await fetchlogin(usuario,contraseña)
        setSuccess(resultado["logeado"])
    }

   const handleSubmit= (e) => {
        e.preventDefault();
        let resultado = validarUsuario(usuario, contraseña)
        if (resultado["logeado"]){
            console.log("entra")
            setSuccess(true)
            setAccesoAdmin(resultado["admin"])
        }
        else{
            setMessage("Datos Incorrectos, vuelva a intentarlo...")
        }
    }
        // window.location.href = "http://localhost:3001/app/dashboard"
        /* return <Redirect to="/Dashboard" render={()=> <Login />} /> */
      
      
    return ( 
        <div>
            <NavBar/>
            <div className="Login">
                <div className="LoginCard">
                    <h1>Login</h1>
                    <form >
                        <input type="text" name="username" placeholder="Username" required onChange={(e)=>ingresarUsuario(e)}></input>
                        <input type="password" name="password" placeholder="Password" required onChange={(e)=>ingresarContraseña(e)}></input>
                        <button type="submit" onClick={(e) => handleSubmit(e)}>Ingresar</button>
                    </form>
                    <a name="RecuperarContraseña" href="..">Recuperar contraseña ?</a>
                </div>
                {(!isSuccess) ?<div className="LoginMessage">{message}</div> : <Redirect to='/admin/'/>}
            </div>
            <div className="footer">
                    <MyFooter/>
            </div>
        </div>
     );
}
 
export default Login;
