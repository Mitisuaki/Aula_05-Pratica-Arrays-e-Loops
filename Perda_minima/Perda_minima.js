const precos = [5, 5, 5, 5, 5, 5, 5];

function solucao(precos) {

    let perdaMinima = Math.abs(Math.max(...precos));

    for (let indice in precos) {

        for (let indice2 in precos) {

            if (indice < indice2 && precos[indice] >= precos[indice2] && precos[indice] - precos[indice2] < perdaMinima) {

                perdaMinima = precos[indice] - precos[indice2];
            }
        }
    }

    return (perdaMinima);
}

console.log(solucao(precos));