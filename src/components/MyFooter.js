import React from 'react'
import data from '../data/footer.json'

export default class MyFooter extends React.Component{
    renderList = (value) => {
       
    }
    render(){
        return(
            <div className="Footer"> 
                <div className="MyFooter"> 
                    {
                        Object.keys(data).map((indice)=>{
                            return(
                            <div className="CardFooter" key ={indice}>
                                <h5>{data[indice].title}</h5>
                                <ul>
                                    {data[indice].descripcion.map((element,index) => {
                                        return <li key={index}>{element}</li> 
                                    })}
                                </ul>
                                
                            </div>
                            )
                        })
                    }
                </div>
                <div className="RegistroOfertas">
                    <h5>Registro para ofertas</h5>
                    <div>
                        <input type="email" placeholder="ejemplo@ssport.com"></input>
                        <input className= "btnSuscribirse" type="submit" value="Suscribirse"></input>
                    </div>
                    <p>¡Entérate de nuestras promociones aquí!</p>
                </div>
            </div>
        )
    }

}