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
        clasificacion:this.props.clasificacion,
        region:this.props.region,
        provincia:this.props.provincia,
        comuna:this.props.comuna,
        estado:this.props.estado,
    },
    }
    this.ActualizarTerreno=this.ActualizarTerreno.bind(this);
    this.EliminarTerreno=this.EliminarTerreno.bind(this);
    this.TerrenoVendido=this.TerrenoVendido.bind(this);
}

ActualizarTerreno(e){
  e.preventDefault()
  let form = e.target,
   terreno = {
      id: this.state.terreno.id,
      terreno: form.terreno.value,
      descripcion: form.descripcion.value,
      precio: form.precio.value,
      superficie: form.superficie.value,
      utm: form.utm.value,
      latitud: form.latitud.value,
      longitud: form.longitud.value,
      clasificacion: form.clasificacion.value,
   }
   axios.put(`/Terreno/${this.state.terreno.id}`, {
      id: terreno.id,
      terreno: terreno.terreno,
      descripcion: terreno.descripcion,
      precio: terreno.precio,
      superficie: terreno.superficie,
      utm: terreno.utm,
      latitud: terreno.latitud,
      longitud: terreno.longitud,
      clasificacion: terreno.clasificacion,
    })
  .then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({terreno});
      toastr.warning('Terreno Actualizado correctamente')
  })
   form.reset() 
}
EliminarTerreno(ev){
        ev.preventDefault();
        let uri = `/Terreno/${this.state.terreno.id}`
        axios.delete(uri).then(
          res => {
            const pasador = false;
            const terreno  = res.data;
            this.setState({ terreno});
            this.setState({pasador});
            toastr.error('Terreno Eliminado Correctamente', 'Mensaje')
            }
        );
      }
TerrenoVendido(op){
  op.preventDefault()
  axios.put(`/ControlAdmin/TerrenoVendido/${this.state.terreno.id}`, {
 }).then(res => {
        console.log(res);
        console.log(res.data);
        toastr.success('Terreno Marcado Como Vendido', 'Mensaje')
    })
}
render()
{
        if(this.state.pasador===true){
                return (
        
                        <tr className="odd gradeX">
                        
                        <td>{this.state.terreno.terreno}</td>
                        <td>{this.state.terreno.descripcion}</td>
                        <td>{this.state.terreno.precio}</td>
                        <td className="row">
                                <div className="col-sm-12">
                                <button type="button"  className="btn btn-warning form-control" alt="Editar" data-toggle="modal" data-target={this.state.verificador}>       
                                        Editar
                                </button>
                                </div>
                        
                        <div className="col-sm-12">
                        <form onSubmit={this.EliminarTerreno}>
                                <input  type="submit" value="Eliminar" className="btn btn-danger form-control"/>   
                        </form>
                        </div>
                        
                        <div className="col-sm-12">
                        <form onSubmit={this.TerrenoVendido}>
                                <input  type="submit" value="Marcar Vendido" className="btn btn-success form-control"/>   
                        </form>
                        </div>
                       
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
                                                <input defaultValue={this.state.terreno.terreno} className="form-control" type="text" name="terreno" placeholder={this.state.terreno.terreno} />
                                        </div>
                                        <div className="form-group">
                                                <textarea defaultValue={this.state.terreno.descripcion} className="form-control" type="text" name="descripcion" placeholder={this.state.terreno.descripcion}/>
                                        </div>
                                        <div className="form-group">
                                                <input defaultValue={this.state.terreno.precio} className="form-control" type="text" name="precio" placeholder={this.state.terreno.precio}/>
                                        </div>
                                        <div className="form-group">
                                                <input defaultValue={this.state.terreno.superficie} className="form-control" type="text" name="superficie" placeholder={this.state.terreno.superficie}/>
                                        </div>
                                        <div className="form-group">
                                                <input defaultValue={this.state.terreno.utm} className="form-control" type="text" name="utm" placeholder={this.state.terreno.utm} />
                                        </div>
                                        <div className="form-group">
                                                <input defaultValue={this.state.terreno.latitud} className="form-control" type="text" name="latitud" placeholder={this.state.terreno.latitud} />
                                        </div>
                                        <div className="form-group">
                                                <input defaultValue={this.state.terreno.longitud} className="form-control" type="text" name="longitud" placeholder={this.state.terreno.longitud} />
                                        </div>
                                        <div className="form-group">
                                                <select className="form-control" name="clasificacion" placeholder="Clasificación" required>
                                                         <option >{this.state.terreno.clasificacion}</option>
                                                         <option value="Sitios">Sitios</option>
                                                         <option value="Parcelas">Parcelas</option>
                                                         <option value="Plantaciones">Plantaciones</option>
                                                         <option value="Industriales">Industriales</option>
                                                         <option value="Campos">Campos</option>
                                                </select>
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
