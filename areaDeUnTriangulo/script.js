// Consigna:
// Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.

let base = prompt ('Ingrese la base del triángulo');
let altura = prompt ('Ingrese la altura del triángulo');
let area = Number(base) * Number(altura) / 2;
alert (`El área del triángulo es: ${area}`);