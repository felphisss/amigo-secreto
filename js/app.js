let listaDeAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo").value;

    if ((!isNaN(nomeAmigo)) || (nomeAmigo === "")){
        alert("Insira um nome válido.")
        document.getElementById("nome-amigo").value = "";
        return;
    }

    if (listaDeAmigos.includes(nomeAmigo)) {
        alert("Nome já incluído! Insira outro nome.");
        return;
    }

    listaDeAmigos.push(nomeAmigo);
    
    document.getElementById("nome-amigo").value = "";

    atualizarAmigos();
    atualizarSorteio();
}

function sortear() {
    let listaSorteio = document.getElementById("lista-sorteio");

    listaSorteio.innerHTML = "";

    if (listaDeAmigos.length < 3) {
        alert("É necessário pelo menos três amigos para realizar o sorteio.");
        return;
    }

    let amigosSorteados = [...listaDeAmigos];
    embaralhar(amigosSorteados);
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

function embaralhar(lista) {
    for (let index = lista.length - 1; index > 0; index--) {
        const aleatorio = Math.floor(Math.random() * (index + 1));
        [lista[index], lista[aleatorio]] = [lista[aleatorio], lista[index]];
    }
}

function reiniciar() {
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    listaDeAmigos = [];
}

function removerAmigo(index) {
    listaDeAmigos.splice(index, 1);
    atualizarAmigos();
    atualizarSorteio();
}

function atualizarSorteio() {
    let listaSorteio = document.getElementById("lista-sorteio");
    listaSorteio.innerHTML = "";
}

function atualizarAmigos() {
    let amigosIncluidos = document.getElementById("lista-amigos");
    amigosIncluidos.innerHTML = "";

    for (let index = 0; index < listaDeAmigos.length; index++) {
        let span = document.createElement('span');
        if (amigosIncluidos.innerHTML === "") {
            span.textContent = listaDeAmigos[index];
        } else {
            span.textContent += `, ${listaDeAmigos[index]}`;
        }

        span.addEventListener('click', function() {
            removerAmigo(index);
        });

        amigosIncluidos.appendChild(span);
    }
}