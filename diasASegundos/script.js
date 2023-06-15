// Consigna:
// Necesitamos un programa que pida una cantidad de días con el siguiente mensaje: Ingresá una cantidad de días por favor.
// El programa deberá mostrar el resultado de la conversión de los días a segundos mediante el mensaje: El resultado de la conversión de {dias} días a segundos es: {resultado}

let dias = prompt('Ingresá una cantidad de días por favor');
let resultado = Number(dias) *  86400;
alert(`El resultado de la conversión de ${dias} días a segundos es: ${resultado}`);