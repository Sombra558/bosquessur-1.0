import React from 'react';
import Provincia from './Provincia2';
const ProvinciaList = (props) => (
    <div className="row">
    <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>Provincia</th>
                                       	<th>Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  
                                   {
                                   props.provincias.map(provincias => (
                                    <Provincia
                                    key={provincias.id}
                                    id={provincias.id}
                                    provincia={provincias.provincia}
                                    />
                                ))
                                    }
						           
        							
                                </tbody>
    </table>
         
    </div>                 
)
export default ProvinciaList