/* Append sirve para poner en el DOM el elemento hasta abajo, y preprend sirve para poner el elemento creado al inicio.
let createElement = document.createElement(`h2`);
createElement.innerText = `Practica create`;
document.body.append(createElement);
Remove sirve para eliminar elemtentos del DOM
let deleteRemove = document.querySelector(`h2`);
deleteRemove.remove();*/

function agregElements() {
  let preguntarElement = prompt(`¿Qué deseas crear?
  1: Button
  2: Input
  3: TextArea
  4: h1
  5: p`);
  switch (preguntarElement) {
    case`1`:
      let preguntarButton = prompt(`Ingresa el título del botón:`);
      const boton = document.createElement(`button`);
      boton.innerHTML = preguntarButton;
      document.body.append(boton);
      break;
    case`2`:
      const input = document.createElement(`input`);
      input.placeholder =`Escribe aquí...`;
      document.body.append(input);
      break;
    case`3`:
      const textArea = document.createElement(`textarea`);
      textArea.placeholder =`Escribe un texto largo...`;
      document.body.append(textArea);
      break;
    case`4`:
      let titulo = prompt(`Ingresa el título del h1:`);
      const h1 = document.createElement(`h1`);
      h1.innerHTML = titulo;
      document.body.prepend(h1);
      break;
    case`5`:
      let parrafo = prompt(`Ingresa el contenido del párrafo:`);
      const p = document.createElement(`p`);
      p.innerHTML = parrafo;
      document.body.append(p);
      break;
    default:
      alert(`Por favor, ingresa una opción válida.`);
  }
  let continuar = confirm(`¿Deseas agregar otro elemento?`);
  if (continuar) {
    agregElements();
  }
};

/* Metodo .Join() */
/*let billeteColchon = [1,2,3,4,5];
let arrJoin = billeteColchon.join(".");
console.log(arrJoin);*/

/* Metodo .concat() */
/*let arreglo = [1,2,3];
console.log(arreglo.concat(4,5,6,));
console.log(arreglo.concat(`Uno`,`Dos`,`Tres`));*/

/*  Metodo .indexOf() */

/*let pruebaArray = ['Papa', 'Naranja', 'Cebolla'];
let arrIndex = pruebaArray.indexOf('Papa');
if (arrIndex === 0) { // Comparamos con el índice 0
  console.log('Cobrar plata de mamelo');
} else {
  console.log('No hay plata de mamelo');
};*/

/* Metodo .includes() */

/*const arrayInclude = [1,2,3,4];
console.log(arrayInclude.includes(2));
console.log(arrayInclude.includes(5));*/

/*Exercise

const arrayExercise = [1, 2, 3, 4];
let preguntarUser = Number(
  prompt(
    `Como desear ver la lista 1: Mostrar la lista, 2 : Agregar un elemento, 3: Invertir la vista.`
  )
);

function operacion() {
  if (preguntarUser == 1) {
    console.log(arrayExercise);
  } else if (preguntarUser == 2) {
    let askElement = Number(prompt("Ingrese el elemento a agregar"));
    console.log(arrayExercise.concat(askElement));
    if (arrayExercise.includes(askElement)) {
      console.log(`Ese elemento ya existe`);
    }
  } else if (preguntarUser == 3) {
    console.log(arrayExercise.reverse());
  };
};
operacion();*/

/*Class 15 Metodos de Arrays 2 !!!!!!!!!!*/

/*const arreglo = [`Pedro`,`Maria`];
const happy = arreglo.map((persona) => `(:${persona}`);
console.log(happy);
const suma = function (a,b) {
  return a + b;
};
const sumaFlecha = (a,b) => a + b;
console.log(sumaFlecha(5,5));
console.log(suma(5,5));*/

/*Metodo .map() */
/*const sad = [`Ezequiel`, `Martin`, `Bayardo`];
const happy = sad.map((elemento) => `Su nombre es: ${elemento})`);
console.log(happy);*/

/* Metodo .forEach() */

/*const num = [3, 4, 5];
num.forEach((num) => console.log(num - 1));

/* 
Metodo .filter() !!!!!, el metodo filter devuelve un nuevo array con los elementos que cumplen la condicion 
*//*
const estudiantes = [
  { name: `Bayardo`, calificacion: 5 },
  { name: `Elias`, calificacion: 6 },
  { name: `Benjamin`, calificacion: 8 },
];
*/
/* 
const aprobaron = estudiantes.filter(
  (estudiante) => estudiante.calificacion >= 6
);
*/

/*
Metodo .find()!!!!!, el metodo find devuelve el primer elemento que cumple la condicion 
*/
/*
const pasaron = estudiantes.find((estudiante) => estudiante.calificacion > 5);
console.log(aprobaron);
console.log(pasaron);
*/

/*
Metodo .every()!!!!!, el metodo every devuelve true si todos los elementos cumplen la condicion 
*/
/*
const every = estudiantes.every((estudiantes) => estudiantes.calificacion > 4);
console.log(every);
*/

/* 
Metodo.reduce()!!!!!, el metodo reduce devuelve un valor que es la reduccion de todos los elementos en un solo valor 
*/
/*
const reduce = estudiantes.reduce(
  (acumulador, actual) => acumulador + actual.calificacion,
  0
);
console.log(reduce);
*/

/* 
Metodo .sort() el metodo sort devuelve un nuevo array ordenado 
*/
/*
const sort = estudiantes.sort((a, b) => a.calificacion - b.calificacion);
console.log(sort);
*/

/* 
Clase 16 
*/

/* 
.toUpperCase(): el metodo toUpperCase devuelve una copia del string en mayusculas 
*/
/*
console.log("Hola".toUpperCase());
*/

/* 
.toLowerCase(): el metodo toLowerCase devuelve una copia del string en minusculas 
*/
/*
console.log("Hola".toLowerCase());
*/

/* 
.split: Crea un array usando un caracter separador a partir de un string.
En este caso el separador es el espacio.
*/
/*
const urlSearch = `?prod=1`;
const arrayFromUrl = urlSearch.split(`=`);
console.log(arrayFromUrl[1]);
*/

/* 
.replaceAll(): Reemplaza todas las ocurrencias de un carácter (o patrón de caracteres)
por otra sin afectar al string original.
*/
/*
let gato = `goto`;
console.log(gato.replaceAll(`o`, `a`));
*/

/* 
length: Devuelve la longitud del string.
*/
/*
let phrase = `Esto es una frase.`;
console.log(phrase.length);
*/

/* Metodos number */

/* IsNan
let nanny = isNaN;
let cuatro = 5;
console.log(isNaN(nanny));
console.log(Number.isNaN(cuatro));*/
/*.parseFloat() se usa para convertir un string en un numero.
let four = `5.34`;
console.log(Number.parseFloat(four));*/

/* Metodos obejct */

/* Metodo object .keys() devuelve un array con las claves de un objeto
const objectKeys = {
  name: `Bayardo`,
  age: 30,
  profession: `Web Developer`,
};
console.log(Object.keys(objectKeys));*/

/* Metodo .values() devuelve un array con los valores de un objeto*/
/*const objectValues = {
  name: `Bayardo`,
  age: 16,
  profession: `Web Developer`,
};
const arrayValues = Object.values(objectValues);
console.log(arrayValues);*/