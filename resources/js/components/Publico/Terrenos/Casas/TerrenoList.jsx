import React from 'react';
import Terreno from './Terreno';
const TerrenoList = (props) => (
    <div className="row" >
    <br/>
            <div className="col-md-12"> 
            
            <div className="row text-center wow fadeInDown" >
                    {   
                        props.casas.map(casas => (
                            <Terreno
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