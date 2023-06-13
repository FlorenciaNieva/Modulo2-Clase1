// Consigna:
// Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento1 Total: 10", "Incremento2 Total: 15", "Incremento3 Total: 20", etc.).

let partida = prompt ('Ingrese un número de partida');
let incremento = prompt ('Ingrese la cantidad que quiere que vaya incrementando');
let incremento1 = Number(partida) + Number(incremento);
let incremento2 = Number(incremento1) + Number(incremento);
let incremento3 = Number(incremento2) + Number(incremento);
let incremento4 = Number(incremento3) + Number(incremento);
let incremento5 = Number(incremento4) + Number(incremento);
alert (`Número de partida: ${partida}
Incremento: ${incremento}`);
alert (`Incremento 1
Total: ${incremento1}`);
alert (`Incremento 2
Total: ${incremento2}`);
alert (`Incremento 3
Total: ${incremento3}`);
alert (`Incremento 4
Total: ${incremento4}`);
alert (`Incremento 5
Total: ${incremento5}`);