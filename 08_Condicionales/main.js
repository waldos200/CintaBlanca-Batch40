

// if(condicion){
//     accion que se ejecuta si se cumple la condicion
// } else {
//      accion que se ejecuta si no se cumple a condicion
// }

// Ejercicicos 
// let num1 = 10;

// if (num1 === 10) {
//     console.log('Es verdadero');
// } else {
//     console.log('Es falso');
// }

// let pregunta = Number(prompt('ingresa un numero'));

// let num2 = pregunta % 2;

// if (num2 === 0) {
//     console.log('es par');
// } else if (num2 === 1){
//     console.log('es impar');
// } else {
//     console.log('Error');
// }

// ejercicio de la licencia

let edad = Number(prompt('Ingresa tu edad'));

if (edad >= 18 && edad <= 80) {
    console.log('Puedes conducir');
} else if (edad < 16 || edad > 80 ) {
    console.log('No puedes conducir');
} else if (edad === 16 || edad === 17) {
    console.log('Puedes sacar tu permiso');
} else {
    console.error('Datos incorrectos ---- Ingresa solo numeros');
}

