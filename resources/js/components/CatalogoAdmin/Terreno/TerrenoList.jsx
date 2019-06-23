import React from 'react';
import Terreno from './Terreno';
const TerrenoList = (props) => (
    <div className="row">
    <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>Terreno</th>
                                        <th>Descripcion</th>
                                        <th>Precio</th>
                                       	<th>Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  
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
                                    clasificacion={terrenos.clasificacion}
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