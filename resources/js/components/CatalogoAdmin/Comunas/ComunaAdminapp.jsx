import React, { Component } from 'react';
import axios from 'axios'
import ComunaForm from './ComunaForm'
export default class ComunaApp extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    comunas: [],
    }
    this.handleOnAddComuna=this.handleOnAddComuna.bind(this)   
}  
            handleOnAddComuna(ivn){
                ivn.preventDefault()
                let form = ivn.target,
                 comuna = {
                    comuna: form.comuna.value,
                 }
                 axios.post(`/Comuna`, {
                    comuna: comuna.comuna,
                  })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
                 this.setState({
                    comunas: this.state.comunas.concat([comuna])
                    })
                 form.reset()
                }
              
       
    render() {
        return (
            <div>
                 <ComunaForm onAddComuna={this.handleOnAddComuna}/>
            </div>  
        );
    }
}