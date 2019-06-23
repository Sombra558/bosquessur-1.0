import React, { Component } from 'react';
import axios from 'axios'
import CasaForm from './CasaForm';
export default class TerrenoAdminApp extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    casas: [],
    };
    this.handleOnAddCasa=this.handleOnAddCasa.bind(this);
}
    handleOnAddCasa(on){
        on.preventDefault()
        let form = on.target,
         casa = {
             casa: form.casa.value,
             habitaciones: form.habitaciones.value,
             banos: form.banos.value,
             descripcion: form.descripcion.value,
             precio: form.precio.value,
             superficie: form.superficie.value,
             utm: form.utm.value,
             latitud: form.latitud.value,
             longitud: form.longitud.value,
             zona: form.zona.value,
             provincia: form.provincia.value,
             comuna: form.comuna.value,
             imaprimera: form.imaprimera.value,
             imasegunda: form.imasegunda.value,
             imatercera: form.imatercera.value,
             mapa: form.mapa.value,
         }
         axios.post(`/Casa`, {
            casa: casa.casa,
            habitaciones:casa.habitaciones,
            banos:casa.banos,
            descripcion: casa.descripcion,
            precio: casa.precio,
            superficie: casa.superficie,
            utm: casa.utm,
            latitud: casa.latitud,
            longitud: casa.longitud,
            zona: casa.zona,
            provincia: casa.provincia,
            comuna: casa.comuna,
            imaprimera:casa.imaprimera,
            imasegunda:casa.imasegunda,
            imatercera:casa.imatercera,
            mapa:casa.mapa,
          })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
         this.setState({
            casas: this.state.casas.concat([casa])
            })
         form.reset()
        }
    render() {
     
            return(
                <div>
                    <CasaForm onAddCasa={this.handleOnAddCasa}/>
                </div>
            );
        }
}
