import React from 'react';
import Region from './RegionEli';
const RegionesList = (props) => (
    <div className="row">
    <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>Region</th>
                                       	<th>Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  
                                   {
                                   props.regiones.map(regiones => (
                                    <Region
                                    key={regiones.id}
                                    id={regiones.id}
                                    region={regiones.region}
                                    />
                                ))
                                    }
						           
        							
                                </tbody>
    </table>
         
    </div>                 
)
export default RegionesList