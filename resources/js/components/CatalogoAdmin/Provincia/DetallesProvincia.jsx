import React, { Component } from 'react';
import axios from 'axios';
import ProvinciaList from './ProvinciaList';
export default class DetallesProvincia extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    provincias: [],
    }
}
componentDidMount(){
    axios.get(`/Provincia`)
      .then(
        res => {
        const provincias = res.data;
        this.setState({ provincias });
        }
      )
  }
    render() {
        return (
            <div>
                    <ProvinciaList provincias={this.state.provincias} />
            </div>  
        );
    }
}