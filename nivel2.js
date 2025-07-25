// Ejercicio 1: Control de acceso a evento
// Crea un pequeño programa que simule el control de entrada a un evento según la edad de la persona. El
// sistema debe:
// Solicitar al usuario:
// • Su nombre (usando prompt)
// • Su edad (usando prompt)
// Validar con condicionales:
// • Que la edad sea un número válido (isNaN)
// • Que el tipo de cada dato sea el esperado (typeof)
// Convertir los datos con los parseos adecuados:
// • Edad como parseInt()
// Mostrar en consola:
// • Un mensaje personalizado según su edad:
// o Si es menor de 13: "Acceso denegado: eres menor de edad."
// o Entre 13 y 17: "Acceso limitado: necesitas ir con un adulto."
// o Mayor o igual a 18: "Acceso permitido."
// • Un resumen del nombre, edad y tipo de datos ingresados
let Nombre = prompt("Ingresa tú nombre");
let Edad = prompt("Ingresa tú edad");

if (isNaN(Edad)) {
    console.log("Ingresa una edad válida")
} else {
    Edad = (parseInt(Edad));
    console.log(typeof Nombre);
    console.log(typeof Edad);
    if (Edad <= 13) {
        console.log("Acceso denegado: eres menor de edad");
    } else if (Edad > 13 && Edad <= 17) {
        console.log("Acceso limitado: necestias ir con un adulto");
    } else {
        console.log("Acceso permitido");
    }
    console.log("Tú nombre es:" + Nombre + " con una edad de: " + Edad)
}