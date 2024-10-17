function creandoWeb() {
  let respuesta = prompt(
    "Que deseas crear: 1. Button, 2. Input, 3. TextArea 4. h1, 5. p"
  );
  switch (respuesta) {
    case 1:
      let titulo = String(prompt("Ingrese el titulo: "));
      const h1 = document.createElement("h1");
      h1.innerHTML = `${titulo}`;
      document.body.append(h1);
      creandoWeb();
    case 2:
      let texto = String(prompt("Ingrese el texto del boton: "));
      const boton = document.createElement("button");
      boton.innerHTML = `${texto}`;
      document.body.append(boton);
      creandoWeb();
    case 3:
      let textoArea = String(prompt("Ingrese el texto: "));
      const textArea = document.createElement("textarea");
      textArea.innerHTML = `${textoArea}`;
      document.body.append(textArea);
      creandoWeb();
    case 4:
      const input = document.createElement("input");
      input.innerHTML = ``;
      document.body.append(input);
      creandoWeb();
    case 5:
      let parrafo = String(prompt("Ingrese texto: "));
      const p = document.createElement("p");
      p.innerHTML = `${parrafo}`;
      document.body.append(p);
      creandoWeb();
  }
}

creandoWeb();
