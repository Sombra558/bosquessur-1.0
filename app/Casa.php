<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Casa extends Model
{
    protected $fillable = [
        'casa','habitaciones','banos','descripcion', 'precio', 'superficie','utm','latitud','longitud','zona','provincia','comuna','imaprimera','imasegunda','imatercera','mapa','estado',
    ];
   
}
