// alert("Dudosa prosedencia");

// Array o arreglo

var colores = ["Azul", "Rojo", "Amarillo", "Verde"]
console.log(colores);
console.log(colores[0]);
console.log(colores[2]);

colores[4] = "Morado"
console.log(colores);

//push ----------------> suma un elemento al final del arreglo
colores.push("Rosa");
console.log(colores);
colores.push("Cafe");
console.log(colores);

//pop ---------> borra el ultimo elemento
colores.pop();
console.log(colores);

//splice ------------> borra elementos especificos se hace con dos valore el primero numero es el valor de donde se quiere comenzar a eliminar y el segundo especifica cuantos numeros quiere borrar y el tercer valor quiere decir por cual lo vas a reemplazar
colores.splice(2,1,"Negro","Blanco");
console.log(colores);

/*             posicion, elemento a borrar, sustituirlo
colores.splice(2,1,"Cafe");
*/

//objetos - object

var persona = {
    nombre : "Waldo",
    edad : "20",
    telefono : "87906573",
    direccion : "El Salvador",
    musica : ["Rock", "regaeton", "salsa", "K-pop"],
    peliculas : {
        accion : ["MI", "Ronning", "Duro de Matar"],
        drama : ["Titanic", "Match point"],
        romvom : ["La propuesta", "Yo antes de ti", "one day", "casanovias"],
        terror : {
            gore : "Destino final",
            slasher : "halloween",
            vampiros : "crepusculo"
        }
    }
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.nombre, persona.edad);
console.log(persona.musica[3]);
console.log(persona.peliculas.accion[2]);
console.log(persona.peliculas.terror.vampiros);