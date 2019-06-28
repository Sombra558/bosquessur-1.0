import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
	Route,
	BrowserRouter as Router,
	Link,
	Switch
} from 'react-router-dom';
import TodosApi from './Publico/Terrenos/Todos/TerrenosApi';
import SitiosApi from './Publico/Terrenos/Sitios/TerrenosApi';
import CasasApi from './Publico/Terrenos/Casas/CasaApi';
import ParcelasApi from './Publico/Terrenos/Parcelas/TerrenosApi';
import CamposApi from './Publico/Terrenos/Campos/TerrenosApi';
import PlantacionesApi from './Publico/Terrenos/Plantaciones/TerrenosApi';
import IndustrialesApi from './Publico/Terrenos/Industriales/TerrenosApi';
import LotesApi from './Publico/Terrenos/Lotes/TerrenosApi';
import FundosApi from './Publico/Terrenos/Fundos/TerrenosApi';

export default class Public extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                <div className="section-header">
                  <h2 className="section-title text-center wow fadeInDown">DESTACADOS</h2>

                  <p className="text-center wow fadeInDown">Arriendo y Predios en Venta</p>
            </div>
                <div className="row">
                    <div className="col-md-12">
                            <div className="row text-center border">
                            <Link className="col-md-2 list-group-item" to="/">Todos</Link>
                            <Link className="col-md-2 list-group-item" to="/Sitios">Sitios</Link>
                            <Link className="col-md-2 list-group-item" to="/Casas">Casas</Link> 
                            <Link className="col-md-2 list-group-item" to="/Parcelas">Parcelas</Link>
                            <Link className="col-md-2 list-group-item" to="/Plantaciones">Plantaciones</Link>
                            <Link className="col-md-2 list-group-item" to="/Industriales">Industriales</Link>
                            <Link className="col-md-2 list-group-item" to="/Campos">Campos</Link>
                            <Link className="col-md-2 list-group-item" to="/Lotes">Lotes</Link>
                            <Link className="col-md-2 list-group-item" to="/Fundos">Fundos</Link>
                            </div>
                    </div>
                    <div className="col-md-12">
                    <Switch>
                    <Route path='/' exact component={TodosApi}></Route>
                           <Route path='/Sitios' exact component={SitiosApi}></Route>
                           <Route path='/Casas' exact component={CasasApi}></Route>
                           <Route path='/Parcelas' exact component={ParcelasApi}></Route>
                           <Route path='/Plantaciones' exact component={PlantacionesApi}></Route>
                           <Route path='/Industriales' exact component={IndustrialesApi}></Route>
                           <Route path='/Campos' exact component={CamposApi}></Route>
                           <Route path='/Lotes' exact component={LotesApi}></Route>
                           <Route path='/Fundos' exact component={FundosApi}></Route>
                    </Switch> 
                    </div>      
                 </div>
                 </div>
            </Router>
        );
    }
}
if (document.getElementById('root')) {
    ReactDOM.render(<Public />, document.getElementById('root'));
}