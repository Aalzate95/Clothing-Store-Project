import React,{useState} from 'react'
import './Login.css'
import {Redirect } from 'react-router-dom';
import NavBar from '../../components/navBar/NavBar'
import MyFooter from '../../components/footer/MyFooter'


const usuarios = {
    "001":{"user":"admin","pass":"admin","isAdmin":true},
    "002":{"user":"alex","pass":"123","isAdmin":false}
}

const Login = ({usuario,contraseña,setUsuario,setContraseña,setId}) => {
    
    const [isSuccess,setSuccess] = useState(false)
    const [message,setMessage] = useState('')

    const ingresarUsuario = (e) =>{
        setUsuario(e.target.value)
    }

    const ingresarContraseña = (e) =>{
        setContraseña(e.target.value)
    }

// esto hay que cambiarlo solo por la respuesta del api
    const validarUsuario = (usuario, contraseña) =>{
        let resultado = false
        Object.keys(usuarios).forEach((id)=>{
            if (usuarios[id]["user"] === usuario){
                
                if (contraseña === usuarios[id]["pass"]){
                    resultado = true
                    setId(id)
                } 
            }
            
        })
        return resultado
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        if (validarUsuario(usuario, contraseña)){
            setSuccess(true)
        }
        else{
            setMessage("Datos Incorrectos, vuelva a intentarlo...")
        }
        // window.location.href = "http://localhost:3001/app/dashboard"
        /* return <Redirect to="/Dashboard" render={()=> <Login />} /> */
      }
      
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
                {!isSuccess ?<div className="LoginMessage">{message}</div> : <Redirect to='/Redireccion' />}
            </div>
            <div className="footer">
                    <MyFooter/>
            </div>
        </div>
     );
}
 
export default Login;
