import React, { Component } from 'react';
import toastr from "toastr";
import "toastr/build/toastr.css";
export default class Provincia extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    pasador: true,
    provincia:{
      id:this.props.id,
      provincia:this.props.provincia,
    }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(ev){
    ev.preventDefault();
    let uri = `/Provincia/${this.state.provincia.id}`
    axios.delete(uri).then(
      res => {
        const pasador = false;
        const provincia  = res.data;
        this.setState({ provincia});
        this.setState({pasador});
        toastr.error('Provincia Eliminada Correctamente', 'Mensaje')
        }
    );
  }
render()
{
  if(this.state.pasador===true){
    return (
        
      <tr className="odd gradeX">
      <td>{this.state.provincia.provincia}</td>
      
      <td>
      <form onSubmit={this.handleSubmit}>
            <input type="submit" value="X" className="btn btn-danger"/>
      </form>
      </td>
      </tr> 
    );
  }else{
    return(
      <tr>

      </tr>
    );
  }      
}}
