<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Terreno;
use App\Casa;
class PublicController extends Controller
{
    public function index(){
		return view('welcome');
    }
    public function Sitios(){
      $Sitios = Terreno::where('clasificacion','Sitios')->where('estado',0)->get(); 
      return $Sitios;
    }
    public function Casas(){
      $Casas = Casa::where('estado',0)->get(); 
      return $Casas;
    }
    public function Parcelas(){
      $Parcelas = Terreno::where('clasificacion','Parcelas')->where('estado',0)->get(); 
      return $Parcelas;
    }
    public function Plantaciones(){
      $Plantaciones = Terreno::where('clasificacion','Plantaciones')->where('estado',0)->get(); 
      return $Plantaciones;
    }
    public function Campos(){
      $Campos = Terreno::where('clasificacion','Campos')->where('estado',0)->get(); 
      return $Campos;
    }
    public function Industriales(){
      $Industriales = Terreno::where('clasificacion','Industriales')->where('estado',0)->get(); 
      return $Industriales;
    }
    public function Lotes(){
      $Lotes = Terreno::where('clasificacion','Lotes')->where('estado',0)->get(); 
      return $Lotes;
    }
    public function Terreno($id){
        $terreno = Terreno::find($id); 
        return view('detalles',compact('terreno'));
    }
    public function Casa($id){
      $casa = Casa::find($id); 
      return view('detallesCasa',compact('casa'));
    }
    public function redirecciones(){
      return redirect('/');
    }
}
