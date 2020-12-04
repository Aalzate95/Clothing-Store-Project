import React from 'react'
import './styles/Developer.css'

export default class Developer extends React.Component{
          
    render(){
        const {nombre,origen,detalle,skills,redes,url,img} = this.props;
        return(
            <div className="Developer">
                <div className="card-container">
                    <img className="round" src={img} alt="user" />
                    <h3>{nombre}</h3>
                    <h6>{origen}</h6>
                    <p>{detalle}</p>
                    
                    <div className="Developer-Buttons">
                        {
                            Object.keys(redes).map((red)=>{
                                return(
                                <a className="primary ghost" key={red}href={url}>
                                    {red}
                                </a> 
                                )
                            })
                        }
                    </div>
                    <div className="skills">
                        <h6>Skills</h6>
                        <ul>
                        {
                            Object.keys(skills).map((i)=>{
                                return(
                                <li key={i}>{"> "+skills[i]}</li> 
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
            </div>
               
        )
    }
}
 /* <div className="Dev">
                    <div className="Dev-img">
                        <img alt={img} src={img}/>
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
                </div>    */