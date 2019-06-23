import React from 'react'
const ProvinciaForm =(props) => (
    <div className="card">
    <div className="card-header"><h3 className="panel-title">Agregar Provincia</h3></div>   
    <div className="card-body">
    <form  onSubmit={props.onAddCategoria}>
        <div className="form-group">
        <input className="form-control" type="text" name="provincia" placeholder="provincia" required/>
        </div>
        <div className="form-group">
        <input className="form-control btn btn-primary" type="submit" value="Guardar"/>
        </div>
    </form>
    </div>
    </div>   
)
 
export default ProvinciaForm