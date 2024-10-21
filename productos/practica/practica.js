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
