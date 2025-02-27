// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreIngresado = document.getElementById("amigo").value;

    if (nombreIngresado === ""){
        alert("Porfavor, inserte un nombre")
    }else{
    amigos.push(nombreIngresado);
    console.log(amigos);
    }
    limpiarCampo();
    actualizarAmigos();
}

function limpiarCampo() {
    document.querySelector("#amigo").value = "";
}

function actualizarAmigos() {
   let listaAmigos = document.getElementById("listaAmigos");
     listaAmigos.innerHTML = "";
     amigos.forEach(nombreIngresado => {
        const lista = document.createElement("li");
        lista.textContent = nombreIngresado;
        listaAmigos.appendChild(lista);
     });
     
}
