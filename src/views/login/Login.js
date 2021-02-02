import React,{useState} from 'react'
import './Login.css'

const Login = () => {
    const [usuario,setUsuario] = useState('')
    const [contraseña,setContraseña] = useState('')

    const ingresarUsuario = (e) =>{
        setUsuario(e.target.value)
    }

    const ingresarContraseña = (e) =>{
        setContraseña(e.target.value)
    }

    const handleSubmit= (event) => {
        alert('usuario:'+ usuario+' Contraseña: ' + contraseña);
        const validador = true;
        if (validador === true){
        }
      }

    return ( 
        <div className="Login">
            <div className="LoginCard">
                <h1>Login</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" name="username" placeholder="Username" required onChange={(e)=>ingresarUsuario(e)}></input>
                    <input type="password" name="password" placeholder="Password" required onChange={(e)=>ingresarContraseña(e)}></input>
                    <input type="submit" />
                </form>
                <a name="RecuperarContraseña" href="..">Recuperar contraseña ?</a>
            </div>
        </div>
     );
}
 
export default Login;
