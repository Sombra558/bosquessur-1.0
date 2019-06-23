import React, { Component } from 'react';
import axios from 'axios';
import TerrenoList from './TerrenoListRegiones';
export default class DetallesTerreno extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    terrenos: [],
    }
}
componentDidMount(){
    axios.get(`/Terreno`)
      .then(
        res => {
        const terrenos = res.data;
        this.setState({ terrenos });
        }
      )
  }
    render() {
        return (
            <div>
                    <TerrenoList terrenos={this.state.terrenos} />
            </div>  
        );
    }
}