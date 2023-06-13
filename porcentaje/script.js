//Consigna:
//Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. Devolver un mensaje muestre el porcentaje de dicho número.

let numero = prompt ('Ingrese el número del que quiere sacar el porcentaje');
let porcentaje = prompt ('Ingrese el número de porcentaje que se desea obtener');
let resultado = Number(numero) * Number(porcentaje) / 100;
alert (`El ${porcentaje}% de ${numero} es: ${resultado}`);