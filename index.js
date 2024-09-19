const titulo = document.querySelector("h1");
titulo.innerText = "Productos"

const Prod = [];
for (let i = 1; i <= 4; i++) {

    const Card = `
        <div class="card mb-3" style="width: 18rem;">
            <a href="#"><img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;" alt="..."></a>
            <div class="card-body">
                    <h5 class="card-title">Producto ${i}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary bg-secondary border-0">Agregar</a>
            </div>
        </div>`

        Prod.push(Card);
        }   document.querySelector('section').innerHTML = Prod.join().replaceAll("," , "");

let i = 0;
    while (i <= 3) {
        if (i == 2) {
            break;
        }
        console.log(i);
        i++;
    }