//Consigna:
//Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho de un rectángulo, calcular su perímetro y mostrarlo en un mensaje.

let ancho = prompt ('Ingrese el ancho del rectángulo');
let altura = prompt ('Ingrese la altura del rectángulo');
let perimetro = Number(ancho) * 2 + Number(altura) * 2;
alert (`El perímetro del rectángulo es de ${perimetro}`)