import React from 'react';
import SelectRegion from '../../ReactComponent/Select/SelectRegion';
import SelectProvincia from '../../ReactComponent/Select/SelectProvincia';
import SelectComuna from '../../ReactComponent/Select/SelectComuna';

const TerrenoForm =(props) => (
    <div>
    <div className="card">
    <div className="card-header"><h3 className="panel-title">Agregar Terreno</h3></div>   
    <div className="card-body">
    <form  onSubmit={props.onAddTerreno}>
    <div className="form-group">
    <input className="form-control" type="text" name="terreno" placeholder="Terreno" required/>
    </div>
    <div className="form-group">
    <textarea className="form-control" type="text" name="descripcion" placeholder="Descripcion" required/>
    </div>
    <div className="form-group">
    <input className="form-control" type="text" name="precio" placeholder="Precio" required/>
    </div>
    <div className="form-group">
    <input className="form-control" type="text" name="superficie" placeholder="Superficie" required/>
    </div>
    <div className="form-group">
    <input className="form-control" type="text" name="utm" placeholder="Utm" required/>
    </div>
    <div className="form-group">
    <input className="form-control" type="text" name="latitud" placeholder="Latitud" required/>
    </div>
    <div className="form-group">
    <input className="form-control" type="text" name="longitud" placeholder="Longitud" required/>
    </div>
    <div className="form-group">
    <select className="form-control" name="clasificacion" placeholder="Clasificación" required>
            <option >Seleccione una Clasificación</option>
            <option value="Sitios">Sitios</option>
            <option value="Parcelas">Parcelas</option>
            <option value="Plantaciones">Plantaciones</option>
            <option value="Industriales">Industriales</option>
            <option value="Campos">Campos</option>
            <option value="Lotes">Lotes</option>
            <option value="Fundos">Fundos</option>
    </select>
    </div>
    
    <div className="form-group">
    <SelectRegion/>
    </div>
    <div className="form-group">
    <SelectProvincia/>
    </div>
    <div className="form-group">
    <SelectComuna/>
    </div>
    <div className="form-group">
    <input className="form-control" type="text" name="imaprimera" placeholder="Imagen Principal" required/>
    </div>
    <div className="form-group">
    <input className="form-control" type="text" name="imasegunda" placeholder="Imagen Secundaria" required/>
    </div>
    <div className="form-group">
    <input className="form-control" type="text" name="imatercera" placeholder="Imagen Terciaria" required/>
    </div>
    <div className="form-group">
    <input className="form-control" type="text" name="mapa" placeholder="Mapa" required/>
    </div>
    <div className="form-group">
    <input className="form-control btn btn-primary" type="submit" value="Guardar"/>
    </div>
    </form>
    </div>
    </div>
    </div>
)
 
export default TerrenoForm