let nombre = document.getElementById("nombre")
let direccion = document.getElementById("direccion")
let telefono = document.getElementById('telefono')
let pizza = document.getElementById('pizza')
let nuevoNom = document.getElementById('nuevoNom')
let boton = document.getElementById('boton')
let cambioD = document.getElementById('cambioD')
let cambioT = document.getElementById('cambioT')
let cambioP = document.getElementById('cambioP')
let carta = document.getElementById('carta')
let piña = document.getElementById('piña')
let pollo = document.getElementById('pollo')

const cambio = () => {
    nuevoNom.innerHTML = 'Nombre: ' + nombre.value
    cambioD.innerHTML = 'Direccion: ' + direccion.value
    cambioT.innerHTML = 'Telefono: ' + telefono.value
    // cambioP.innerHTML = pizza.value
    carta.classList.remove('none')

    let pizzaReal = pizza.value
    let comprarPizza = pizzaReal.toLowerCase()

    if (comprarPizza === 'si') {
        piña.innerHTML = piña.classList.remove('none_piña')
        pollo.innerHTML = pollo.classList.add('none_pollo')
    } else if (comprarPizza === 'no') {
        pollo.innerHTML = pollo.classList.remove('none_pollo')
        piña.innerHTML = piña.classList.add('none_piña')
    } else
        textoPizza.innerHTML = 'Datos incorrectos'
}

boton.addEventListener('click', cambio)