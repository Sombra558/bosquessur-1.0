<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Region;
class RegionController extends Controller
{
    public function store(Request $request){
        request()->all();
        Region::create([
            'region' => request('region'),
            ]);
        return;
        }
        public function update(Request $request, $id){
            Region::find($id)->update([
                'region' => request('region'),
                ]);
        return;
        }
        public function index(){
            $Categorias = Region::all(); 
            return $Categorias;
        }
        public function destroy($id){
            Region::find($id)->delete();
        }
        public function RegionContador(){
            $contador=Region::count();
            return $contador;      
          }
}
