document.addEventListener("DOMContentLoaded", () => {
    let nombres = [];

    window.agregarAmigo = function () {
        const input = document.getElementById("amigo");
        const nombre = input.value.trim();
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }
        nombres.push(nombre);
        actualizarLista();
        input.value = "";
    };

    function actualizarLista() {
        const lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        nombres.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            li.classList.add("nombre");
            lista.appendChild(li);
        });
    }

    window.sortearAmigo = function () {
        if (nombres.length === 0) {
            alert("Agrega al menos un nombre antes de sortear.");
            return;
        }
        const indice = Math.floor(Math.random() * nombres.length);
        document.getElementById("resultado").innerHTML = `<li>Amigo sorteado: ${nombres[indice]}</li>`;
    };
});
