import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
	Route,
	BrowserRouter as Router,
	Link,
	Switch
} from 'react-router-dom';
import CatalogoAdminApi from './CatalogoAdmin/CatalogoAdminApi';
import ProvinciaApi from './CatalogoAdmin/Provincia/ProvinciaAdminapp';
import ProvinciaApiEditar from './CatalogoAdmin/Provincia/DetallesProvincia';
import ProvinciaApiEliminar from './CatalogoAdmin/Provincia/DetallesEliminar';
import RegionApi from './CatalogoAdmin/Region/RegionAdminapp';
import RegionApiEditar from './CatalogoAdmin/Region/DetallesRegion';
import RegionApiEliminar from './CatalogoAdmin/Region/ReEliminar';
import ComunaApi from './CatalogoAdmin/Comunas/ComunaAdminapp';
import ComunaApiEditar from './CatalogoAdmin/Comunas/DetallesComuna';
import ComunaApiEliminar from './CatalogoAdmin/Comunas/CoEliminar';
import TerrenoApi from './CatalogoAdmin/Terreno/TerrenoAdminApp';
import CasaApi from './CatalogoAdmin/Casa/CasaAdminApp';
import TerrenoEdit from './CatalogoAdmin/Terreno/TerrenoDetalles';
import TerrenoEditImg from './CatalogoAdmin/Terreno/TerrenImg';
import CasaEditImg from './CatalogoAdmin/Casa/TerrenImg';
import CasaEdit from './CatalogoAdmin/Casa/CasaDetalles';
import TerrenoEditRegiones from './CatalogoAdmin/Terreno/TerrenoDetallesRegion';
import CasaEditRegiones from './CatalogoAdmin/Casa/CasaRegionDetalles';
export default class Admin extends Component {
    render() {
        return (
            <Router>
                <div className="row mx-auto">
                
                    <div className="col-md-3 text-center  ">
                        <div className="list-group">

                                <a className="text-white list-group-item list-group-item-action disabled bg-dark">Menú</a>
                          
                                <Link to="/ControlAdmin" className="list-group-item list-group-item-action MenuStyle">Control General</Link>

                                <a className="text-white list-group-item list-group-item-action disabled bg-dark">Módulo de Propiedades</a>
                            
                                <Link to="/ControlAdmin/Terreno" className="list-group-item list-group-item-action MenuStyle">Agregar Terreno</Link>
                         
                         
                                <Link to="/ControlAdmin/Casa" className="list-group-item list-group-item-action MenuStyle">Agregar Casa</Link>
                         
                            
                                <Link to="/ControlAdmin/Terreno/Editar" className="list-group-item list-group-item-action MenuStyle">Editar Terreno</Link>

                                <Link to="/ControlAdmin/Casa/Editar" className="list-group-item list-group-item-action MenuStyle">Editar Casa</Link>

                                <Link to="/ControlAdmin/Terreno/EditarImg" className="list-group-item list-group-item-action MenuStyle">Editar Imagenes Terreno</Link>

                                <Link to="/ControlAdmin/Casa/EditarImg" className="list-group-item list-group-item-action MenuStyle">Editar Imagenes Casa</Link>

                                <Link to="/ControlAdmin/Terreno/EditarRegiones" className="list-group-item list-group-item-action MenuStyle">Editar Regiones de Terrenos</Link>

                                <Link to="/ControlAdmin/Casa/EditarRegiones" className="list-group-item list-group-item-action MenuStyle">Editar Regiones de Casas</Link>

                                <a className="text-white list-group-item list-group-item-action disabled bg-dark">Módulo de Zona</a>

                                <Link to="/ControlAdmin/Region" className="list-group-item list-group-item-action MenuStyle">Agregar Zona</Link>
                                                
                                <Link to="/ControlAdmin/Region/Editar" className="list-group-item list-group-item-action MenuStyle">Editar Zona</Link>
                        
                                <Link to="/ControlAdmin/Region/Eliminar" className="list-group-item list-group-item-action MenuStyle">Eliminar Zona</Link>

                                <a className="text-white list-group-item list-group-item-action disabled bg-dark">Módulo de Provincia</a>
                            
                                <Link to="/ControlAdmin/Provincia" className="list-group-item list-group-item-action MenuStyle">Agregar Provincia</Link>
                          
                           
                                <Link to="/ControlAdmin/Editar" className="list-group-item list-group-item-action MenuStyle">Editar Provincia</Link>
                      
                            
                                <Link to="/ControlAdmin/Eliminar" className="list-group-item list-group-item-action MenuStyle">Eliminar Provincia</Link>
                           
                                <a className="text-white list-group-item list-group-item-action disabled bg-dark">Módulo de Comuna</a>
                            
                                <Link to="/ControlAdmin/Comuna" className="list-group-item list-group-item-action MenuStyle">Agregar Comuna</Link>
                      
                         
                                <Link to="/ControlAdmin/Comuna/Editar" className="list-group-item list-group-item-action MenuStyle">Editar Comuna</Link>
                  
                           
                                <Link to="/ControlAdmin/Comuna/Eliminar" className="list-group-item list-group-item-action MenuStyle">Eliminar Comuna</Link>
                        </div>
                    </div>
                 <div className="col-md-9">
                    <div className="col-md-12">
                    <div className="card border-dark">
                <div className="card-header text-center TitleBarStyle">Sistema de Administracion de Contenido Bosque Sur </div>
                <div className="card-body">
                <div>
                <Switch>
                <Route path='/ControlAdmin' exact component={CatalogoAdminApi} />
                <Route path='/ControlAdmin/Terreno' exact component={TerrenoApi} />
                <Route path='/ControlAdmin/Casa' exact component={CasaApi} />
                <Route path='/ControlAdmin/Terreno/Editar' exact component={TerrenoEdit} /> 
                <Route path='/ControlAdmin/Casa/Editar' exact component={CasaEdit} />
                <Route path='/ControlAdmin/Terreno/EditarImg' exact component={TerrenoEditImg} /> 
                <Route path='/ControlAdmin/Casa/EditarImg' exact component={CasaEditImg} />  
                <Route path='/ControlAdmin/Terreno/EditarRegiones' exact component={TerrenoEditRegiones} />
                <Route path='/ControlAdmin/Casa/EditarRegiones' exact component={CasaEditRegiones} />   
                <Route path='/ControlAdmin/Region' exact component={RegionApi} /> 
                <Route path='/ControlAdmin/Region/Editar' exact component={RegionApiEditar} />
                <Route path='/ControlAdmin/Region/Eliminar' exact component={RegionApiEliminar} />    
                <Route path='/ControlAdmin/Provincia' exact component={ProvinciaApi} /> 
                <Route path='/ControlAdmin/Editar' exact component={ProvinciaApiEditar} />
                <Route path='/ControlAdmin/Eliminar' exact component={ProvinciaApiEliminar} />
                <Route path='/ControlAdmin/Comuna' exact component={ComunaApi} />
                <Route path='/ControlAdmin/Comuna/Editar' exact component={ComunaApiEditar} />  
                <Route path='/ControlAdmin/Comuna/Eliminar' exact component={ComunaApiEliminar} />  
                </Switch>
                 </div>
                 </div>
                 </div>
        </div>
        </div>
        </div>
        </Router>      
        );
    }
}

if (document.getElementById('general')) {
    ReactDOM.render(<Admin />, document.getElementById('general'));
}