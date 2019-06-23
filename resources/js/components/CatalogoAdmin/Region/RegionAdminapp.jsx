import React, { Component } from 'react';
import axios from 'axios';
import RegionForm from './RegionForm';
import toastr from "toastr";
import "toastr/build/toastr.css";
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
                    toastr.success('Zona creada de manera satisfactoria', 'Mensaje:')
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