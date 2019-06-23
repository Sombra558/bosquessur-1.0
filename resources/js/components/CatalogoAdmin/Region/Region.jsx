import React, { Component } from 'react';
export default class Region extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    region:{
  
        id:this.props.id,
        region:this.props.region,
     
    },
    }
    this.ActualizarRegion=this.ActualizarRegion.bind(this);
}

ActualizarRegion(e){
  e.preventDefault()
  let form = e.target,
   region = {
      id: this.state.region.id,
      region: form.region.value,
   }
   axios.put(`/Region/${this.state.region.id}`, {
      id: region.id,
      region: region.region,
    })
  .then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({region});
  })
   form.reset() 
}
render()
{
  
      return (
        <tr className="odd gradeX">
        
        <td>{this.state.region.region}</td>
        <td>
        <form onSubmit={this.ActualizarRegion}>
               <input type="text" name="region"/>
               <input type="submit" value="E" className="btn btn-warning"/>
        </form>
        </td>
        </tr> 
      );
        
}}
