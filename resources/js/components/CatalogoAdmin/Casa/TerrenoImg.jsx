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
    casa:{
        id:this.props.id,
        casa:this.props.casa,
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
  casa = {
        id: this.state.casa.id,
        casa:this.props.casa, 
        imaprimera: form.imaprimera.value,
        imasegunda: form.imasegunda.value,
        imatercera: form.imatercera.value,
        mapa: form.mapa.value,
        }
   axios.put(`/ControlAdmin/CasaUpdateImg/${this.state.casa.id}`, {
      id: casa.id,
      casa:casa.casa,
      imaprimera:casa.imaprimera,
      imasegunda:casa.imasegunda,
      imatercera:casa.imatercera,
      mapa:casa.mapa,
    })
  .then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({casa});
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
                        {this.state.casa.casa}</td>
                        <td><img src={this.state.casa.imaprimera} height="80px" width="80px"/></td>
                        <td><img src={this.state.casa.imasegunda} height="80px" width="80px"/></td>
                        <td><img src={this.state.casa.imatercera} height="80px" width="80px"/></td>
                        <td>
                        <button type="button" className="btn btn-warning" alt="Editar" data-toggle="modal" data-target={this.state.verificador}>       
                        </button>
                        </td>
                        <td className="modal fade" id={this.state.modalo} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edicion de Imagenes</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                                <form  onSubmit={this.ActualizarTerreno}>
                                    
                                <div className="form-group">
                                    <input defaultValue={this.state.casa.imaprimera} className="form-control" type="text" name="imaprimera" placeholder={this.state.casa.imaprimera}/>
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.state.casa.imasegunda} className="form-control" type="text" name="imasegunda"  placeholder={this.state.casa.imasegunda}/>
                                </div>
                                 <div className="form-group">
                                    <input defaultValue={this.state.casa.imatercera} className="form-control" type="text" name="imatercera"  placeholder={this.state.casa.imatercera}/>
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.state.casa.mapa} className="form-control" type="text" name="mapa" placeholder={this.state.casa.mapa}/>
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
