/**
 * Created by Eleazar on 13/05/2018.
 */

document.getElementById("BioBio").addEventListener("click",MuestraBio);
document.getElementById("LosRios").addEventListener("click",MuestraLosRios);
document.getElementById("Valparaiso").addEventListener("click",MuestraValparaiso);
document.getElementById("LosLagos").addEventListener("click",MuestraLosLagos);
document.getElementById("Nuble").addEventListener("click",MuestraNuble);
document.getElementById("Todos").addEventListener("click",OcultaBotones);



function MuestraBio() {

    $('#BioBio').css("background-color","#72C05B");
    $('#BioBio').css("color","white");

    $('#LosRios').css("background-color","#e5e5e5");
    $('#LosRios').css("color","#64686d");

    $('#Valparaiso').css("background-color","#e5e5e5");
    $('#Valparaiso').css("color","#64686d");

    $('#LosLagos').css("background-color","#e5e5e5");
    $('#LosLagos').css("color","#64686d");

    $('#Nuble').css("background-color","#e5e5e5");
    $('#Nuble').css("color","#64686d");

    $('#BioBio2').css("display","inline-block");
    $('#LosRios2').css("display","none");
    $('#Valparaiso2').css("display","none");
    $('#LosLagos2').css("display","none");
    $('#Nuble2').css("display","none");
}
function MuestraLosRios() {

    $('#BioBio').css("background-color","#e5e5e5");
    $('#BioBio').css("color","#64686d");

    $('#LosRios').css("background-color","#72C05B");
    $('#LosRios').css("color","white");

    $('#Valparaiso').css("background-color","#e5e5e5");
    $('#Valparaiso').css("color","#64686d");

    $('#LosLagos').css("background-color","#e5e5e5");
    $('#LosLagos').css("color","#64686d");

    $('#Nuble').css("background-color","#e5e5e5");
    $('#Nuble').css("color","#64686d");

    $('#BioBio2').css("display","none");
    $('#LosRios2').css("display","inline-block");
    $('#Valparaiso2').css("display","none");
    $('#LosLagos2').css("display","none");
    $('#Nuble2').css("display","none");
}
function MuestraValparaiso() {

    $('#BioBio').css("background-color","#e5e5e5");
    $('#BioBio').css("color","#64686d");

    $('#LosRios').css("background-color","#e5e5e5");
    $('#LosRios').css("color","#64686d");

    $('#Valparaiso').css("background-color","#72C05B");
    $('#Valparaiso').css("color","white");

    $('#LosLagos').css("background-color","#e5e5e5");
    $('#LosLagos').css("color","#64686d");

    $('#Nuble').css("background-color","#e5e5e5");
    $('#Nuble').css("color","#64686d");

    $('#BioBio2').css("display","none");
    $('#LosRios2').css("display","none");
    $('#Valparaiso2').css("display","inline-block");
    $('#LosLagos2').css("display","none");
    $('#Nuble2').css("display","none");
}
function MuestraLosLagos() {

    $('#BioBio').css("background-color","#e5e5e5");
    $('#BioBio').css("color","#64686d");

    $('#LosRios').css("background-color","#e5e5e5");
    $('#LosRios').css("color","#64686d");

    $('#Valparaiso').css("background-color","#e5e5e5");
    $('#Valparaiso').css("color","#64686d");

    $('#LosLagos').css("background-color","#72C05B");
    $('#LosLagos').css("color","white");

    $('#Nuble').css("background-color","#e5e5e5");
    $('#Nuble').css("color","#64686d");

    $('#BioBio2').css("display","none");
    $('#LosRios2').css("display","none");
    $('#Valparaiso2').css("display","none");
    $('#LosLagos2').css("display","inline-block");
    $('#Nuble2').css("display","none");
}
function MuestraNuble() {

    $('#BioBio').css("background-color","#e5e5e5");
    $('#BioBio').css("color","#64686d");

    $('#LosRios').css("background-color","#e5e5e5");
    $('#LosRios').css("color","#64686d");

    $('#Valparaiso').css("background-color","#e5e5e5");
    $('#Valparaiso').css("color","#64686d");

    $('#LosLagos').css("background-color","#e5e5e5");
    $('#LosLagos').css("color","#64686d");

    $('#Nuble').css("background-color","#72C05B");
    $('#Nuble').css("color","white");

    $('#BioBio2').css("display","none");
    $('#LosRios2').css("display","none");
    $('#Valparaiso2').css("display","none");
    $('#LosLagos2').css("display","none");
    $('#Nuble2').css("display","inline-block");

}
function OcultaBotones() {

    $('#BioBio').css("background-color","#e5e5e5");
    $('#BioBio').css("color","#64686d");

    $('#LosRios').css("background-color","#e5e5e5");
    $('#LosRios').css("color","#64686d");

    $('#Valparaiso').css("background-color","#e5e5e5");
    $('#Valparaiso').css("color","#64686d");

    $('#LosLagos').css("background-color","#e5e5e5");
    $('#LosLagos').css("color","#64686d");

    $('#Nuble').css("background-color","#e5e5e5");
    $('#Nuble').css("color","#64686d");

    $('#BioBio2').css("display","none");
    $('#LosRios2').css("display","none");
    $('#Valparaiso2').css("display","none");
    $('#LosLagos2').css("display","none");
    $('#Nuble2').css("display","none");
}

