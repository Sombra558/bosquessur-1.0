import React, { Component } from 'react';
import axios from 'axios';
import RegionesList from './ListEliminar';
export default class DetallesProvincia extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    regiones: [],
    }
}
componentDidMount(){
    axios.get(`/Region`)
      .then(
        res => {
        const regiones = res.data;
        this.setState({ regiones });
        }
      )
  }
    render() {
        return (
            <div>
                    <RegionesList regiones={this.state.regiones} />
            </div>  
        );
    }
}