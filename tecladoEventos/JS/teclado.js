$(document).keydown(function(e){
     elem = $ ("#trasladar");  /* el div se guarda en la variable elem */
     switch (e.which){  /* Nos da el codigo de la tecla que se pulsa */
         case 40:
             elem.css("top", parseInt(elem.css("top"))+3);
             break;
         case 38:
            elem.css("top", parseInt(elem.css("top"))-3);
             break; 
         case 37:
            elem.css("left", parseInt(elem.css("left"))-3);
            break;        
        case 39:
            elem.css("left", parseInt(elem.css("left"))+3);
            break;
     }
})