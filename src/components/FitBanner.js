import React from 'react'
import './styles/FitBanner.css'
export default class HomeBanner extends React.Component{
    render(){
        const {url} = this.props
        return(
            <div className = "FitBanner" style={{'backgroundImage':`url( ${url})`}}/>
                )
    }
}
        