import React from 'react'

const TerrenoSearch = props => (
 <div className="col-md-12">
  <br/>
  <form>
    <div className="form-group">
        <input className="form-control text-center" id="inlineFormInputGroup" type="search"  name="search" onChange={props.onSearch} placeholder="Busqueda De Terrenos" />
    </div>
  </form>
  <br/>
  </div>
 
 

)

export default TerrenoSearch