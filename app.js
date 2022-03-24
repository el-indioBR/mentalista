var numeroSecreto = parseInt(Math.random() * 101);
var listaChutes = [];

function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);

    if (chute == numeroSecreto)
        elementoResultado.innerHTML =
            "Você acertou, o número secreto era o: " + numeroSecreto;
    else if (chute > 100 || chute < 0)
        elementoResultado.innerHTML = "Você deve digitar um número entre 0 e 100";
    else {
        mostraChutes(chute);
        if (numeroSecreto > chute)
            elementoResultado.innerHTML = "Você errou, o número secreto é maior do que o digitado";
        else elementoResultado.innerHTML = "Você errou, o número secreto é menor do que o digitado";
    }
    document.getElementById("valor").value = ''
}

function mostraChutes(chute) {
    var elementoChutes = document.getElementById("chutes");
    listaChutes.push(chute);
    elementoChutes.innerHTML = `Valores informados: ${listaChutes}`
}