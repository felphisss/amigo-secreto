function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo").value;
    let amigosIncluidos = document.getElementById("lista-amigos").textContent;    

    if ((!isNaN(nomeAmigo)) || (nomeAmigo === "")){
        alert("Insira um nome válido.")
        document.getElementById("nome-amigo").value = "";
        return;
    }

    if (amigosIncluidos === "") {
        document.getElementById("lista-amigos").textContent = nomeAmigo;
    } else {
        amigosIncluidos = `${amigosIncluidos}, ${nomeAmigo}`;
        document.getElementById("lista-amigos").textContent = amigosIncluidos
    }
    
    document.getElementById("nome-amigo").value = "";
}

function sortear() {
    let amigosIncluidos = document.getElementById("lista-amigos").textContent;
    let amigoSorteado = null;
    let listaSorteio = document.getElementById("lista-sorteio");
    let nomesSorteados = [];

    listaSorteio.innerHTML = "";

    amigosIncluidos = amigosIncluidos.split(", ")
    for (let index = 0; index < amigosIncluidos.length; index++) {
        amigoSorteado = amigosIncluidos[Math.floor(Math.random() * (amigosIncluidos.length))]
        while ((amigoSorteado == amigosIncluidos[index]) || (nomesSorteados.includes(amigoSorteado))) {
            amigoSorteado = amigosIncluidos[Math.floor(Math.random() * (amigosIncluidos.length) )]
        }
        nomesSorteados.push(amigoSorteado);
        listaSorteio.innerHTML += `${amigosIncluidos[index]} -> ${amigoSorteado}</br>`;
    }

}

function reiniciar() {
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}