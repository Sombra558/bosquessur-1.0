import React, { Component } from 'react';
import toastr from "toastr";
import "toastr/build/toastr.css";
export default class Region extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    pasador: true,
    region:{
      id:this.props.id,
      region:this.props.region,
    }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(ev){
    ev.preventDefault();
    let uri = `/Region/${this.state.region.id}`
    axios.delete(uri).then(
      res => {
        const pasador = false;
        const region  = res.data;
        this.setState({ region});
        this.setState({pasador});
        toastr.error('Zona Eliminada Correctamente', 'Mensaje')
        }
    );
  }
render()
{
  if(this.state.pasador===true){
    return (
        
      <tr className="odd gradeX">
      <td>{this.state.region.region}</td>
      
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
