const resultados = [
    "V",
    "E",
    "V",
    "E"
];

function solucao(resultados) {

    let pontuacao = 0;

    for (let resultado of resultados) {

        if (resultado.toLowerCase() === "v") {

            pontuacao += 3;

        }

        else if (resultado.toLowerCase() === "e") {

            pontuacao += 1;

        }
    }

    console.log(pontuacao)

}

console.log(solucao(resultados));