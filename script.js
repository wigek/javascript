/*
let numero = Number(prompt("Ingersa un número uno:"));
let numeroDos= Number(prompt("Ingresa el número dos:"));  el number suma tanto float como int sin problemas */
//console.log(Number(numero) + Number(numeroDos)); acá era cuando no se ha hecho el parseo en la captura de datos (mala practica)
//Acá ya hice el parseo al momento de capturar los datos
//let numero = parseInt(prompt("Ingersa un número uno:"));
//let numeroDos= parseInt(prompt("Ingresa el número dos:"));// esté parseint borra los decimales, solo suma enteros
// let numero = parceFloat(prompt("Ingersa un número uno:"));
// let numeroDos= parceFloat(prompt("Ingresa el número dos:"));// este parceFloat si ingresas numeros y letras te borra la letra y ta hace la operacón 
// console.log(numero + numeroDos);
// Ejercicio 1: Tipos detectados
// Solicita tres valores diferentes mediante prompt() y muestra en consola el tipo de dato de cada uno
// utilizando typeof.
// let numuno = prompt("Ingresa el primer valor");
// let numdos = prompt("Ingresa el segundo valor");
// let numtres= prompt("Ingresa el tercer valor");

// console.log(typeof(numuno)+ " - "+typeof(numdos)+" - "+ typeof(numtres));


// //Ejercicio 2: Validación numérica
// Pide al usuario que ingrese algo que cree que es un número y usa isNaN() para verificar si realmente lo
// es. Muestra un mensaje en consola indicando si es válido o no.
// let num= prompt("Ingresa el número ");

// if(isNaN(num)){
//     console.log("Número inválido ");
// }else{
//     console.log("Número válido"+ num);
// }

// Ejercicio 3: Conversión de texto a número
// Solicita un número decimal al usuario y conviértelo utilizando Number(), parseInt() y parseFloat().
// Muestra cada resultado en consola.
// let num= prompt("Ingresa un número decimal")
// console.log(Number(num));
// console.log(parseInt(num));
// console.log(parseFloat(num));

// Ejercicio 4: Declaración de variables
// Declara una variable con var, una con let y una con const. Asigna valores mediante prompt() y muestra
// todos los resultados con console.log().

// let num= prompt("Ingresa un número");
// var nom= prompt("Ingresa tú nombre");
// const apellido= prompt("Ingresa tú apellido");

// console.log("El número elegido es "+ num);
// console.log("Tú nombre es "+ nom);
// console.log("Tú apellido es "+ apellido);

// Ejercicio 5: Suma de dos números
// Pide al usuario dos números mediante prompt(), conviértelos con Number() y muestra la suma total en
// consola.

// let num1= prompt("Ingresa el primer número a sumar");
// let num2= prompt("Ingresa el segundo número");
// console.log(Number(num1)+ Number(num2));

// Ejercicio 6: Registro básico de usuario
// Solicita al usuario su nombre, edad y ciudad. Verifica si la edad es un número válido con isNaN() y
// muestra un resumen del registro usando console.log() y typeof para cada dato.

// let nom= prompt("Ingresa tú nombre");
// let ed= Number(prompt("Ingresa tu edad"));
// let cd= prompt("Ingresa la ciudad en la que vives");
// if (isNaN(ed)){
//     console.log("Ingresa una edad válida");
// }else{
//     console.log("Es un número");
// }
//     console.log(typeof(ed));
//     console.log(typeof(nom));
//     console.log(typeof(cd));

// Ejercicio 7: Comprobación de tipo e interpretación
// Pide al usuario cualquier dato y muestra en consola el tipo detectado (typeof) y si es un número válido
// (isNaN()).

// let dasd= prompt("Ingresa cualquier dato ");
// if (isNaN(dasd)){
//     console.log("El dato ingresado no es número");
// }else{
//     console.log("El dato ingresado es un número");
// }
//     console.log(typeof(dasd));

// Ejercicio 8: Detección rápida
// Pide al usuario que ingrese una palabra o un número. Muestra en consola el resultado de typeof y si es o
// no un número válido usando isNaN().    

// let dato= prompt("Ingresa un número o una palabra");
// if (isNaN(dato)){
//     console.log("El dato ingresado no es un número");
// }else {
//     console.log("El dato ingresado es un número");
// }
// console.log("Y el dato ingresado es un "+ typeof(dato));

// Ejercicio 9: Edad para votar
// Solicita al usuario su edad, verifica que sea un número válido y muestra un mensaje indicando si puede
// votar (mayor o igual a 18 años).

// let nom= prompt("Ingresa tú nombre");
// let ed= prompt("Ingresa tú edad");

// if (isNaN(ed)){
//     console.log("Ingresa una edad válida")
// }else{
//     if (ed>=18){
//         console.log(nom +" es apto para votar");
//     }else{
//         console.log(nom + "aún no tiene la edad requerida para poder votar");
//     }
// }

// Ejercicio 10: Parseo de temperatura
// Pide al usuario una temperatura en grados Celsius como texto. Convierte el valor a número y muestra en
// consola la conversión a Fahrenheit.

// let temp= prompt("Ingresa la temperatura en grados Celsius");
// let celsius= Number(temp);

// let Fahrenheit = (celsius* 9 / 5) + 32;
// console.log("La conversion de temperatura en celsius= "+ celsius+ " a fahrenheit es de ="+ Fahrenheit);

// Ejercicio 11: Identificación de variables
// Declara tres variables con var, let y const. Asigna valores usando prompt() y luego imprime el tipo de
// cada variable con typeof.

// var cosa1= prompt("Ingresa un valor ");
// let cosa2= prompt("Ingresa otro valor");
// const cosa3= prompt("Ingresa otro valor");

// console.log(typeof(cosa1)+" - "+ typeof(cosa2)+ " - "+ typeof(cosa3));

// Ejercicio 12: División segura
// Pide dos números. Valida que el segundo no sea cero antes de hacer la división. Usa Number() para
// parsear.

// let num1= Number(prompt("Ingresa el primer número"));
// let num2= Number(prompt("Ingresa el segundo número"));

// if (num2===0){
//     console.log("El numero divisor no puede ser 0")
// }else{
//     let result= num1/num2;
//     console.log("El resultado es: "+ result);
// }

// Ejercicio 13: Comparación de tipos
// Pide dos valores al usuario. Imprime ambos tipos con typeof y muestra si ambos valores son del mismo
// tipo o no.

// let v1= prompt("Ingresa el primer valor");
// let v2= prompt("Ingresa el segundo valor");

// if(typeof(v1)==typeof(v2)){
//     console.log("Ambos valores son del mismo tipo");
//     console.log(typeof(v1)+' - '+  typeof(v2))
// }else{
//     console.log("Ambos valores son de diferente tipo ")
//     console.log(typeof(v1)+' - '+  typeof(v2))
// }

// Ejercicio 14: Nombre y edad en consola
// Solicita nombre y edad con prompt(), muestra un mensaje como:
// Hola, me llamo Juan y tengo 25 años
// Verifica que la edad sea numérica.

// let nom= prompt("Ingresa tú nombre");
// let edad= prompt("Ingresa tu edad");

// if(Number(ed)){
//     console.log("Ingresa una edad válida");
// }else{
//     console.log("hola,  me llamo "+ nom +" y tengo "+ ed);
// }

// Ejercicio 15: Extracción de enteros
// Solicita un número decimal, y muestra su versión entera utilizando parseInt().

// let Numero= prompt("Ingresa un número dedimal");
// console.log(parseInt(Numero));
// console.log("Tú número vuelto a numero entero es"+ parseInt(Numero)); // acá lo que hice fuera del ejercicio es que tambièn imprimí el resultado ya parseado a int

// Ejercicio 16: Validación con parseFloat
// Pide al usuario el valor de una factura. Usa parseFloat() para convertirlo y muestra el doble del valor en
// consola.
// let Factura= prompt("Ingresa el valor de la factura");
// console.log("El valor de la factura es de: "+ parseFloat(Factura));

// Ejercicio 17: Nombre en mayúsculas y tipo
// Solicita un nombre al usuario con prompt(). Muestra el nombre en mayúsculas con console.log() y el tipo
// con typeof.
// let Nombre= prompt("Ingresa tú nombre en letras minúsculas");
// console.log("Tú nombre es :"+ Nombre.toLocaleUpperCase()+);
// console.log(typeof Nombre);

// Ejercicio 18: Declaración dinámica
// Declara una variable con let cuyo valor venga de prompt(), luego vuelve a asignarle otro valor. Muestra
// let Hola= prompt("Ingresa cualquier cosa");
// Hola= "Te la cambie haciendo una declaración dinámica"
// console.log(Hola);

// Ejercicio 19: Conversión fallida
// Pide al usuario un valor imposible de convertir a número (por ejemplo, "hola mundo") y analiza con
// isNaN() si se puede procesar.
// let Numero= prompt("Ingresa cualquier string");
// if (isNaN(Number(Numero))){
//     console.log("Efectivamente no se puede convertir a un número")
// }else{
//     console.log("Es un número")
// }
// console.log(Number(Numero));

// Ejercicio 20: Resumen completo
// Pide al usuario nombre, edad y estatura.
// • Usa typeof para cada uno
// • Verifica que edad y estatura sean válidas (isNaN)
// • Muestra todo en console.log() como resumen final
let Nombre= prompt("Ingresa tú nombre");
let Edad= prompt("Ingresa tú edad");
let Estatura= prompt("Ingresa tú estatura");

if (isNaN(Edad)){
    console.log("Ingresa una edad correcta")
}
if (isNaN(Estatura)){
    console.log("Ingresa una estatura válida")
}
console.log("Tú nombre es: " + Nombre + "con una edad de "+ Edad+ "y una estarura de: "+ Estatura);
console.log(typeof Nombre);
console.log(typeof Edad);
console.log(typeof Estatura);