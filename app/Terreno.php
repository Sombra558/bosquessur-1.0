<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Terreno extends Model
{
    protected $fillable = [
        'terreno','descripcion', 'precio', 'superficie','utm','latitud','longitud','clasificacion','zona','provincia','comuna','imaprimera','imasegunda','imatercera','mapa','estado',
    ];

}
