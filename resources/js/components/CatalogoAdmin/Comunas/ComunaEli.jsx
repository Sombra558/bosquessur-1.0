import React, { Component } from 'react';
import toastr from "toastr";
import "toastr/build/toastr.css";
export default class Comuna extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    pasador: true,
    comuna:{
      id:this.props.id,
      comuna:this.props.comuna,
    }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(ev){
    ev.preventDefault();
    let uri = `/Comuna/${this.state.comuna.id}`
    axios.delete(uri).then(
      res => {
        const pasador = false;
        const comuna  = res.data;
        this.setState({ comuna});
        this.setState({pasador});
        toastr.error('Comuna Eliminada Correctamente', 'Mensaje')
        }
    );
  }
render()
{
  if(this.state.pasador===true){
    return (
        
      <tr className="odd gradeX">
      <td>{this.state.comuna.comuna}</td>
      
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
