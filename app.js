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

function sortearAmigo() {
      if (amigos.length === 0) {
        alert("Debes agregar amigos"); 
        return;
      } 
       let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
       let resultado = document.getElementById("resultado");
       resultado.innerHTML = `El amigo secreto es:  ${amigoSecreto}`;
      
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}
