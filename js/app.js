let listaDeAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo").value;
    let amigosIncluidos = document.getElementById("lista-amigos");    

    if ((!isNaN(nomeAmigo)) || (nomeAmigo === "")){
        alert("Insira um nome válido.")
        document.getElementById("nome-amigo").value = "";
        return;
    }

    listaDeAmigos.push(nomeAmigo);
    if (amigosIncluidos.textContent === "") {
        amigosIncluidos.textContent = nomeAmigo;
    } else {
        amigosIncluidos.textContent += `, ${nomeAmigo}`;
    }
    
    document.getElementById("nome-amigo").value = "";
}

function sortear() {
    let listaSorteio = document.getElementById("lista-sorteio");

    listaSorteio.innerHTML = "";

    if (listaDeAmigos.length < 2) {
        alert("É necessário pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    let amigosSorteados = [...listaDeAmigos];
    for (let index = amigosSorteados.length - 1; index > 0; index--) {
        const aleatorio = Math.floor(Math.random() * (index + 1));
        [amigosSorteados[index], amigosSorteados[aleatorio]] = [amigosSorteados[aleatorio], amigosSorteados[index]];
    }

    // Verifica repetição
    for (let index = 0; index < listaDeAmigos.length; index++) {
        if (listaDeAmigos[index] === amigosSorteados[index]) {
            const noRep = (index + 1) % listaDeAmigos.length;
            [amigosSorteados[index], amigosSorteados[noRep]] = [amigosSorteados[noRep], amigosSorteados[index]];
        }
    }

    for (let i = 0; i < listaDeAmigos.length; i++) {
        listaSorteio.innerHTML += `${listaDeAmigos[i]} -> ${amigosSorteados[i]}</br>`;
    }
}

function reiniciar() {
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    listaDeAmigos = [];
}