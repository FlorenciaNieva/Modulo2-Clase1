//Consigna:
//Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano distintas velocidades para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).

let distancia = prompt ('Ingrese la distancia en kilometros');
let pie = Number(distancia) *60 / 5;
let bicicleta = Number(distancia) *60 / 10;
let auto = Number(distancia) *60 / 50;
alert(`Terminara el recorrido si va:
a pie en : ${pie}min
en bicicleta en: ${bicicleta}min
en auto en: ${auto}min
`)