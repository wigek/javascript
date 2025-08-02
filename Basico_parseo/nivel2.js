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
// let Nombre = prompt("Ingresa tú nombre");
// let Edad = prompt("Ingresa tú edad");

// if (isNaN(Edad)) {
//     console.log("Ingresa una edad válida")
// } else {
//     Edad = (parseInt(Edad));
//     console.log(typeof Nombre);
//     console.log(typeof Edad);
//     if (Edad <= 13) {
//         console.log("Acceso denegado: eres menor de edad");
//     } else if (Edad > 13 && Edad <= 17) {
//         console.log("Acceso limitado: necestias ir con un adulto");
//     } else {
//         console.log("Acceso permitido");
//     }
//     console.log("Tú nombre es:" + Nombre + " con una edad de: " + Edad)
// }


// Ejercicio 2: Calculadora de propina
// Crea un programa que ayude a calcular la propina sugerida según el porcentaje que desee dejar el cliente.
// El sistema debe:
// Solicitar al usuario:
// • El valor total de la cuenta (prompt)
// • El porcentaje de propina que desea dejar (prompt)
// Validar con condicionales:
// • Que ambos valores sean números válidos (isNaN)
// • Que los tipos de dato ingresados sean los esperados (typeof)
// Convertir los datos con los parseos adecuados:
// • Cuenta como parseFloat()
// • Porcentaje como parseFloat()
// Mostrar en consola:
// • El valor exacto de la propina en pesos
// • Un mensaje según el porcentaje:
// o Menor a 5%: "Propina muy baja"
// o Entre 5% y 20%: "Propina adecuada"
// o Mayor a 20%: "Propina generosa, gracias!"
// let totalCuenta = prompt("Ingresa el total de la cuenta");
// let porcentaje = prompt("Ingresa el porcentaje que deseas dejar");
// if (isNaN(totalCuenta) || isNaN(porcentaje)) {
//     console.log("Erorr: Ingresa números válidos");
// } else {
//     totalCuenta = parseFloat(totalCuenta);
//     porcentaje = parseFloat(porcentaje);
//     let porcentajeTotal = totalCuenta * (porcentaje / 100);
//     let total = porcentajeTotal + totalCuenta;
//     console.log(typeof totalCuenta);
//     console.log(typeof porcentaje);
//     if (porcentaje < 5) {
//         console.log("La propina es muy baja, siendo esta de: $" + porcentajeTotal);
//     } else if (porcentaje >= 5 && porcentaje < 20) {
//         console.log("Propina adecuada, siendo esta de: $" + porcentajeTotal);
//     } else {
//         console.log("Propina generosa, siendo esta: $" + porcentajeTotal + " Muchas gracias");
//     }
//     console.log("El total de la cuenta es de" + total);
// }

// Ejercicio 3: Registro para torneo gamer
// Crea un sistema de registro para un torneo gamer. El sistema debe:
// Solicitar al usuario:
// • Alias del jugador (prompt)
// • Edad (prompt)
// • Nombre del videojuego favorito (prompt)
// Validar con condicionales:
// • Que la edad sea un número válido (isNaN)
// • Que el alias no esté vacío
// • Que el tipo de todos los datos sea el esperado (typeof)
// • Que el jugador tenga al menos 16 años para poder registrarse
// Convertir los datos con los parseos adecuados:
// • Edad como parseInt()
// Mostrar en consola:
// • Un resumen del registro
// • Mensaje especial si el juego favorito es “Fortnite” o “Call of Duty”: "Juego popular"
// • Si el jugador no cumple la edad mínima: "No puedes participar en el torneo"
// let alias = prompt("Ingresa tú alias en el juego");
// let edad = prompt("Ingresa tu edad");
// let nombreJuego = prompt("Ingresa el nombre del juego favorito");

// if (isNaN(edad)) {
//     console.log("ERROR: Ingresa una edad válida");
// } else if (!alias || alias.trim() === "") {
//     console.log("ERROR: Ingresa un alias")
// } else {
//     edad = parseInt(edad);
//     console.log(typeof (alias));
//     console.log(typeof (edad));
//     console.log(typeof (nombreJuego));
//     if (edad < 16) {
//         console.log("No puedes participar en el torneo, debes tener minimo 16 años");
//     } else {
//         console.log("Registro completado con el alias de: " + alias + " con una edad de " + edad + "   y con el juego " + nombreJuego);
//         let juegoLower = nombreJuego.toLowerCase();
//         if (juegoLower === "fortnite" || juegoLower === "call of duty") {
//             console.log("Juego popular ");
//         }
//     }
// }

// Ejercicio 4: Validación de entrada a zona VIP
// Crea un sistema de validación de acceso a una zona VIP en un evento. El sistema debe:
// Solicitar al usuario:
// • Cuánto dinero tiene disponible (prompt)
// • Si es cliente Premium (sí/no, prompt)
// Validar con condicionales:
// • Que el dinero sea un número válido (isNaN)
// • Que el tipo de cada dato sea el esperado (typeof)
// • Que la respuesta del cliente premium esté en minúsculas y sea “sí” o “no”
// Convertir los datos con los parseos adecuados:
// • Dinero como parseFloat()
// Mostrar en consola:
// • Si puede acceder a la zona VIP:
// o Si tiene más de $200.000 o es cliente Premium: "Puedes acceder a la zona VIP"
// o Si no cumple ninguna: "Acceso denegado a zona VIP"
// let dineroDisponible= prompt("Ingresa cuanto dinero tienes disponible");
// let premium= prompt("Ingresa si eres usuario premium: Si/No");

// if (isNaN(dineroDisponible)){
//     console.log("ERROR: Ingresa una cantidad de dinero válida");
// }else{
//     dineroDisponible= parseFloat(dineroDisponible);
//     console.log(typeof dineroDisponible);
//     console.log(typeof premium);
//     premium= premium ? premium.trim().toLowerCase(): ""; // acá utilicé un operador terciario que es como un if/else pero en una linea. el .trim es para eliminar espacios
//     // y el tolowerCase es para pasar el dato ingresado a minusculas, y el : ""; es por si no escribio nada y queda una cadena vacía, eso evita errores
//     if (dineroDisponible>=200000 || premium=='si'){
//         console.log("Cumples con almenos un requisito, puedes acceder a la zona VIP");
//     }else{
//         console.log("Acceso a zona vip denegado");
//     }
// }

// Ejercicio 5: Registro y validación de código de estudiante
// Crea un programa que valide el registro de un estudiante a una plataforma educativa. El sistema debe:
// Solicitar al usuario:
// • Nombre del estudiante (prompt)
// • Edad (prompt)
// • Código institucional (prompt, debe ser un número de 6 dígitos)
// Validar con condicionales:
// • Que la edad y el código sean números válidos (isNaN)
// • Que el código tenga exactamente 6 cifras (por longitud)
// • Que los tipos de todos los datos sean correctos (typeof)
// Convertir los datos con los parseos adecuados:
// • Edad como parseInt()
// • Código como parseInt()
// Mostrar en consola:
// • Un resumen completo con nombre, edad, código
// • Si el código es inválido: "Código inválido. Debe tener 6 dígitos"
// • Si todo es válido: "Registro exitoso"
let nombre = prompt("Ingresa tù nombre");
let edad = prompt("Ingresa tu edad");
let codigo = prompt("Ingresa tu codigo institucional: debe tener 6 dígitos");
if (isNaN(edad) || isNaN(codigo)) {
    console.log("Ingresa una edad o un codigo institucional válido");
} else if (codigo.trim().length !== 6) {
    console.log("ERORR: El codigo institucional debe tener 6 digitos");
} else {
    edad = parseInt(edad);
    codigo = parseInt(codigo);
    console.log(typeof nombre);
    console.log(typeof edad);
    console.log(typeof codigo);
    console.log("Registro exitoso");
    console.log("El estudiante con nombre: " + nombre + " con una edad de: " + edad + " y un codigo institucional es: " + codigo);
}