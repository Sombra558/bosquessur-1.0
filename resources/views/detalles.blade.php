@extends('layouts.detalles')

@section('content')

<div class="row">
    <br>
      <div class="col-sm-12">
               <h1 class="text-center margeneando1">{{$terreno->terreno}}</h1>
               <br>
      </div>
    <br>
    <br>
    <div class="row">
        <div class="col-xs-12 col-sm-8">
                <div class="row">
                <ul class="col-xs-12 col-sm-4 nav nav-tabs" role="tablist">
                        <li class="col-xs-3 col-sm-12" role="presentation"><a href="#potota" aria-controls="potota" role="tab" data-toggle="tab"><img  src="{{$terreno->imaprimera}}" height="100%" width="100%" alt="Ver Imagen Principal"></a></li>
                        <li class="col-xs-3 col-sm-12" role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"><img  src="{{$terreno->imasegunda}}" height="100%" width="100%" alt="Ver Imagen Secundaria"></a></li>
                        <li class="col-xs-3 col-sm-12" role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab"><img  src="{{$terreno->imatercera}}" height="100%" width="100%" alt="Ver Imagen Tercearia"></a></li>
                        <li class="col-xs-3 col-sm-12 text-center" role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab"><span class="text-map" style="color: red;"><i class="fas fa-map-marker-alt col"></i></span></a></li>
                </ul>
                <div class="col-xs-12 col-sm-8">
                    <div class="tab-content">
                            <div role="tabpanel" class="tab-pane fade in active" id="potota"><img src="{{$terreno->imaprimera}}"  height="396px" width="100%" alt="Imagen Primera"></div>
                            <div role="tabpanel" class="tab-pane fade" id="profile"><img src="{{$terreno->imasegunda}}"  height="396px" width="100%" alt="Imagen Secundaria"></div>
                            <div role="tabpanel" class="tab-pane fade" id="messages"><img src="{{$terreno->imatercera}}"  height="396px" width="100%" alt="Imagen Tercearia"></div>
                            <div role="tabpanel" class="tab-pane fade" id="settings"> <iframe src="{{$terreno->mapa}}" width="100%" height="396px" frameborder="0" style="border:0; margin:0px;padding:0px;" allowfullscreen></iframe></div>
                    </div>
                    <h5 style="margin-top: 5px; margin-bottom:25px; font-size:20px;">COORDENADAS DE UBICACIÓN</h5>
                    <h5>UTM:{{$terreno->utm}}</h5>
                    <h5 style="margin-top: 25px; margin-bottom:5px;" class="text-left"><span>LATITUD: {{$terreno->latitud}}</span><span style="margin-left:35px;">LONGITUD: {{$terreno->longitud}}</span></h5>
                </div>
                </div>
        </div>
               
                <div class="col-xs-12 col-sm-4">
                <div class="col-xs-12 col-sm-12">
                <div class="panel panel-default margeneando">
                    <div class="panel-heading text-center" style="background-color:#222; color:#ffffff;"><strong>{{$terreno->terreno}}</strong></div>
            
                    <ul class="list-group">
                            <li class="list-group-item">
                                    <div><span style="font-size: 15px; color: #222; font-weight:bold;"><i class="fas fa-globe-americas col"></i> SUPERFICIE:<p style="font-size:15px" class="text-left">{{$terreno->superficie}}</p></span></div>
                            </li>
                            <li class="list-group-item">
                                    <div><span style="font-size: 15px; color: #222; font-weight:bold;"><i class="fas fa-object-group col"></i> DESCRIPCION:</span>
                                    </div>
                                    <p class="text-justify" style="font-size:15px;">{{$terreno->descripcion}}</p>
                            </li>
                            <li class="list-group-item">
                                    <div class="text-left"><span style="font-size: 15px; color: #222; font-weight:bold;">ZONA:</span><span style="font-size:15px; margin-left:10px;">{{$terreno->zona}}</span></div>
                            </li>
                            <li class="list-group-item">
                                    <div class="text-left"><span style="font-size: 15px; color: #222; font-weight:bold;">PROVINCIA:</span><span style="font-size:15px; margin-left:10px;">{{$terreno->provincia}}</span></div>
                            </li>
                            <li class="list-group-item">
                                    <div class="text-left"><span style="font-size: 15px; color: #222; font-weight:bold;">COMUNA:</span><span style="font-size:15px; margin-left:10px;">{{$terreno->comuna}}</span></div>
                            </li>
                            <li class="list-group-item">
                                    <div class="text-left"><span style="font-size: 15px; color: #222; font-weight:bold;">PRECIO:</span><span style="font-size:15px; margin-left:10px;">{{$terreno->precio}}</span></div>
                            </li>
                    </ul>
                    <div class="main-menu">
                                <ul class="nav navbar-nav" id="nav">
                                        <li  class="scroll">
                                                <a style="padding-left: 50px; padding-right: 50px;" class="btn btn-primary" data-section="#contact-area" href="#contact-area">Contactar</a>
                                        </li>
                                </ul>
                    </div>
                </div>
                </div>
                </div>
    </div>
    
<br>
</div>
        
</div>
@endsection