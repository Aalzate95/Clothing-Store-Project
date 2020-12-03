import React from 'react'
import data from '../data/aboutUs.json'
import FitBanner from '../components/FitBanner'
export default class AboutUs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            general :data
        }
    }
    render(){
        const general = this.state.general;
        return(
            <div className="AboutUs">
                <FitBanner
                    url = "https://evolvecaledon.com/wp-content/uploads/2019/08/cropped-image-from-rawpixel-id-413980-jpeg.jpg"
                />
                <div className="AboutUs-body">
                   
                        <h3>¿Quiénes Somos?</h3>
                        <p>{general.resumen}</p>
                        <h3>¿Dónde Encontrarnos?</h3>
                        <p>{"Encuentrenos "+general.horarios}</p>
                        <p>{general.detalle}</p>
                        <div className="AboutUs-Map">
                            <iframe src={general.mapa}  title="Punto-Fiec" width="100%" height="500px" ></iframe>
                        </div>
                    
                </div>
            </div>
        )
    }
}