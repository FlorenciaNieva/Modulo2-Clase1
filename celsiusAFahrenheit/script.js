// Consigna:
// Necesitamos un programa que pida ingresar una cantidad de grados Celsius, mediante el siguiente mensaje: Ingresá una cantidad de grados Celsius
// Con esta información, el programa deberá mostrar la conversión de grados Celsius a grados Fahrenheit con el mensaje: La conversión de {grados} grados Celsius a Fahrenheit es: {resultado}

let grados = prompt('Ingresá una cantidad de grados Celsius');
let resultado = Number(grados) * 1.8 + 32;
alert(`La conversión de ${grados} grados Celsius a Fahrenheit es: ${resultado}`);