function envolverCodigo() {
  const titulo = document.querySelector("h1");
  titulo.innerText = "Productos";

  const Prod = [];
  for (let i = 1; i <= 4; i++) {
    const Card = `
        <div class="card mb-3" style="width: 18rem;">
            <a href="#"><img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;" alt="..."></a>
            <div class="card-body">
                    <h5 class="card-title">Producto ${i}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="./productos/producto.html" class="btn btn-primary bg-secondary border-0">Ver más:</a>
            </div>
        </div>`;

    Prod.push(Card);
  }
  document.querySelector("main").innerHTML = Prod.join().replaceAll(",", "");
}
envolverCodigo();

/*function sacar() {
    for (let i = 1; i <= 4; i++) {
        console.log(`Tu Numero es: ${i}`);
    }
}
sacar();*/

/*function suma(numero1, numero2) {
  return numero1 + numero2;
}
let resultado = suma(5, 5);
console.log(resultado);

const loro = (a) => {
  const b = a + 1;
  return b;
};
console.log(loro(10));*/

/*const user = {
  name: `Bayardo`,
  old: 16,
  country: `Nicaragua`,
  hobby: `Playing call of duty`,
  diceMentiras: function () {
    console.log(
      `Hola, mi nombre es: ${user.name}, mi edad es ${user.old}, mi nacionalidad es ${user.country}, mi pasatiempo es: ${user.hobby}`
    );
  },
};
console.log(`Mi nombre es: ${user.name}`);
console.log(`I'm ${user.old} years old`);
console.log(`My country is ${user.country}`);
console.log(`My hobby is ${user.hobby}`);
if (`name` in user) {
  console.log(`See`);
} else {
  console.log(`Noo`);
};*/
/*const barca = {
  nombreEquipo: "barca",
  integrantes: 14,
  porteros: 7,
};
const madrid = {
  nombreEquipo: "madrid",
  integrantes: 18,
  porteros: 9,
};

let preguntarEquipo = prompt("¿Qué equipo quieres ver?");

if (preguntarEquipo === `barca`) {
  console.table(barca);
} else if (preguntarEquipo === `madrid`) {
  console.table(madrid);
};*/
const nose = {
  user: `Bayardo`,
  years: 16,
  nationality: `Nicaragua`,
};
if (`user` in nose) {
  console.log(`Si ahi esta`);
};