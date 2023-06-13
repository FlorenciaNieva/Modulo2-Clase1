// Consigna:
// Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y el título de tres canciones, y al finalizar se muestre un mensaje que diga, p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'".

let nombrePlaylist = prompt ('Ingresá el nombre de la Playlist');
let primeraCancion = prompt ('Ingresá el título de la primera canción');
let segundaCancion = prompt ('Ingresá el título de la segunda canción');
let terceraCancion = prompt ('Ingresá el título de la tercera canción');
alert (`Se ha creado la Playlist '${nombrePlaylist}' con las canciones '${primeraCancion}', '${segundaCancion}', '${terceraCancion}'.`)