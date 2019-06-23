import React, { Component } from 'react';
import axios from 'axios';
import RegionList from './RegionList';
export default class DetallesRegion extends Component {
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
                    <RegionList regiones={this.state.regiones} />
            </div>  
        );
    }
}