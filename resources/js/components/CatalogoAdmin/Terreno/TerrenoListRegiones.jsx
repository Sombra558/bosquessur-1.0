import React from 'react';
import TerrenoRegion from './TerrenoRegion';
const TerrenoList = (props) => (
    <div className="row">
    <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>Terreno</th>
                                        <th>Zona</th>
                                        <th>Provincia</th>
                                        <th>Comuna</th>
                                       	<th>Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  
                                   {
                                   props.terrenos.map(terrenos => (
                                    <TerrenoRegion
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
                                    estado={terrenos.estado}
                                    />
                                ))
                                    }
						           
        							
                                </tbody>
    </table>
         
    </div>                 
)
export default TerrenoList