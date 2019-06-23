<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Terreno;

class TerrenoController extends Controller
{
    public function store(){
        request()->all();
        Terreno::create([
        'terreno' => request('terreno'),
        'descripcion' => request('descripcion'),
        'precio' => request('precio'),
        'superficie' => request('superficie'),
        'utm' => request('utm'),
        'latitud' => request('latitud'),
        'longitud' => request('longitud'),
        'clasificacion' => request('clasificacion'),
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
      $terreno = Terreno::find($id); 
      return $terreno;
  }
      public function TerrenoContador(){
        $contador=Terreno::count();
        return $contador;      
      }
      public function TerrenoSitios(){
        $Sitios=Terreno::where('clasificacion','Sitios')->count();
        return $Sitios;      
      }
      public function TerrenoParcelas(){
        $Parcelas=Terreno::where('clasificacion','Parcelas')->count();
        return $Parcelas;      
      }
      public function TerrenoCampos(){
        $Campos=Terreno::where('clasificacion','Campos')->count();
        return $Campos;      
      }
      public function TerrenoIndustriales(){
        $Industriales=Terreno::where('clasificacion','Industriales')->count();
        return $Industriales;      
      }
      public function TerrenoPlantaciones(){
        $Plantaciones=Terreno::where('clasificacion','Plantaciones')->count();
        return $Plantaciones;      
      }
      public function TerrenoVContador(){
        $contadorV=Terreno::where('estado',1)->count();
        return $contadorV;      
      }
      public function TerrenoDContador(){
        $contadorD=Terreno::where('estado',0)->count();
        return $contadorD;      
      }
      public function update(Request $request, $id){
        Terreno::find($id)->update([
            'terreno' => request('terreno'),
            'descripcion' => request('descripcion'),
            'precio' => request('precio'),
            'superficie' => request('superficie'),
            'utm' => request('utm'),
            'latitud' => request('latitud'),
            'longitud' => request('longitud'),
            'clasificacion' => request('clasificacion'),
            ]);
         return;
        }
        public function updateRegion(Request $request, $id){
          Terreno::find($id)->update([
              'region' => request('region'),
              'provincia' => request('provincia'),
              'comuna' => request('comuna'),
              ]);
           return;
          }
      public function index(){
        $terrenos = Terreno::all(); 
        return $terrenos;
        }
      public function destroy($id){
        Terreno::find($id)->delete();
     }
     public function Vendido($id){
      Terreno::find($id)->update([
          'estado' => 1,
          ]);
       return;
      }
     

}
