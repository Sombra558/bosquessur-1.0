import React, { Component } from 'react';
import SelectRegion from '../../ReactComponent/Select/SelectRegion';
import SelectProvincia from '../../ReactComponent/Select/SelectProvincia';
import SelectComuna from '../../ReactComponent/Select/SelectComuna';
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
    },
    }
    this.ActualizarTerreno=this.ActualizarTerreno.bind(this);
}

ActualizarTerreno(e){
  e.preventDefault()
  let form = e.target,
   terreno = {
        terreno:this.props.terreno, 
        zona: form.zona.value,
        provincia: form.provincia.value,
        comuna: form.comuna.value,
        }
   axios.put(`/ControlAdmin/TerrenoUpdateRegion/${this.state.terreno.id}`, {
      terreno:terreno.terreno,
      zona: terreno.zona,
      provincia: terreno.provincia,
      comuna: terreno.comuna,
    })
  .then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({terreno});
      toastr.warning('Ubicacion Actualizada correctamente')
  })
   form.reset() 
}
render()
{
        if(this.state.pasador===true){
                return (
        
                        <tr className="odd gradeX">
                        
                        <td>{this.state.terreno.terreno}</td>
                        <td>{this.state.terreno.zona}</td>
                        <td>{this.state.terreno.provincia}</td>
                        <td>{this.state.terreno.comuna}</td>
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
                                                <SelectRegion/>
                                        </div>
                                        <div className="form-group">
                                                <SelectProvincia/>
                                        </div>
                                        <div className="form-group">
                                                <SelectComuna/>
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
