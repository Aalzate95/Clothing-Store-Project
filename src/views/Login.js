import React from 'react'

export default class Login extends React.Component{
    render(){
        return(
            <div className="Login">
                <div className="LoginCard">
                    <h1>Login</h1>
                    <input type="text" name="username" placeholder="Username" required></input>
                    <input type="password" name="password" placeholder="Password" required></input>
                    <input type="submit"></input>
                    <a name="RecuperarContraseña" href="..">Recuperar contraseña ?</a>
                </div>
            </div>
            )
    }
}