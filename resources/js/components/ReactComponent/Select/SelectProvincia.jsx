import React, { Component } from 'react';
import Select from 'react-select';

  class SelectProvincia extends Component {
    constructor(...props)  {
        super(...props)
    
        this.state = {
          options: this.props.options,
          values:[],
          selectedOption: [],
        }
    
        this.handleChange = this.handleChange.bind(this)
      }
    componentDidMount(){
        axios.get(`/Provincia`)
      .then(
        res => {
        const values = res.data;
        this.setState({ values });
        }
      )
    }
      handleChange (selectedOption) {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }
    
      render() {
        const { selectedOption } = this.state;
 
    return (
      <Select
        name="provincia"
        placeholder="Seleccione Provincia"
        value={selectedOption}
        tipo={this.props.tipo}
        onChange={this.handleChange}
        options={this.state.values.map(values => ({
          label: values.provincia, value: values.provincia 
        }   
        ))}
       
      />
    );
      }
    }
  

  export default SelectProvincia