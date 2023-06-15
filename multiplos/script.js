// Consigna:
// Necesitamos un programa que pida dos números con los siguientes mensajes respectivamente: Ingresá el primer número y Ingresá el segundo número.
// Con esta información, el programa deberá mostrar si el primer valor es múltiplo del segundo mediante el siguiente mensaje: El número {primerNumero} es múltiplo de {segundoNumero}: {resultado}

let primerNumero = prompt('Ingresá el primer número');
let segundoNumero = prompt('Ingresá el segundo número');
let resultado = Number(primerNumero) % Number(segundoNumero) == 0;
alert(`El número ${primerNumero} es múltiplo de ${segundoNumero}: ${resultado}`);