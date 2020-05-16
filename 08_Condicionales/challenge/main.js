let jugador1 = prompt('Elige entre piedra, papel o tijera').toLowerCase();
let jugador2 = prompt('Elige entre piedra, papel o tijera').toLowerCase();

if (jugador1 === 'papel' && jugador2 === 'papel') {
    console.log('Es un empate, vuelve a intentarlo');
} else if (jugador1 === 'piedra' && jugador2 === 'piedra') {
    console.log('Es un empate, vuelve a intentarlo');
} else if (jugador1 === 'tijera' && jugador2 === 'tijera') {
    console.log('Es un empate, vuelve a intentalo');
} else if (jugador1 === 'papel' && jugador2 === 'piedra') {
    console.log('El jugador uno gana');
} else if (jugador1 === 'papel' && jugador2 === 'tijera') {
    console.log('El jugador dos gana');
} else if (jugador1 === 'piedra' && jugador2 === 'papel') {
    console.log('El jugador dos gana');
} else if (jugador1 === 'piedra' && jugador2 === 'tijera') {
    console.log('El jugador uno gana'.toUpperCase);
} else if (jugador1 === 'tijera' && jugador2 === 'papel') {
    console.log('El jugador uno gana');
} else {
    console.error('Tiene que poner piedra, papel o tijera no numeros');
}
