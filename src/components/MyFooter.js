import React from 'react'



const data = {
    '1':{'title':'Recursos','descripcion':['home','shop','clothing']},
    '2':{'title':'Compañia','descripcion':['home','shop','clothing']},
    '3':{'title':'Detalles de Contacto','descripcion':['home','shop','clothing']},
    '4':{'title':'Registrese para recibir ofertas','descripcion':['home','shop','clothing']}
}
export default class MyFooter extends React.Component{
    RenderComponent = (e,index) => {
        return(
            <div className="" key={index}>
                <div className = "FooterTarget">
                    <h6>{data[e]['title']}</h6>
                    {data[e]['descripcion'].map((e,index) =>{
                        return(
                        <p key={index}>
                            {e}
                        </p>
                        )
                    })}
                    
                </div>
            </div>
        )
    }
    CreateComponent =(data)=>{
        return(
        Object.keys(data).map((e,index)=>{
            return(
                this.RenderComponent(e,index)
                )
        })
        )
    }
    
    render(){
        return(
            <div className="container-flex" id="MyFooter">
                <div className="row">
                    {this.CreateComponent(data)}
                </div>
            </div>
        )
    }
    
        
}