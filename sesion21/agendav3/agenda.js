function guardarDatos(){
    var nombre=document.getElementById("nombre").value;
    var movil = document.getElementById("movil").value;
    var email = document.getElementById("email").value;

    const datos={
        'movil':movil,
        'email':email,
    }
    localStorage.setItem(nombre,JSON.stringify(datos));

    document.getElementById("nombre").value="";
    document.getElementById("movil").value="";
    document.getElementById("email").value="";
    actualizarDatos();
}

function recuperarDato(){
    var nombre = document.getElementById("nombre").value;
    let datos = localStorage.getItem(nombre);
    datos = JSON.parse(datos);
    
    document.getElementById("movil").value = datos.movil;
    document.getElementById("movil").value = datos.email;
}

function eliminarDato(){
    var nombre= document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}
function eliminartodo(){
    localStorage.clear();
    actualizarDatos();  
}
function actualizarDatos(){
    var registro = "";
    if (localStorage.length===0){
        registro+= '<li> vacio </li>';

    }else{
        for(var i = 0; i<=localStorage.length -1 ; i++){
            var key = localStorage.key(i);
            let datos = localStorage.getItem(key);
            datos=JSON.parse(datos);
            registro+=`<li><span class="nom"> ${key} </span> 
                     <span class="nom"> ${datos.movil}</span>  
                     <span class="nomemail"> ${datos.email}</span>
                     </li><br>`;
        }
    }
    document.getElementById('contactos').innerHTML=registro;
}

function sololetras(evt){
    var chartCode=(evt.charCode);

    if((chartCode>= 65 && chartCode<=90 )||(chartCode>= 97 && chartCode<=122)){
        document.getElementById('aviso').innerHTML=""
       return true;
    }else{
        document.getElementById('aviso').innerHTML="Ingrese solo letras"
        
      return false;
    }
}