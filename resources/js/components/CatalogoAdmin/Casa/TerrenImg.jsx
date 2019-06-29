import React, { Component } from 'react';
import axios from 'axios';
import TerrenoList from './TerrenoListImg';
export default class DetallesTerreno extends Component {
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
                    <TerrenoList casas={this.state.casas} />
            </div>  
        );
    }
}