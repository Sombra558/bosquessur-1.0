import React, { Component } from 'react';
export default class Terreno extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
        verificador: '#modal'+this.props.id,
        modalo: 'modal'+this.props.id,
    casa:{
        id:this.props.id,
        casa:this.props.casa,
        habitaciones:this.props.habitaciones,
        banos:this.props.banos,
        descripcion:this.props.descripcion,
        precio:this.props.precio,
        superficie:this.props.superficie,
        utm:this.props.utm,
        latitud:this.props.latitud,
        longitud:this.props.longitud,
        estado:this.props.estado,
        zona:this.props.zona,
        provincia:this.props.provincia,
        comuna:this.props.comuna,
        imaprimera:this.props.imaprimera,
        imasegunda:this.props.imasegunda,
        imatercera:this.props.imatercera,
        mapa:this.props.mapa,
        estado:this.props.estado,
    },
    }
}
render()
{
       
            return (
          <div>
                <a href={'Casa/'+this.state.casa.id}>
                <div className="portfolio-item BioIndustrial BioBio col-md-4">
                    <div className="portfolio-item-inner">
                        <img alt="" className="img-responsive" src={this.state.casa.imaprimera} />
                        <div className="portfolio-info" data-toggle="modal" data-target={this.state.verificador}>
                            <p>{this.state.casa.casa}</p>
                            <h3>PROVINCIA: {this.state.casa.provincia} -  COMUNA: {this.state.casa.comuna}</h3>
                         </div>
                    </div>
                </div>
                </a>
                </div>
            );
        
}}