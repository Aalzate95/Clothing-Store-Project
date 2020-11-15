import React from 'react'

export default class Banner extends React.Component{
    constructor(props){
        super(props);
        this.state={
            listImages : []
        }
    }
    importImages =(r)=> {
        return r.keys().map(r);
    }

    componentDidMount =()=> {
        let images = this.importImages(require.context('../images/banner', true, /\.jpg$/));
        this.setState({listImages:images})
    }

   

    render(){   
        
        return(
                <div className="" id="Banner">
                    
                </div>      
        )
    }
}