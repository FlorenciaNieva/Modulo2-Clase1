let distancia = prompt ('Ingrese la distancia en kilometros');
let pie = Number(distancia) *60 / 5;
let bicicleta = Number(distancia) *60 / 10;
let auto = Number(distancia) *60 / 40;
alert(`Terminara el recorrido si va:
a pie en : ${pie}min
en bicicleta en: ${bicicleta}min
en auto en: ${auto}min
`)