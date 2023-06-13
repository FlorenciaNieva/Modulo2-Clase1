// Consigna:
// Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.

let nombre = prompt ('Ingresá tu nombre', 'nombre');
let apellido = prompt ('Ingresá tu apellido', 'apellido');
let edad = prompt ('Ingresá tu edad', 'edad');
let nacionalidad = prompt ('Ingresá tu nacionalidad', 'nacionalidad');
let documento = prompt ('Ingresá tu documento', 'documento');
alert (`Nuevo usuario agregado al sistema: 
Nombre: ${nombre}
Apellido: ${apellido}
Edad: ${edad}
Nacionalidad: ${nacionalidad}
Documento: ${documento}
`)