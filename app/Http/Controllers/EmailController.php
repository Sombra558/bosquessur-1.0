<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail; //Importante incluir la clase Mail, que será la encargada del envío
class EmailController extends Controller
{
    public function contact(Request $request){
        $subject = request('asunto');
        $for = "bosquessur123@gmail.com";
        $email=request('email');
        Mail::send('email',$request->all(), function($msj) use($subject,$for){
            $msj->from(request('email'),"Formulario de Contacto BosquesSur");
            $msj->subject($subject);
            $msj->to($for);
        });
        return redirect()->back();
    }
}
