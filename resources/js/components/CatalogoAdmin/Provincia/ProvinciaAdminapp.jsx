import React, { Component } from 'react';
import axios from 'axios';
import toastr from "toastr";
import "toastr/build/toastr.css";
import ProvinciaForm from './ProvinciaForm'
export default class ProvinciaApp extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    provincias: [],
    }
    this.handleOnAddCategoria=this.handleOnAddCategoria.bind(this)
    
}  
            handleOnAddCategoria(ivn){
                ivn.preventDefault()
                let form = ivn.target,
                 provincia = {
                    provincia: form.provincia.value,
                 }
                 axios.post(`/Provincia`, {
                    provincia: provincia.provincia,
                  })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    toastr.success('Provincia creada de manera satisfactoria', 'Mensaje:')
                })
                 this.setState({
                    provincias: this.state.provincias.concat([provincia])
                    })
                 form.reset()
                }
              
       
    render() {
        return (
            <div>
                 <ProvinciaForm onAddCategoria={this.handleOnAddCategoria}/>
            </div>  
        );
    }
}