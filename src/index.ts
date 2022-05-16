// calcular las calificaciones de un grupo de alumnos donde la nota
//final de cada alumno se calcula segun el siguiente criterio:
// 1-practica = 10%  = nt1
// 2-problema = 50%  = nt2
// 3-teorica  = 40%  = nt3

//se debe ingrsar el nombre del alumno y sus tres notas, se escibiria
// el resultado y se volvera a pedir los datos del siguiente alumno
//hasta que el nombre sea una cadena vacia

// las notas deben estar entre 0 y 10 si no lo estan no imprimira las notas
//mostrata un msj de error y continuara con otro alumno

// CALIFICACIONES
// variables:
//      promedio= prom;
// 1-practica = 10%  = nt1;
// 2-problema = 50%  = nt2;
// 3-teorica  = 40%  = nt3;
//      suma de nota = sumaNota;
//     notafinal= nf;

// variables
let prom, nt1, nt2, nt3, sumaNota: number;
let nombre;

//entrada de datos por usuario
nombre = prompt("ingrese el nombre de Alumno:");
console.log("Alumno :" + nombre);
nt1 = prompt("ingrese calificacion de la Practica");
nt2 = prompt("ingrese calificacion del Problema");
nt3 = prompt("ingrese calificacion del Teorico");

// promedio
prom = nt1 * 0.1 + nt2 * 0.5 + nt3 * 0.4;

//salida de dato
//console.log("la Calificacion final de", nombre, "es: ", prom);

if (prom > -1 && prom < 11) {
  console.log("la Calificacion final de", nombre, "es: ", prom);
} else {
  console.log("Hay un error, siga con el siguiente alumno");
}

setTimeout(function () {
  window.location.reload(1);
}, 5000);
