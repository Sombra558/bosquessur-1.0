import React, { Component } from 'react';
import axios from 'axios'
import TerrenoForm from './TerrenoForm';
import toastr from "toastr";
import "toastr/build/toastr.css";
export default class TerrenoAdminApp extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    terrenos: [],
    };
    this.handleOnAddTerreno=this.handleOnAddTerreno.bind(this);
}
    handleOnAddTerreno(on){
        on.preventDefault()
        let form = on.target,
         terreno = {
             terreno: form.terreno.value,
             descripcion: form.descripcion.value,
             precio: form.precio.value,
             superficie: form.superficie.value,
             utm: form.utm.value,
             latitud: form.latitud.value,
             longitud: form.longitud.value,
             clasificacion: form.clasificacion.value,
             zona: form.zona.value,
             provincia: form.provincia.value,
             comuna: form.comuna.value,
             imaprimera: form.imaprimera.value,
             imasegunda: form.imasegunda.value,
             imatercera: form.imatercera.value,
             mapa: form.mapa.value,
         }
         axios.post(`/Terreno`, {
            terreno: terreno.terreno,
            descripcion: terreno.descripcion,
            precio: terreno.precio,
            superficie: terreno.superficie,
            utm: terreno.utm,
            latitud: terreno.latitud,
            longitud: terreno.longitud,
            clasificacion: terreno.clasificacion,
            zona: terreno.zona,
            provincia: terreno.provincia,
            comuna: terreno.comuna,
            imaprimera:terreno.imaprimera,
            imasegunda:terreno.imasegunda,
            imatercera:terreno.imatercera,
            mapa:terreno.mapa,
          })
        .then(res => {
            console.log(res);
            console.log(res.data);
            toastr.success('Terreno creado de manera satisfactoria', 'Mensaje:')
        })
         this.setState({
            terrenos: this.state.terrenos.concat([terreno])
            })
         form.reset()
        }
    render() {
     
            return(
                <div>
                    <TerrenoForm onAddTerreno={this.handleOnAddTerreno}/>
                </div>
            );
        }
}
