const menu = [
  {
    texto: "Productos",
    href: "/E-Commerce-Bayardo-Largaespada/productos/producto.html",
  },
  {
    texto: "Pagina principal",
    href: "/E-Commerce-Bayardo-Largaespada/index.html",
  },
  { texto: "Contactame", href: "/" },
];

let menuHtml = [];
for (const nav of menu) {
  menuHtml.push(`<a class="nav-link p-2" href="${nav.href}">${nav.texto}</a>`);
}

document.querySelector("header").innerHTML = menuHtml.join("");

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