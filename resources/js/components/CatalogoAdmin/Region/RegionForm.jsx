import React from 'react'

const RegionForm =(props) => (
    <div className="card">
    <div className="card-header"><h3 className="panel-title">Agregar Zona</h3></div>   
    <div className="card-body">
    <form  onSubmit={props.onAddRegion}>
        <div className="form-group">
        <input className="form-control" type="text" name="zona" placeholder="zona" required/>
        </div>
        <div className="form-group">
        <input className="form-control btn btn-primary" type="submit" value="Guardar"/>
        </div>
    </form>
    </div>
    </div>   
)
 
export default RegionForm