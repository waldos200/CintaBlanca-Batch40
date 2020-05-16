function saludo() {
    console.log("Hola!");
}

saludo()

function suma(a, b) {
    return a + b
}

suma(10, 50)
suma(5, 9)

console.log(suma(suma(10, 10), 50));

function suma2(a, b, c) {
    console.log(a + b + c);
}

suma2(10, 20, 5)

// variables

let despedida = 'Bye'
console.log(despedida);

despedida = 10
console.log(despedida);

// variable constate no se puede cambiar el valor
const numero1 = 15
console.log(numero1);

// arrow function o funciones de flecha ECMAS5
const multiplicacion = (x , y) => {
    return x * y
}

console.log(multiplicacion(10, 5)); 

const areacuadrado = (l) => {
    return l**2
}
console.log(areacuadrado(5));

const areaRectangulo = (b, a) => {
    return b * a
}
console.log(areaRectangulo(6,9));

const areaTriangulo = (b, h) => {
    return (b * h)/2
}
console.log(areaTriangulo(3,4));