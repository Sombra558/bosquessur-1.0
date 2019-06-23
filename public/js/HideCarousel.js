/**
 * Created by Eleazar on 08/04/2018.
 */

//Mostrar y ocultar Carouseles para seccion Corretaje

$(document).ready(function() {

    $("#Fores").click(function() {
        $("#Forestales").css("display", "block");
        $("#Agricolas").css("display", "none");
        $("#Industriales").css("display", "none");
        $("#Urbanos").css("display", "none");
    });

    $("#Agri").click(function() {
        $("#Agricolas").css("display", "block");
        $("#Forestales").css("display", "none");
        $("#Industriales").css("display", "none");
        $("#Urbanos").css("display", "none");
    });

    $("#Indus").click(function() {
        $("#Industriales").css("display", "block");
        $("#Forestales").css("display", "none");
        $("#Agricolas").css("display", "none");
        $("#Urbanos").css("display", "none");
    });

    $("#Urban").click(function() {
        $("#Urbanos").css("display", "block");
        $("#Forestales").css("display", "none");
        $("#Agricolas").css("display", "none");
        $("#Industriales").css("display", "none");
    });
});




