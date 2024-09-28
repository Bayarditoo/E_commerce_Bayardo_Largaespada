function envolverCodigo () { const titulo = document.querySelector("h1");
  titulo.innerText = "Productos";

const Prod = [];
for (let i = 1; i <= 4; i++) {
  const Card = `
        <div class="card mb-3" style="width: 18rem;">
            <a href="#"><img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;" alt="..."></a>
            <div class="card-body">
                    <h5 class="card-title">Producto ${i}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary bg-secondary border-0">Ver mas:</a>
            </div>
        </div>`;

  Prod.push(Card);
}
document.querySelector("section").innerHTML = Prod.join().replaceAll(",", "");}
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

const user = {
  name: `Bayardo`,
  old: 16,
  country: `Nicaragua`,
  hobby : `Playing call of duty`,
  diceMentiras : function () {
    console.log(`Bayardo dice muchas mentiras.`);
  }
};
user.diceMentiras();
console.log(user);
console.log(`Mi nombre es: ${user.name}`);
console.log(`I'm ${user.old} years old`);
console.log(`My country is ${user.country}`);
console.log(`My hobby is ${user.hobby}`);