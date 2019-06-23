import React from 'react';
import Comuna from './ComunaEli';
const ComunaList = (props) => (
    <div className="row">
    <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>Comunidad</th>
                                       	<th>Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  
                                   {
                                   props.comunas.map(comunas => (
                                    <Comuna
                                    key={comunas.id}
                                    id={comunas.id}
                                    comuna={comunas.comuna}
                                    />
                                ))
                                    }
						           
        							
                                </tbody>
    </table>
         
    </div>                 
)
export default ComunaList