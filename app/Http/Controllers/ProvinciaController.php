<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\provincia;
class ProvinciaController extends Controller
{
    public function store(Request $request){
        request()->all();
        Provincia::create([
            'provincia' => request('provincia'),
            ]);
        return;
        }
        public function update(Request $request, $id){
            Provincia::find($id)->update([
                'provincia' => request('provincia'),
                ]);
        return;
        }
        public function index(){
            $Categorias = Provincia::all(); 
            return $Categorias;
        }
        public function destroy($id){
            Provincia::find($id)->delete();
        }
        public function ProvinciasContador(){
            $contador=Provincia::count();
            return $contador;      
          }
}
