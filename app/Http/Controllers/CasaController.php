<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Casa;

class CasaController extends Controller
{
    public function store(){
        request()->all();
        Casa::create([
        'casa' => request('casa'),
        'habitaciones' => request('habitaciones'),
        'banos' => request('banos'),
        'descripcion' => request('descripcion'),
        'precio' => request('precio'),
        'superficie' => request('superficie'),
        'utm' => request('utm'),
        'latitud' => request('latitud'),
        'longitud' => request('longitud'),
        'zona' => request('zona'),
        'provincia' => request('provincia'),
        'comuna' => request('comuna'),
        'imaprimera' => request('imaprimera'),
        'imasegunda' => request('imasegunda'),
        'imatercera' => request('imatercera'),
        'mapa' => request('mapa'),
        ]);    
        return;
    }
    public function show($id){
      $casa = Casa::find($id); 
      return $casa;
  }
      public function CasaContador(){
        $contador=Casa::count();
        return $contador;      
      }
      public function CasaVContador(){
        $contadorV=Casa::where('estado',1)->count();
        return $contadorV;      
      }
      public function CasaDContador(){
        $contadorD=Casa::where('estado',0)->count();
        return $contadorD;      
      }
      public function update(Request $request, $id){
            Casa::find($id)->update([
            'casa' => request('casa'),
            'habitaciones' => request('habitaciones'),
            'baños' => request('baños'),
            'descripcion' => request('descripcion'),
            'precio' => request('precio'),
            'superficie' => request('superficie'),
            'utm' => request('utm'),
            'latitud' => request('latitud'),
            ]);
         return;
        }
        public function updateRegion(Request $request, $id){
              Casa::find($id)->update([
              'zona' => request('zona'),
              'provincia' => request('provincia'),
              'comuna' => request('comuna'),
              ]);
           return;
        }
        public function updateImagen(Request $request, $id){
          Casa::find($id)->update([
              'imaprimera' => request('imaprimera'),
              'imasegunda' => request('imasegunda'),
              'imatercera' => request('imatercera'),
              'mapa' => request('mapa'),
              ]);
           return;
          }
      public function index(){
        $casas = Casa::all(); 
        return $casas;
        }
      public function destroy($id){
        Casa::find($id)->delete();
     }
     public function Vendido($id){
        Casa::find($id)->update([
          'estado' => 1,
          ]);
       return;
      }
}
