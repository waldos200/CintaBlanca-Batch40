let titulo = document.getElementById("titulo")
let parrafo = document.getElementById("parrafo")
let boton = document.getElementById('boton')
let texto = document.getElementById('texto')
let respuesta = document.getElementById('respuesta')

const cambio = () => {
    titulo.innerHTML = 'Titulo cambiado'
    parrafo.innerHTML = 'Parrafo cambiado'
    respuesta.innerHTML = texto.value //el .value sirve para enseñar en la pantalla lo que se escribe
}

boton.addEventListener('click', cambio)

