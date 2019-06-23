import React, { Component } from 'react';
import axios from 'axios';
import CasaList from './CasaListRegions';
export default class DetallesCasaRegiones extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    casas: [],
    }
}
componentDidMount(){
    axios.get(`/Casa`)
      .then(
        res => {
        const casas = res.data;
        this.setState({ casas });
        }
      )
  }
    render() {
        return (
            <div>
                    <CasaList casas={this.state.casas} />
            </div>  
        );
    }
}