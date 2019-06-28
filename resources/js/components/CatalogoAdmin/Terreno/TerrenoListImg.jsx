import React from 'react';
import Terreno from './TerrenoImg';
const TerrenoList = (props) => (
    <div className="row">
    <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>Terreno</th>
                                        <th>Imagen Principal</th>
                                        <th>Imagen Secundaria</th>
                                       	<th>Imagen Tercearia</th>
                                   
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
                                    imaprimera={terrenos.imaprimera}
                                    imasegunda={terrenos.imasegunda}
                                    imatercera={terrenos.imatercera}
                                    mapa={terrenos.mapa}
                                    estado={terrenos.estado}
                                    />
                                ))
                                    }
						           
        							
                                </tbody>
    </table>
         
    </div>                 
)
export default TerrenoList