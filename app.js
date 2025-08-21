
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos =[];

function agregarAmigo(){
    let nombres = document.getElementById('amigo').value;
    if(nombres===""){
    alert("Ingrese un nombre valido");
    return;
}
    if(listaAmigos.includes(nombres)){
    alert("Nombre repetido, ingrese otro por favor");
    return;
    }
    listaAmigos.push(nombres);
   
    mostrarLista();
    limpiarCaja();
   

}

 

function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    listaAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
        })

}

function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo').value='';}

function sortearAmigo(){
    let sorteo=document.getElementById("resultado");
    let lista = document.getElementById("listaAmigos");
    let indiceAleatorio=Math.floor(Math.random()*listaAmigos.length);
    let nombreAleatorio= listaAmigos[indiceAleatorio];
    lista.innerHTML="";
    sorteo.textContent = (`El nombre del amigo secreto es : ${nombreAleatorio}`);
    listaAmigos.length = 0;
    
}    

