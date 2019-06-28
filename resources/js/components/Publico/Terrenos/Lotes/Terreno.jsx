import React, { Component } from 'react';
export default class Terreno extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
        verificador: '#modal'+this.props.id,
        modalo: 'modal'+this.props.id,
    terreno:{
        id:this.props.id,
        terreno:this.props.terreno,
        descripcion:this.props.descripcion,
        precio:this.props.precio,
        superficie:this.props.superficie,
        utm:this.props.utm,
        latitud:this.props.latitud,
        longitud:this.props.longitud,
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
                <a href={'Terreno/'+this.state.terreno.id}>
                <div className="portfolio-item BioIndustrial BioBio col-md-4">
                    <div className="portfolio-item-inner">
                        <img alt="" className="img-responsive" src={this.state.terreno.imaprimera} />
                        <div className="portfolio-info" data-toggle="modal" data-target={this.state.verificador}>
                            <p>{this.state.terreno.terreno}</p>
                            <h3>PROVINCIA: {this.state.terreno.provincia} -  COMUNA: {this.state.terreno.comuna}</h3>
                         </div>
                    </div>
                </div>
                </a>
                </div>
            );
        
}}