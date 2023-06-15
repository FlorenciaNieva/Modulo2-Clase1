// Consigna:
// Necesitamos un programa que pida ingresar la orden de compra de un local, para eso se deberá ingresar la cantidad que se desea comprar de tres productos distintos(mouse, teclado y auriculares) y la cantidad de cuotas de la compra mediante los siguientes mensajes respectivamente:

// Ingresá la cantidad de mouse que deseas comprar
// Ingresá la cantidad de teclados que deseas comprar
// Ingresá la cantidad de auriculares que deseas comprar
// Ingresá la cantidad de cuotas
// Tenemos que: * Un mouse sale $400. * El teclado $800. * Los auriculares $1500.

// Con esta información, el programa deberá mostrar un mensaje con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas con el mensaje: 'El detalle de la compra es: mouse {cantidadDeMouse} x $ 400 $ {precioTotalDeMouse}, teclado {cantidadDeTeclados} x $ 800 $ {precioTotalDeTeclados}, auriculares {cantidadAuriculares} x $ 1500 $ {precioTotalAuriculares}. El total es $ {precioTotal} en {cuotas} cuotas de $ {precioPorCuota}'.

let cantidadDeMouse = prompt('Ingresá la cantidad de mouse que deseas comprar');
let cantidadDeTeclados = prompt('Ingresá la cantidad de teclados que deseas comprar');
let cantidadDeAuriculares = prompt('Ingresá la cantidad de auriculares que deseas comprar');
let cuotas = prompt('Ingresá la cantidad de cuotas');
let precioTotalDeMouse = Number(cantidadDeMouse) * 400;
let precioTotalDeTeclados = Number(cantidadDeTeclados) * 800;
let precioTotalAuriculares = Number(cantidadDeAuriculares) * 1500;
let precioTotal = precioTotalDeMouse + precioTotalDeTeclados + precioTotalAuriculares;
let precioPorCuota = precioTotal / Number(cuotas);
alert(`El detalle de la compra es: mouse ${cantidadDeMouse} x $ 400 $ ${precioTotalDeMouse}, teclado ${cantidadDeTeclados} x $ 800 $ ${precioTotalDeTeclados}, auriculares ${cantidadDeAuriculares} x $ 1500 $ ${precioTotalAuriculares}. El total es $ ${precioTotal} en ${cuotas} cuotas de $ ${precioPorCuota}`);