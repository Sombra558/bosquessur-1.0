import React, { Component } from 'react';
import SelectRegion from '../../ReactComponent/Select/SelectRegion';
import SelectProvincia from '../../ReactComponent/Select/SelectProvincia';
import SelectComuna from '../../ReactComponent/Select/SelectComuna';
export default class CasaRegions extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
        pasador: true,
        verificador: '#modal'+this.props.id,
        modalo: 'modal'+this.props.id,
    casa:{
        id:this.props.id,
        casa:this.props.casa,
        habitaciones:this.props.habitaciones,
        banos:this.props.banos,
        descripcion:this.props.descripcion,
        precio:this.props.precio,
        superficie:this.props.superficie,
        utm:this.props.utm,
        latitud:this.props.latitud,
        longitud:this.props.longitud,
        zona:this.props.zona,
        provincia:this.props.provincia,
        comuna:this.props.comuna,
    },
    }
    this.ActualizarCasa=this.ActualizarCasa.bind(this);
}

ActualizarCasa(e){
  e.preventDefault()
  let form = e.target,
   casa = {
        casa:this.props.casa, 
        zona: form.zona.value,
        provincia: form.provincia.value,
        comuna: form.comuna.value,
        }
   axios.put(`/ControlAdmin/CasaUpdateRegion/${this.state.casa.id}`, {
      casa:casa.casa,
      zona: casa.zona,
      provincia: casa.provincia,
      comuna: casa.comuna,
    })
  .then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({casa});
  })
   form.reset() 
}
render()
{
        if(this.state.pasador===true){
                return (
        
                        <tr className="odd gradeX">
                        
                        <td>{this.state.casa.casa}</td>
                        <td>{this.state.casa.zona}</td>
                        <td>{this.state.casa.provincia}</td>
                        <td>{this.state.casa.comuna}</td>
                        <td>
                        <button type="button" className="btn btn-warning" alt="Editar" data-toggle="modal" data-target={this.state.verificador}>       
                        </button>
                        </td>
                        <td className="modal fade" id={this.state.modalo} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edicion de Regiones de Casa</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                                <form  onSubmit={this.ActualizarCasa}>
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
