const precos = [100, 500, 10, 100, 100];

function solucao() {

    if (precos[4] !== undefined) {

        let soma = 0;
        let lowestValue = precos[0];

        for (let indice in precos) {

            if (lowestValue > precos[indice]) {

                lowestValue = precos[indice];
            }

            soma += precos[indice];
        }

        return (soma - lowestValue);
    }

    else {

        let somaLess5 = 0

        for (let value of precos) {

            somaLess5 += value;
        }

        return (somaLess5);
    }
}

console.log(solucao());