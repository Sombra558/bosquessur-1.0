import React, { Component } from 'react';
export default class Casa extends Component {
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
        estado:this.props.estado,
    },
    }
    this.ActualizarCasa=this.ActualizarCasa.bind(this);
    this.EliminarCasa=this.EliminarCasa.bind(this);
    this.CasaVendido=this.CasaVendido.bind(this);
}

ActualizarCasa(e){
  e.preventDefault()
  let form = e.target,
   casa = {
      id: this.state.casa.id,
      casa: form.casa.value,
      habitaciones: form.habitaciones.value,
      banos: form.banos.value,
      descripcion: form.descripcion.value,
      precio: form.precio.value,
      superficie: form.superficie.value,
      utm: form.utm.value,
      latitud: form.latitud.value,
      longitud: form.longitud.value,
   }
   axios.put(`/Casa/${this.state.casa.id}`, {
      id: casa.id,
      casa: casa.casa,
      habitaciones: casa.habitaciones,
      banos: casa.banos,
      descripcion: casa.descripcion,
      precio: casa.precio,
      superficie: casa.superficie,
      utm: casa.utm,
      latitud: casa.latitud,
      longitud: casa.longitud,
    })
  .then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({casa});
  })
   form.reset() 
}
EliminarCasa(ev){
        ev.preventDefault();
        let uri = `/Casa/${this.state.casa.id}`
        axios.delete(uri).then(
          res => {
            const pasador = false;
            const casa  = res.data;
            this.setState({ casa});
            this.setState({pasador});
            }
        );
      }
CasaVendido(op){
  op.preventDefault()
  axios.put(`/ControlAdmin/CasaVendido/${this.state.casa.id}`, {
 }).then(res => {
        console.log(res);
        console.log(res.data);
    })
}
render()
{
        if(this.state.pasador===true){
                return (
        
                        <tr className="odd gradeX">
                        
                        <td>{this.state.casa.casa}</td>
                        <td>{this.state.casa.descripcion}</td>
                        <td>{this.state.casa.precio}</td>
                        <td className="row">
                                <div className="col-sm-12">
                                        <button type="button" className="btn btn-warning form-control" alt="Editar" data-toggle="modal" data-target={this.state.verificador}>       
                                                Editar
                                        </button>
                                </div>
                        
                        <div className="col-sm-12">
                        <form onSubmit={this.EliminarCasa}>
                                <input  type="submit" value="Eliminar" className="btn btn-danger form-control"/>   
                        </form>
                        </div>
                        
                        <div className="col-sm-12">
                        <form onSubmit={this.CasaVendido}>
                                <input  type="submit" value="Marcar como Vendida" className="btn btn-success form-control"/>   
                        </form>
                        </div>
                        </td>
                        <td className="modal fade" id={this.state.modalo} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        
                        <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edicion de Casa</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                                <form  onSubmit={this.ActualizarCasa}>
                                        <div className="form-group">
                                                <input defaultValue={this.state.casa.casa} className="form-control" type="text" name="casa" placeholder={this.state.casa.casa} />
                                        </div>
                                        <div className="form-group">
                                                <input defaultValue={this.state.casa.habitaciones} className="form-control" type="number" name="habitaciones" placeholder={this.state.casa.habitaciones}/>
                                        </div>
                                        <div className="form-group">
                                                <input defaultValue={this.state.casa.banos} className="form-control" type="number" name="banos" placeholder={this.state.casa.banos}/>
                                        </div>
                                        <div className="form-group">
                                                <textarea defaultValue={this.state.casa.descripcion} className="form-control" type="text" name="descripcion" placeholder={this.state.casa.descripcion}/>
                                        </div>
                                        <div className="form-group">
                                                <input defaultValue={this.state.casa.precio} className="form-control" type="text" name="precio" placeholder={this.state.casa.precio}/>
                                        </div>
                                        <div className="form-group">
                                                <input defaultValue={this.state.casa.superficie} className="form-control" type="text" name="superficie" placeholder={this.state.casa.superficie}/>
                                        </div>
                                        <div className="form-group">
                                                <input defaultValue={this.state.casa.utm} className="form-control" type="text" name="utm" placeholder={this.state.casa.utm} />
                                        </div>
                                        <div className="form-group">
                                                <input defaultValue={this.state.casa.latitud} className="form-control" type="text" name="latitud" placeholder={this.state.casa.latitud} />
                                        </div>
                                        <div className="form-group">
                                                <input defaultValue={this.state.casa.longitud} className="form-control" type="text" name="longitud" placeholder={this.state.casa.longitud} />
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