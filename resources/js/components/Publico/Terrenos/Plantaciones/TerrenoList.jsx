import React from 'react';
import Terreno from './Terreno';
const TerrenoList = (props) => (
    <div className="row" >
    <br/>
            <div className="col-md-12"> 
            
            <div className="row text-center wow fadeInDown" >
                    {   
                        props.terrenos.map(terrenos => (
                            <Terreno
                            key={terrenos.id} 
                            id={terrenos.id}
                            terreno={terrenos.terreno} 
                            descripcion={terrenos.descripcion}
                            precio={terrenos.precio} 
                            superficie={terrenos.superficie}
                            utm={terrenos.utm} 
                            latitud={terrenos.latitud}
                            longitud={terrenos.longitud}
                            zona={terrenos.zona} 
                            provincia={terrenos.provincia}
                            comuna={terrenos.comuna}
                            imaprimera={terrenos.imaprimera}
                            imasegunda={terrenos.imasegunda}
                            imatercera={terrenos.imatercera}
                            mapa={terrenos.mapa}
                         
                            />
                        ))
                    }
                </div>
            </div>
            </div>              
)
export default TerrenoList