// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); //El método .trim() elimina los espacios en blanco al principio y al final de una cadena.

    if (nombre !== "") {
        amigos.push(nombre);
        mostrarAmigos(); //Mostrar los amigos actualizados en pantalla
        console.log("Amigos:", amigos);
        input.value = ""; //Limpiar el imput
    } else {
        alert ("Por favor, inserte un nombre.");
    }
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos"); // selecciona la <ul> del HTML
    listaAmigos.innerHTML = ""; // limpia el contenido anterior

for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
/*
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio]

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado} ha sido sorteado 🎉</li>`;
}
    */

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay más amigos para sortear.");
        return;
    }

    // Elegir índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Eliminar el nombre del array
    amigos.splice(indiceAleatorio, 1); // elimina 1 elemento en la posición del índice

    // Mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML += `<li>${amigoSorteado} ha sido sorteado/a</li>`;

    // Actualizar la lista de amigos en pantalla
    mostrarAmigos();
}