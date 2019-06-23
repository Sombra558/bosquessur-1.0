import React from 'react';
import Casa from './Casa';
const CasaList = (props) => (
    <div className="row">
    <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>Casa</th>
                                        <th>Descripcion</th>
                                        <th>Precio</th>
                                       	<th>Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  
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
                                    />
                                ))
                                    }
						           
        							
                                </tbody>
    </table>
         
    </div>                 
)
export default CasaList