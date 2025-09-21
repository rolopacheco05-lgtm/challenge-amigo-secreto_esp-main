let nombres = [];

function agregarAmigo() {
  let input = document.getElementById("inputNombre");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  nombres.push(nombre);
  input.value = "";
  mostrarAmigos();
}

function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < nombres.length; i++) {
    let li = document.createElement("li");
    li.textContent = nombres[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (nombres.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  let indice = Math.floor(Math.random() * nombres.length);
  let sorteado = nombres[indice];

  document.getElementById("resultado").innerHTML = `<p>Amigo sorteado: <strong>${sorteado}</strong></p>`;
}