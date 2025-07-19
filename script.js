/*
let numero = Number(prompt("Ingersa un número uno:"));
let numeroDos= Number(prompt("Ingresa el número dos:"));  el number suma tanto float como int sin problemas */
//console.log(Number(numero) + Number(numeroDos)); acá era cuando no se ha hecho el parseo en la captura de datos (mala practica)
//Acá ya hice el parseo al momento de capturar los datos
//let numero = parseInt(prompt("Ingersa un número uno:"));
//let numeroDos= parseInt(prompt("Ingresa el número dos:"));// esté parseint borra los decimales, solo suma enteros
let numero = parceFloat(prompt("Ingersa un número uno:"));
let numeroDos= parceFloat(prompt("Ingresa el número dos:"));// este parceFloat si ingresas numeros y letras te borra la letra y ta hace la operacón 
console.log(numero + numeroDos);