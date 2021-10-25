function generarTabla() {
  var numFilas = document.getElementById("numFilas").value;
  var numColumnas = document.getElementById("numColumnas").value;
  var contenedorTabla = document.getElementById("contenedorTabla");

  contenedorTabla.innerHTML="";
  var tabla = "<table>";

  for(var i= 1;i<=numFilas;i++){
    tabla += "<tr>";
    for (var j = 1; j<= numColumnas;j++){
      tabla += "<td> tabla </td>";
    }
    tabla +="</tr>";
  }
  tabla += "</table>";
  contenedorTabla.innerHTML=tabla;
  
}
















/* function comparar(){
  var a = 2;
  var b = 2 ;
  if(a==b)
       alert("a y b son iguales");
  else
  alert("a y b son diferentes");
}

function resta(x,y){
    var rest = x-y;
    document.write("<h2> La resta es " + rest+"<h2>");
}

function suma (a,b){
    var sum = a + b;
    document.getElementById("Sumar").innerHTML= "La suma es "+sum;
}

function escribir(){
    valor=document.getElementById("entrada").value;
    document.getElementById("contenido").innerHTML= " "+valor;
} */

/*el siguiente ejercicio práctico con solución, plantea un
 algoritmo que visualice los números del 1 al 10*/
 

//  /* var i=0;
//  document.write ("Ejercicio  con while" + "<br>");
//  while(i<=10){
//     document.write(i);
//     document.write("<br>");
//     i++; 
//  }


// var numeros = 0;
// document.write ("Ejercicio  con for" + "<br>");
// for( numeros = 0 ; numeros < 11 ; numeros++ ) {
//     document.write(numeros); 
//      document.write("<br>");
// }




// var ini=0;
// document.write ("ejercicio con do-while" + "<br>" );
// do{
    
//     document.write(ini);
//     ini+=1;
//     document.write("<br>");

// }while (ini<=10);


// let x = 0;
// let z = 0;
// document.write ("ejercicio con break" + "<br>" );

// labelCancelLoops: while (true) {
//   document.write('Bucles externos: ' + x);
//   document.write("<br>");
//   x += 1;
//   z = 1;
//   while (true) {
//      document.write('Bucles internos: ' + z);
//      document.write("<br>");
//     z += 1;
//     if (z === 5 && x === 5) {
//       break labelCancelLoops;
//     } else if (z === 5) {
//       break;
//     }
//   }
// }

// /* let frutas = ["manzanas","platano","piña"]
// document.write ("ejercicio con break" + "<br>" );

// for (let x = 0; x < frutas.length; x++) {
//     if (frutas[x] === "platano") {
//         document.write(x)
//         break;
//     }

//   } */

// let y = 0;
// let n = 0;
// document.write("<br>");
// document.write("bucle continue");
//      document.write("<br>");
// while (y<5){
//     y++;
//     if (y===3){
//         continue;
//     }
//     n += y;
//     document.write(n);
//      document.write("<br>");
// }
