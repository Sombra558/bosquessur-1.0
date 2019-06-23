@extends('layouts.detalles')

@section('content')

<div class="row">
    <br>
      <div class="col-sm-12">
               <h4 class="text-right margeneando1"> Zona:{{$casa->zona}} / Provincia: {{$casa->provincia}} / Comuna: {{$casa->comuna}}</h4>
      </div>
      <div class="col-sm-12">
      <h4 class="text-left margeneando2" style="font-size:30px;"> <i class="fas fa-bed col">: {{$casa->habitaciones}}</i> -  <i class="fas fa-shower col">: {{$casa->banos}}</i></h4>
      </div>
    <br>
    <br>
    <div class="row">
                <ul class="col-xs-12 col-sm-2 nav nav-tabs" role="tablist">
                        <li class="col-xs-3 col-sm-12" role="presentation"><a href="#potota" aria-controls="potota" role="tab" data-toggle="tab"><img  src="{{$casa->imaprimera}}" height="100%" width="100%" alt="Ver Imagen Principal"></a></li>
                        <li class="col-xs-3 col-sm-12" role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"><img  src="{{$casa->imasegunda}}" height="100%" width="100%" alt="Ver Imagen Secundaria"></a></li>
                        <li class="col-xs-3 col-sm-12" role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab"><img  src="{{$casa->imatercera}}" height="100%" width="100%" alt="Ver Imagen Tercearia"></a></li>
                        <li class="col-xs-3 col-sm-12 text-center" role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab"><span class="text-map" style="color: red;"><i class="fas fa-map-marker-alt col"></i></span></a></li>
                </ul>
                <div class="col-xs-12 col-sm-6">
                    <div class="tab-content">
                            <div role="tabpanel" class="tab-pane fade in active" id="potota"><img src="{{$casa->imaprimera}}"  height="396px" width="100%" alt="Imagen Primera"></div>
                            <div role="tabpanel" class="tab-pane fade" id="profile"><img src="{{$casa->imasegunda}}"  height="396px" width="100%" alt="Imagen Secundaria"></div>
                            <div role="tabpanel" class="tab-pane fade" id="messages"><img src="{{$casa->imatercera}}"  height="396px" width="100%" alt="Imagen Tercearia"></div>
                            <div role="tabpanel" class="tab-pane fade" id="settings"> <iframe src="{{$casa->mapa}}" width="100%" height="396px" frameborder="0" style="border:0; margin:0px;padding:0px;" allowfullscreen></iframe></div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4">
                <div class="col-xs-12 col-sm-12">
                <div class="panel panel-default margeneando">
                    <div class="panel-heading text-center" style="background-color:#222; color:#ffffff;"><strong>{{$casa->terreno}}</strong></div>
            
                    <ul class="list-group">
                            <li class="list-group-item">
                                    <div><span style="font-size: 15px; color: #222;"><i class="fas fa-globe-americas col"></i> SUPERFICIE:<p style="font-size:15px" class="text-left">{{$casa->superficie}}</p></span></div>
                            </li>
                            <li class="list-group-item">
                                    <div><span style="font-size: 15px; color: #222;"><i class="fas fa-object-group col"></i> DESCRIPCION:</span>
                                    </div>
                                    <p class="text-justify" style="font-size:15px;">{{$casa->descripcion}}</p>
                            </li>
                            
                            <li class="list-group-item">
                                    <div class="text-left"><span style="font-size: 15px; color: #222;"><i class="fas fa-dollar-sign col"></i> PRECIO: {{$casa->precio}}</span></div>
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
               <h4 class="text-left"> UTM:{{$casa->utm}} / Longitud: {{$casa->longitud}} / Latitud: {{$casa->latitud}}</h4>
      </div>
</div>
@endsection