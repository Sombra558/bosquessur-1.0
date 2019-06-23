import React, { Component } from 'react';
import toastr from "toastr";
import "toastr/build/toastr.css";
export default class Provincia extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    provincia:{
  
        id:this.props.id,
        provincia:this.props.provincia,
     
    },
    }
    this.ActualizarProvincia=this.ActualizarProvincia.bind(this);
}

ActualizarProvincia(e){
  e.preventDefault()
  let form = e.target,
   provincia = {
      id: this.state.idprueba,
      provincia: form.provincia.value,
   }
   axios.put(`/Provincia/${this.state.provincia.id}`, {
      id: provincia.id,
      provincia: provincia.provincia,
    })
  .then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({provincia});
      toastr.warning('Provincia Actualizada Correctamente')
  })
   form.reset() 
}
render()
{
  
      return (
        <tr className="odd gradeX">
        
        <td>{this.state.provincia.provincia}</td>
        <td>
        <form onSubmit={this.ActualizarProvincia}>
               <input type="text" name="provincia"/>
               <input type="submit" value="E" className="btn btn-warning"/>
        </form>
        </td>
        </tr> 
      );
        
}}
