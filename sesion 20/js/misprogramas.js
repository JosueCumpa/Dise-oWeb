$(document).ready(function(){
    $("a").click(function(evento){
    alert("Has pulsado el enlace. ahora seras enviado a la pagina de la usat");
    });
}); 


$("#cb1").click(function(){
    $("#cont1").toggle(1500);
}, function(){
    $("#cont1").toggle(1500);
});