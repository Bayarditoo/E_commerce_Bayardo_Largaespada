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

function obtenerEstacion() {
  let dia = parseInt(prompt("Introduce el dia:"));
  let mes = parseInt(prompt("Introduce el mes:"));
  let año = parseInt(prompt("Introduce el año:"));

  let estacion;
  if ((mes == 12 && dia >= 21) || (mes == 1) || (mes == 2) || (mes == 3 && dia < 21)) {
      estacion = "Invierno";
  } else if ((mes == 3 && dia >= 21) || (mes == 4) || (mes == 5) || (mes == 6 && dia < 21)) {
      estacion = "Primavera";
  } else if ((mes == 6 && dia >= 21) || (mes == 7) || (mes == 8) || (mes == 9 && dia < 21)) {
      estacion = "Verano";
  } else if ((mes == 9 && dia >= 21) || (mes == 10) || (mes == 11) || (mes == 12 && dia < 21)) {
      estacion = "Otoño";
  }


  let resultado = `La fecha ${dia}/${mes}/${año} corresponde a la estacion: ${estacion}`;
  alert(resultado);
}
obtenerEstacion();
