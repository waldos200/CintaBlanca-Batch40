let preguntaNom = document.getElementById('preguntaNom')
let preguntaDirec = document.getElementById('preguntaDirec')
let preguntaTelefono = document.getElementById('preguntaTelefono')
let preguntaPizza = document.getElementById('preguntaPizza')
//cards
let textoNombre =document.getElementById('textoNombre')
let textoDirec =document.getElementById('textoDirec')
let textoTelefono =document.getElementById('textoTelefono')
let textoPizza =document.getElementById('textoPizza')
//boton
let boton = document.getElementById('boton')
//card
let card = document.getElementById('card')
let piña = document.getElementById('piña')
let pollo = document.getElementById('pollo')

const ordenar = () => {
    textoNombre.innerHTML = 'Nombre: ' + preguntaNom.value
    textoDirec.innerHTML = 'Direccion: ' + preguntaDirec.value
    textoTelefono.innerHTML = 'Telefono: ' + preguntaTelefono.value
    // textoPizza.innerHTML = 'Pizza: ' + preguntaPizza.value
    // aparece la card
    card.classList.remove('none')

    let pizzaReal = preguntaPizza.value
    let comprarPizza = pizzaReal.toLowerCase()

    if(comprarPizza === 'si'){
        piña.innerHTML = piña.classList.remove('none_piña')
        pollo.innerHTML = pollo.classList.add('none_pollo')
    }else if(comprarPizza === 'no') {
        pollo.innerHTML = pollo.classList.remove('none_pollo')
        piña.innerHTML = piña.classList.add('none_piña')
    }else
        textoPizza.innerHTML = 'Datos incorrectos'
    }

boton.addEventListener('click', ordenar)

