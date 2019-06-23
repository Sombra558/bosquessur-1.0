<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index(){
		return view('Admin/Admin');
    }
    public function redirecciones(){
      return redirect('/ControlAdmin');
    }
}
