import React, { Component } from 'react';
import toastr from "toastr";
import "toastr/build/toastr.css";
export default class Terreno extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
        pasador: true,
        verificador: '#modal'+this.props.id,
        modalo: 'modal'+this.props.id,
    terreno:{
        id:this.props.id,
        terreno:this.props.terreno,
        descripcion:this.props.descripcion,
        precio:this.props.precio,
        superficie:this.props.superficie,
        utm:this.props.utm,
        latitud:this.props.latitud,
        longitud:this.props.longitud,
        zona:this.props.zona,
        provincia:this.props.provincia,
        comuna:this.props.comuna,
        estado:this.props.estado,
        imaprimera:this.props.imaprimera,
        imasegunda:this.props.imasegunda,
        imatercera:this.props.imatercera,
        mapa:this.props.mapa,
    },
    }
    this.ActualizarTerreno=this.ActualizarTerreno.bind(this);
}

ActualizarTerreno(oje){
  oje.preventDefault()
  let form = oje.target,
   terreno = {
        id: this.state.terreno.id,
        terreno:this.props.terreno, 
        imaprimera: form.imaprimera.value,
        imasegunda: form.imasegunda.value,
        imatercera: form.imatercera.value,
        mapa: form.mapa.value,
        }
   axios.put(`/ControlAdmin/TerreninUpdateImg/${this.state.terreno.id}`, {
      id: terreno.id,
      terreno:terreno.terreno,
      imaprimera:terreno.imaprimera,
      imasegunda:terreno.imasegunda,
      imatercera:terreno.imatercera,
      mapa:terreno.mapa,
    })
  .then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({terreno});
      toastr.warning('Imagenes Actualizada correctamente')
  })
   form.reset() 
}
render()
{
        if(this.state.pasador===true){
                return (
        
                        <tr className="odd gradeX">
                        
                        <td>
                        {this.state.terreno.terreno}</td>
                        <td><img src={this.state.terreno.imaprimera} height="80px" width="80px"/></td>
                        <td><img src={this.state.terreno.imasegunda} height="80px" width="80px"/></td>
                        <td><img src={this.state.terreno.imatercera} height="80px" width="80px"/></td>
                        <td>
                        <button type="button" className="btn btn-warning" alt="Editar" data-toggle="modal" data-target={this.state.verificador}>       
                        </button>
                        </td>
                        <td className="modal fade" id={this.state.modalo} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edicion de Terreno</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                                <form  onSubmit={this.ActualizarTerreno}>
                                    
                                <div className="form-group">
                                    <input defaultValue={this.state.terreno.imaprimera} className="form-control" type="text" name="imaprimera" placeholder={this.state.terreno.imaprimera}/>
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.state.terreno.imasegunda} className="form-control" type="text" name="imasegunda"  placeholder={this.state.terreno.imasegunda}/>
                                </div>
                                 <div className="form-group">
                                    <input defaultValue={this.state.terreno.imatercera} className="form-control" type="text" name="imatercera"  placeholder={this.state.terreno.imatercera}/>
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.state.terreno.mapa} className="form-control" type="text" name="mapa" placeholder={this.state.terreno.mapa}/>
                                </div>
                                <div className="form-group">
                                    <input className="form-control btn btn-primary" type="submit" value="Guardar"/>
                                </div>
                            </form>
                                    </div>
                                    <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                    </div>
                                 
                                    </td> 
                        </tr>
                        
                
                    
                        
                        
                      );
        }
        else{
                return(
                  <tr>
            
                  </tr>
                );
        }     
}}
