import React from 'react'
import Banner from '../components/Banner'

export default class Home extends React.Component{
    render(){
        return(
            
            <div className="container-flex">
                <Banner/>
                <h1>Home</h1>
            </div>
        )
    }
}