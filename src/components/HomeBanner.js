import React from 'react'
import './styles/Banner.css'
export default class HomeBanner extends React.Component{
    render(){
        const {url, titulo, subtitulo} = this.props
        return(
            <div className = "Banner" style={{'backgroundImage':`url( ${url})`}}>
                <h3>{titulo}</h3>
                <p>{subtitulo}</p>
            </div>
            )
    }
}