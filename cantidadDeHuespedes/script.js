// Consigna:
// Crear un programa que pida al usuario ingresar, de a uno por vez, cuántas habitaciones tiene un hotel para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar.

let habitacion2 = prompt ('Ingresá el número de habitaciones disponibles en el hotal para 2 personas');
let habitacion3 = prompt ('Ingresá el número de habitaciones disponibles en el hotel para 3 personas');
let habitacion4 = prompt ('Ingresá el número de habitaciones disponibles en el hotel para 4 personas');
let huespedes2 = Number(habitacion2) * 2;
let huespedes3 = Number(habitacion3) * 3;
let huespedes4 = Number(habitacion4) * 4;
let huespedesTotal = huespedes2 + huespedes3 +huespedes4;

alert (`El máximo de huéspedes que se pueden albergar en el hotel son ${huespedesTotal} personas.`);