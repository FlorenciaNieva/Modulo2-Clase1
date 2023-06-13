// Consigna:
// Crear un programa que pida ingresar una cantidad en minutos mediante un y muestre un mensaje con el resultado de la conversión en segundos.

let minutos = prompt ('Ingresar una cantidad de minutos');
let segundos = Number(minutos) * 60;
alert (`La conversión a segundos sería: ${segundos}s`);