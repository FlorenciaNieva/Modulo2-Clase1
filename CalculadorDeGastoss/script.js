//Consigna:
// Necesitamos un programa que pida ingresar cuanto dinero disponible tiene una persona, tres servicios que tiene que abonar y el monto de los mismos con los siguientes mensajes respectivamente:
// -¿Cuál es tu monto disponible?
// -¿Cuál es el nombre primer servicio?
// -¿Cuál es el monto del primer servicio?
// -¿Cuál es el nombre segundo servicio?
// -¿Cuál es el monto del segundo servicio?
// -¿Cuál es el nombre tercer servicio?
// -¿Cuál es el monto del tercer servicio?

// Con esta información, el programa deberá mostrar una lista con todos los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda mediante el mensaje : Los servicios a pagar son {servicio1} de $ {montoServicio1}, {servicio2} de $ {montoServicio2}, servicio3 de $ {montoServicio3}, queda disponible un saldo de $ {saldoRestante}.

let saldo = prompt('¿Cuál es tu monto disponible?');
let servicio1 = prompt('¿Cuál es el nombre primer servicio?');
let montoServicio1 = prompt('¿Cuál es el monto del primer servicio?');
let servicio2 = prompt('¿Cuál es el nombre segundo servicio?');
let montoServicio2 = prompt('¿Cuál es el monto del segundo servicio?');
let servicio3 = prompt('¿Cuál es el nombre tercer servicio?');
let montoServicio3 = prompt('¿Cuál es el monto del tercer servicio?');
let saldoRestante = Number(saldo) - Number(montoServicio1) - Number(montoServicio2) - Number(montoServicio3);
alert(`Los servicios a pagar son ${servicio1} de $ ${montoServicio1}, ${servicio2} de $ ${montoServicio2}, ${servicio3} de $ ${montoServicio3}, queda disponible un saldo de $ ${saldoRestante}`);