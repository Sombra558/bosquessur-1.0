import React, { Component } from 'react';
import axios from 'axios';
import ComunaList from './ComunaList';
export default class DetallesComuna extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    comunas: [],
    }
}
componentDidMount(){
    axios.get(`/Comuna`)
      .then(
        res => {
        const comunas = res.data;
        this.setState({ comunas });
        }
      )
  }
    render() {
        return (
            <div>
                    <ComunaList comunas={this.state.comunas} />
            </div>  
        );
    }
}