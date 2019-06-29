import React, { Component } from 'react';
import { 
	Route,
	BrowserRouter as Router,
	Link,
	Switch
} from 'react-router-dom';
import DetallesProvincia from './Provincia/DetallesProvincia';

export default class GeneralApp extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    provincias:[],
    contadorterrenos:0,
    contadorsitios:0,
    contadorparcelas:0,
    contadorplantaciones:0,
    contadorindustriales:0,
    contadorcampos:0,
    contadorlotes:0,
    contadorfundos:0,
    contadorcasas:0,
    contadordcasas:0,
    contadorvcasas:0,
    contadorvterrenos:0,
    contadordterrenos:0,
    contadorregiones: 0,
    contadorprovincias: 0,
    contadorcomunas: 0,
    }    
}    
componentDidMount() {
    axios.get(`/ControlAdmin/RegionContador`)
      .then(
        res => {
        const contadorregiones = res.data;
        this.setState({ contadorregiones });
        }
      ),
      axios.get(`/ControlAdmin/ProvinciasContador`)
      .then(
        res => {
        const contadorprovincias = res.data;
        this.setState({ contadorprovincias });
        }
      ),
      axios.get(`/ControlAdmin/ComunasContador`)
      .then(
        res => {
        const contadorcomunas = res.data;
        this.setState({ contadorcomunas });
        }
      ),
      axios.get(`/ControlAdmin/TerrenoContador`)
      .then(
        res => {
        const contadorterrenos = res.data;
        this.setState({ contadorterrenos });
        }
      ),
      axios.get(`/ControlAdmin/TerrenoSitios`)
      .then(
        res => {
        const contadorsitios = res.data;
        this.setState({ contadorsitios });
        }
      ),
      axios.get(`/ControlAdmin/TerrenoParcelas`)
      .then(
        res => {
        const contadorparcelas = res.data;
        this.setState({ contadorparcelas });
        }
      ),
      axios.get(`/ControlAdmin/TerrenoPlantaciones`)
      .then(
        res => {
        const contadorplantaciones = res.data;
        this.setState({ contadorplantaciones });
        }
      ),
      axios.get(`/ControlAdmin/TerrenoIndustriales`)
      .then(
        res => {
        const contadorindustriales = res.data;
        this.setState({ contadorindustriales });
        }
      ),
      axios.get(`/ControlAdmin/TerrenoCampos`)
      .then(
        res => {
        const contadorcampos = res.data;
        this.setState({ contadorcampos });
        }
      ),
      axios.get(`/ControlAdmin/TerrenoLotes`)
      .then(
        res => {
        const contadorlotes = res.data;
        this.setState({ contadorlotes });
        }
      ),
      axios.get(`/ControlAdmin/TerrenoFundos`)
      .then(
        res => {
        const contadorfundos = res.data;
        this.setState({ contadorfundos });
        }
      ),
      axios.get(`/ControlAdmin/TerrenoDContador`)
      .then(
        res => {
        const contadordterrenos = res.data;
        this.setState({ contadordterrenos });
        }
      ),
      axios.get(`/ControlAdmin/TerrenoVContador`)
      .then(
        res => {
        const contadorvterrenos = res.data;
        this.setState({ contadorvterrenos });
        }
      ),
      axios.get(`/ControlAdmin/CasaContador`)
      .then(
        res => {
        const contadorcasas = res.data;
        this.setState({ contadorcasas });
        }
      ),
      axios.get(`/ControlAdmin/CasaDContador`)
      .then(
        res => {
        const contadordcasas = res.data;
        this.setState({ contadordcasas });
        }
      ),
      axios.get(`/ControlAdmin/CasaVContador`)
      .then(
        res => {
        const contadorvcasas = res.data;
        this.setState({ contadorvcasas });
        }
      )
  }
    render() {
        return (
            <Router>
            <Switch>
            <Route path='/DetallesProvincia' exact component={DetallesProvincia} />
            </Switch>
            <div className="row">
                  <h1 className="col-sm-12">Sección de Terrenos</h1>
                <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card text-white bg-totales mb-3">
                <div className="card-header"><h3 className="card-title">Total de Propiedades</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadorterrenos}</h1></div>
                
                </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card text-white bg-sitios mb-3">
                <div className="card-header"><h3 className="card-title">Sitios</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadorsitios}</h1></div>
                
                </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card text-white bg-parcelas mb-3">
                <div className="card-header"><h3 className="card-title">Parcelas</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadorparcelas}</h1></div>
                
                </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card text-white bg-plataciones mb-3">
                <div className="card-header"><h3 className="card-title">Plantaciones</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadorplantaciones}</h1></div>
                
                </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card text-white bg-industriales mb-3">
                <div className="card-header"><h3 className="card-title">Industriales</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadorindustriales}</h1></div>
                
                </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card text-white bg-campos mb-3">
                <div className="card-header"><h3 className="card-title">Campos</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadorcampos}</h1></div>
                
                </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card text-white bg-lotes mb-3">
                <div className="card-header"><h3 className="card-title">Lotes</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadorlotes}</h1></div>
                
                </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card text-white bg-fundos mb-3">
                <div className="card-header"><h3 className="card-title">Fundos</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadorfundos}</h1></div>
                
                </div>
                </div>

                
                <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card text-white bg-disponibles mb-3">
                <div className="card-header"><h3 className="card-title">Terrenos Disponibles</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadordterrenos}</h1></div>
                
                </div>
                </div>
                
                <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card text-white bg-vendidos mb-3">
                <div className="card-header"><h3 className="panel-title">Terrenos Vendidos</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadorvterrenos}</h1></div>
                
                </div>
                </div> 
                <h1 className="col-sm-12">Sección de Casas</h1>
                <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card text-white bg-casas mb-3">
                <div className="card-header"><h3 className="card-title">Casas</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadorcasas}</h1></div>
                
                </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card text-white bg-dcasas mb-3">
                <div className="card-header"><h3 className="card-title">Casas Disponibles</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadordcasas}</h1></div>
                
                </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card text-white bg-vcasas mb-3">
                <div className="card-header"><h3 className="card-title">Casas Vendidas</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadorvcasas}</h1></div>
                
                </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card text-white bg-danger mb-3">
                <div className="card-header"><h3 className="panel-title">Zonas Registradas</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadorregiones}</h1></div>
                
                </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card text-white bg-provincias mb-3">
                <div className="card-header"><h3 className="panel-title">Provincias Registradas</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadorprovincias}</h1></div>
               
                </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card text-white bg-comunas mb-3">
                <div className="card-header"><h3 className="panel-title">Comunas Registradas</h3></div>   
                <div className="card-body">
                <h1>{this.state.contadorcomunas}</h1></div>
                </div>
                </div>  

            <div className="col-md-12">
           
            </div>
            </div>
            </Router> 
        );
    }
}