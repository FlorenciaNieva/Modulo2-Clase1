// Consigna:
// Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.

let primeraEscala = prompt ('Ingrese la primera escala de su vuelo')
let duracionPrimeraEscala = prompt ('Ingrese la duración de la primera escala en minutos');
let segundaEscala = prompt ('Ingrese la segunda escala de su vuelo')
let duracionSegundaEscala = prompt ('Ingrese la duración de la segunda escala en minutos');
let terceraEscala = prompt ('Ingrese la tercera escala de su vuelo')
let duracionTerceraEscala = prompt ('Ingrese la duración de la tercera escala en minutos');
let duracionTotal = Number(duracionPrimeraEscala) + Number(duracionSegundaEscala) + Number(duracionTerceraEscala)
alert (`
La primera escala es en ${primeraEscala} y su duración es de ${duracionPrimeraEscala}min.
La segunda escala es en ${segundaEscala} y su duración es de ${duracionSegundaEscala}min.
La tercera escala es en ${terceraEscala} y su duración es de ${duracionTerceraEscala}min.
La duración total del vuelo es de ${duracionTotal}min.
`)