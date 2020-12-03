import React from 'react'
import './styles/Developer.css'

export default class Developer extends React.Component{
          
    render(){
        const {nombre,edad,origen,detalle,skills,url,img} = this.props;
        return(
                <div className="Dev">
                    <div className="Dev-img">
                        <img src={img}/>
                    </div>
                    <div className="Dev-data">
                        <h3>{nombre}</h3>
                        <div>
                            <p><em>{origen}</em></p>
                            <p><em>{edad+" años"}</em></p>
                        </div>
                        <p>{detalle}</p>
                        <ul>
                        {
                            Object.keys(skills).map((i)=>{
                                return(
                                <li key={i}>{"> "+skills[i]}</li> 
                                )
                            })
                        }

                        </ul>
                        
                        <p>Portfolio : <a href={url}>{url}</a></p>
                        
                    </div>
                </div>   
            )
    }
}
