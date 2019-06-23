import React, { Component } from 'react';
import axios from 'axios'
import RegionForm from './RegionForm'
export default class RegionApp extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    regiones: [],
    }
    this.handleOnAddRegion=this.handleOnAddRegion.bind(this)
    
}  
            handleOnAddRegion(ivn){
                ivn.preventDefault()
                let form = ivn.target,
                 region = {
                    region: form.zona.value,
                 }
                 axios.post(`/Region`, {
                    region: region.region,
                  })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
                 this.setState({
                    regiones: this.state.regiones.concat([region])
                    })
                 form.reset()
                }
              
       
    render() {
        return (
            <div>
                 <RegionForm onAddRegion={this.handleOnAddRegion}/>
            </div>  
        );
    }
}