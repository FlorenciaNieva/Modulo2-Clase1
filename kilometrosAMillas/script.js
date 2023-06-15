// Consigna:
// Necesitamos un programa que pida una cantidad de kilómetros mediante el mensaje: Ingresá una cantidad de kilómetros
// Con esta información, el programa deberá mostrar el resultado de la conversión de kilómetros a millas mediante el siguiente mensaje: El resultado de la conversión de {kilometros} kilometros a millas es: {resultado}

let kilometros = prompt('Ingresá una cantidad de kilómetros');
let resultado = Number(kilometros) * 0.621371;
alert(`El resultado de la conversión de ${kilometros} kilometros a millas es: ${resultado}`);