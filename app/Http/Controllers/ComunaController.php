<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comuna;
class ComunaController extends Controller
{
    public function store(Request $request){
        request()->all();
        Comuna::create([
            'comuna' => request('comuna'),
            ]);
        return;
        }
        public function update(Request $request, $id){
            Comuna::find($id)->update([
                'comuna' => request('comuna'),
                ]);
        return;
        }
        public function index(){
            $Categorias = Comuna::all(); 
            return $Categorias;
        }
        public function destroy($id){
            Comuna::find($id)->delete();
        }
        public function ComunaContador(){
            $contador=Comuna::count();
            return $contador;      
          }
}
