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
}

function limpiarCampo() {
    document.querySelector("#amigo").value = "";
}