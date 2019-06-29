import React from 'react';
import Casa from './TerrenoImg';
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
                                            imaprimera={casas.imaprimera}
                                            imasegunda={casas.imasegunda}
                                            imatercera={casas.imatercera}
                                            mapa={casas.mapa}
                                    />
                                ))
                                    }
						           
        							
                                </tbody>
    </table>
         
    </div>                 
)
export default CasaList