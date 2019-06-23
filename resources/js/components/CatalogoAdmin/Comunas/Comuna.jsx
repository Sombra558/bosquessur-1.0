import React, { Component } from 'react';
import toastr from "toastr";
import "toastr/build/toastr.css";
export default class Comuna extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    comuna:{
  
        id:this.props.id,
        comuna:this.props.comuna,
     
    },
    }
    this.ActualizarComuna=this.ActualizarComuna.bind(this);
}

ActualizarComuna(e){
  e.preventDefault()
  let form = e.target,
   comuna = {
      id: this.state.comuna.id,
      comuna: form.comuna.value,
   }
   axios.put(`/Comuna/${this.state.comuna.id}`, {
      id: comuna.id,
      comuna: comuna.comuna,
    })
  .then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({comuna});
      toastr.warning('Comuna Actualizada correctamente')
  })
   form.reset() 
}
render()
{
  
      return (
        <tr className="odd gradeX">
        
        <td>{this.state.comuna.comuna}</td>
        <td>
        <form onSubmit={this.ActualizarComuna}>
               <input type="text" name="comuna"/>
               <input type="submit" value="E" className="btn btn-warning"/>
        </form>
        </td>
        </tr> 
      );
        
}}
