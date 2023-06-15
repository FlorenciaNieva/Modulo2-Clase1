//Consigna:
// Necesitamos un programa que pida ingresar una cantidad de segundos , con el siguiente mensaje: Ingresá una cantidad de segundos
// Con esta información, el programa deberá mostrar la conversión en horas, minutos y segundos que corresponde a esa cantidad mediante el mensaje: {segundosIngresados} segundos son = {horas} horas, {minutos} minutos y {segundos} segundos

let segundosIngresados = prompt('Ingresá una cantidad de segundos');
let horas = Math.floor(Number(segundosIngresados) / 3600);
let minutos = Math.floor(Number(segundosIngresados % 3600) / 60);
let segundos = segundosIngresados % 60;
alert(`${segundosIngresados} segundos son = ${horas} horas, ${minutos} minutos y ${segundos} segundos`);