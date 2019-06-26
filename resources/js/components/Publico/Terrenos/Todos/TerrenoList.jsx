import React from 'react';
import Terreno from './Terreno';
import Casa from './Casa';
const TerrenoList = (props) => (
    <div className="row" >
    <br/>
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
                <br/>
            </div>
                   
                    <br/>
                    <div className="col-md-12"> 
            
            <div className="row text-center wow fadeInDown" >
                    {   
                        props.casas.map(casas => (
                            <Casa
                            key={casas.id}
                            id={casas.id}
                            casa={casas.casa}
                            habitaciones={casas.habitaciones}
                            banos={casas.banos}
                            descripcion={casas.descripcion}
                            precio={casas.precio}
                            superficie={casas.superficie}
                            utm={casas.utm}
                            latitud={casas.latitud}
                            longitud={casas.longitud}
                            zona={casas.zona}
                            provincia={casas.provincia}
                            comuna={casas.comuna}
                            estado={casas.estado}
                            imaprimera={casas.imaprimera}
                            imasegunda={casas.imasegunda}
                            imatercera={casas.imatercera}
                            mapa={casas.mapa}
                         
                            />
                        ))
                    }
                </div>
            </div>
            </div>              
)
export default TerrenoList