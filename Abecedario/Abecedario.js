const letra = "m";
const palavras = ["mamao", "maca", "melao", "melancia", "laranja"];


function solucao(letra, palavras) {

    let wrongAsnwers = 0;

    for (let palavra of palavras) {

        if (palavra[0] !== letra) {

            wrongAsnwers++;
        }
    }

    return (wrongAsnwers);
}

console(solucao());