import React, { Component } from 'react';
import axios from 'axios';
import TerrenoSearch from './TerrenoSearch';
import TerrenoList from './TerrenoList';


export default class TerrenoApi extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    terrenos: [],
      filter: {
        name: '',
        terrenos: [],
        search: ''
      }
    }
    this.handleOnSearch = this.handleOnSearch.bind(this)
    this.handleOnFilter = this.handleOnFilter.bind(this)
}
componentDidMount() {
    axios.get(`/Fundos/Listado`)
      .then(
        res => {
        const terrenos = res.data;
        this.setState({ terrenos });
        }
      )
  }
  handleOnSearch(e) {
    let newFilter = Object.assign( {}, this.state.filter, { [e.target.name]: [e.target.value] } )

    this.setState({
      filter: newFilter
    })

    //console.log(newFilter)
  }

  handleOnFilter(filter, data) {
    let regex = new RegExp(filter.search, 'i')
    return data.filter(q => ( regex.test(q.name) || regex.test(q.terreno) || regex.test(q.provincia) || regex.test(q.comuna) ))
  } 
  
    render() {
        return (
            <div>
             
            <div className="justify-content-center">
              <TerrenoSearch  onSearch={this.handleOnSearch}/>
            </div>                    
                    <TerrenoList  terrenos={this.handleOnFilter(this.state.filter, this.state.terrenos)} />             
            </div>     
      
        );
    }
}
