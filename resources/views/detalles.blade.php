@extends('layouts.detalles')

@section('content')

<div class="row">
    <br>
      <div class="col-sm-12">
               <h4 class="text-right margeneando1"> Zona:{{$terreno->zona}} / Provincia: {{$terreno->provincia}} / Comuna: {{$terreno->comuna}}</h4>
      </div>
    <br>
    <br>
    <div class="row">
                <ul class="col-xs-12 col-sm-2 nav nav-tabs" role="tablist">
                        <li class="col-xs-3 col-sm-12" role="presentation"><a href="#potota" aria-controls="potota" role="tab" data-toggle="tab"><img  src="{{$terreno->imaprimera}}" height="100%" width="100%" alt="Ver Imagen Principal"></a></li>
                        <li class="col-xs-3 col-sm-12" role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"><img  src="{{$terreno->imasegunda}}" height="100%" width="100%" alt="Ver Imagen Secundaria"></a></li>
                        <li class="col-xs-3 col-sm-12" role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab"><img  src="{{$terreno->imatercera}}" height="100%" width="100%" alt="Ver Imagen Tercearia"></a></li>
                        <li class="col-xs-3 col-sm-12 text-center" role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab"><span class="text-map" style="color: red;"><i class="fas fa-map-marker-alt col"></i></span></a></li>
                </ul>
                <div class="col-xs-12 col-sm-6">
                    <div class="tab-content">
                            <div role="tabpanel" class="tab-pane fade in active" id="potota"><img src="{{$terreno->imaprimera}}"  height="396px" width="100%" alt="Imagen Primera"></div>
                            <div role="tabpanel" class="tab-pane fade" id="profile"><img src="{{$terreno->imasegunda}}"  height="396px" width="100%" alt="Imagen Secundaria"></div>
                            <div role="tabpanel" class="tab-pane fade" id="messages"><img src="{{$terreno->imatercera}}"  height="396px" width="100%" alt="Imagen Tercearia"></div>
                            <div role="tabpanel" class="tab-pane fade" id="settings"> <iframe src="{{$terreno->mapa}}" width="100%" height="396px" frameborder="0" style="border:0; margin:0px;padding:0px;" allowfullscreen></iframe></div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4">
                <div class="col-xs-12 col-sm-12">
                <div class="panel panel-default margeneando">
                    <div class="panel-heading text-center" style="background-color:#222; color:#ffffff;"><strong>{{$terreno->terreno}}</strong></div>
            
                    <ul class="list-group">
                            <li class="list-group-item">
                                    <div><span style="font-size: 15px; color: #222;"><i class="fas fa-globe-americas col"></i> SUPERFICIE:<p style="font-size:15px" class="text-left">{{$terreno->superficie}}</p></span></div>
                            </li>
                            <li class="list-group-item">
                                    <div><span style="font-size: 15px; color: #222;"><i class="fas fa-object-group col"></i> DESCRIPCION:</span>
                                    </div>
                                    <p class="text-justify" style="font-size:15px;">{{$terreno->descripcion}}</p>
                            </li>
                            
                            <li class="list-group-item">
                                    <div class="text-left"><span style="font-size: 15px; color: #222;"><i class="fas fa-dollar-sign col"></i> PRECIO: {{$terreno->precio}}$</span></div>
                            </li>
                            <li class="list-group-item">
                                    <div style="padding-top: 8px;" class="text-center form-control btn btn-primary">CONTACTAR</div>
                            </li>
                    </ul>
                </div>
                </div>
                </div>
    </div>
    

</div>
<div class="col-sm-12">
               <h4 class="text-left"> UTM:{{$terreno->utm}} / Longitud: {{$terreno->longitud}} / Latitud: {{$terreno->latitud}}</h4>
      </div>
</div>
@endsection