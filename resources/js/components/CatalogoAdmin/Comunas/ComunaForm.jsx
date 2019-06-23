import React from 'react'

const ComunaForm =(props) => (
    <div className="card">
    <div className="card-header"><h3 className="panel-title">Agregar Comuna</h3></div>   
    <div className="card-body">
    <form  onSubmit={props.onAddComuna}>
        <div className="form-group">
        <input className="form-control" type="text" name="comuna" placeholder="Comuna" required/>
        </div>
        <div className="form-group">
        <input className="form-control btn btn-primary" type="submit" value="Guardar"/>
        </div>
    </form>
    </div>
    </div>   
)
 
export default ComunaForm