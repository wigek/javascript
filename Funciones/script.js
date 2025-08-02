/* definicion de una funcion regular */
/*
    Function -> palabra reservada para definir una función
    nombreFuncion -> sera el nombre de la funcion
    () -> espacio para los parametros de la funcion
    {} -> Bloque de código a ejecutar

*/
function unaFuncion() {

}

// funcion regular

// function sumarDosNumeros(){
//     let numeroUno = Number(prompt("Ingrese el numero uno"))
//     let numeroDos = Number(prompt("Ingrese el numero dos"))
//     return numeroUno + numeroDos
// }

// let veces = Number(prompt('Cuantas veces deseas ejecutar?:'))

// for (let step = 0; step < veces; step++){    
//     let resultado = sumarDosNumeros();
//     console.log('el resultado es: '+resultado);
// }

//funcion regular expresion

// let sumarDosNumeros = function(){
//     let numeroUno = Number(prompt("Ingrese el numero uno"))
//     let numeroDos = Number(prompt("Ingrese el numero dos"))
//     return numeroUno + numeroDos
// }

// for (let step = 0; step < 2; step++){    
//     let resultado = sumarDosNumeros();
//     console.log('el resultado es: '+resultado);
// }

// let sumarDosNumeros = () => {
//     let numeroUno = Number(prompt("Ingrese el numero uno"))
//     let numeroDos = Number(prompt("Ingrese el numero dos"))
//     return numeroUno + numeroDos
// }


// let otroNumero = 2 + sumarDosNumeros()


// for (let step = 0; step < 2; step++){    
//     let resultado = sumarDosNumeros();
//     console.log('el resultado es: '+resultado);
// }


//EJERCICIO

/* Desarrollar un algoritmo que permita calcular el salario de un empleado teniendo en cuenta que:
1 - Se debe calcular la cantidad de horas extras (si aplica)
2 - Se debe calcular el valor de horas extras
3 - Aplicar y mostrar deducciones (Salud y pensiones)
4 - Aplicar y mostrar auxilio de transporte
5 - mostrar el salario total antes de deducciones y bonificaciones
6 - mostrar el salario total a pagar 

validaciones:

- el salario es dinamico y varia por hora y valor hora
- Validar que el salario si sea un numero
- validar si el salario es un numero positivo

*/


// let definirValorHoraExtra = (cantidad) => {
//     if (!(isNaN(cantidad)) && cantidad > 0) {
//         return Number(prompt('Ingrese el valor de las horas extras: '))
//     }
//     else
//         return 0
// }

// let definirCantidadHoraExtra = () => {
//     let cantidad = Number(prompt('Ingrese las horas extras si aplica: '))
//     if (!(isNaN(cantidad)) && cantidad > 0){
//         return cantidad
//     }
//     else{
//         return 0
//     }
// }

let valorHora = Number(prompt("Ingrese el valor de la hora: "));
let cantidadHoras = Number(prompt("Ingrese la cantidad de horas laboradas: "));

function calcularSalarioBruto() {
  if (cantidadHoras > 44) {
    return 44 * valorHora;
  } else {
    return valorHora * cantidadHoras;
  }
}

function cantidadHorasExtras() {
  if (cantidadHoras > 44) {
    return cantidadHoras - 44;
  } else {
    return 0;
  }
}


let salarioBruto = calcularSalarioBruto();
let numeroHorasExtras = cantidadHorasExtras();
let deducciones= salarioBruto*0.08;

function calcularValorHorasExtras() {
  return valorHora * 1.25 * numeroHorasExtras;
}

function calcularAuxilioTransporte(){
  if (salarioBruto>1423500*2){
      return 0;
  }
  return 200000;
}

let valorAuxulioTransporte= calcularAuxilioTransporte();

function salarioNetoEmpleado(){
  console.log(`Colilla de pago \n Salario bruto: ${salarioBruto} \nAuxulio de transporte: ${valorAuxulioTransporte}\n 
    deduccion por salud: ${deducciones/2}\n Deduccion por pension: ${deducciones/2}\n Valor por horas extras: 
    ${calcularValorHorasExtras()}\n Salario neto: ${salarioBruto-deducciones+valorAuxulioTransporte+ calcularValorHorasExtras()} `);
}





